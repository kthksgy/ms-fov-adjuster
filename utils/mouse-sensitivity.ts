// =============================
// 型定義
// =============================

export const MOUSE_SENSITIVITY_UNIT = {
  CM_360: "cm/360°",
  IN_360: "in/360°",
} as const;

/** マウス感度の型 */
export type MouseSensitivity = {
  /** 360°を一周するためのマウスの移動距離 */
  value: number;
  /** マウスの移動距離の単位 */
  unit: typeof MOUSE_SENSITIVITY_UNIT[keyof typeof MOUSE_SENSITIVITY_UNIT];
};

// =============================

/**
 * 与えられた値でマウス感度を上書きする。
 * @param mouseSensitivity 上書き先のマウス感度
 * @param name 値の名前
 * @param value 値
 * @returns 変更が反映されたマウス感度
 */
export function updateMouseSensitivity(
  mouseSensitivity: MouseSensitivity,
  name: string,
  value: string
): MouseSensitivity | null {
  switch (name) {
    case "value":
      return {
        value: value ? parseFloat(value) : "",
        unit: mouseSensitivity.unit,
      } as MouseSensitivity;
    case "unit":
      if (mouseSensitivity.unit != value) {
        if (value == MOUSE_SENSITIVITY_UNIT.CM_360) {
          return convertUnitToCm(mouseSensitivity);
        } else if (value == MOUSE_SENSITIVITY_UNIT.IN_360) {
          return convertUnitToIn(mouseSensitivity);
        } else {
          return null;
        }
      }
    default:
      return null;
  }
}

/** マウス感度の単位を[cm/360°]に変換する。 */
export function convertUnitToCm(
  mouseSensitivity: MouseSensitivity
): MouseSensitivity {
  return mouseSensitivity.unit == MOUSE_SENSITIVITY_UNIT.CM_360
    ? mouseSensitivity
    : ({
        value: mouseSensitivity.value * 2.54,
        unit: MOUSE_SENSITIVITY_UNIT.CM_360,
      } as MouseSensitivity);
}

/** マウス感度の単位を[in/360°]に変換する。 */
export function convertUnitToIn(
  mouseSensitivity: MouseSensitivity
): MouseSensitivity {
  return mouseSensitivity.unit == MOUSE_SENSITIVITY_UNIT.IN_360
    ? mouseSensitivity
    : ({
        value: mouseSensitivity.value / 2.54,
        unit: MOUSE_SENSITIVITY_UNIT.IN_360,
      } as MouseSensitivity);
}

/**
 * 係数倍されたマウス感度を取得する。
 * @param oldMouseSensitivity 基となるマウス感度
 * @param scaleFactor 係数
 * @returns
 */
export function calculateNewMouseSensitivity(
  oldMouseSensitivity: MouseSensitivity,
  scaleFactor: number
) {
  const newMouseSensitivity: MouseSensitivity = {
    value: oldMouseSensitivity.value * scaleFactor,
    unit: oldMouseSensitivity.unit,
  };
  return newMouseSensitivity;
}

/**
 * 新しいマウス感度が古いマウス感度の何倍かを計算する。
 * @param oldMouseSensitivity 古いマウス感度
 * @param newMouseSensitivity 新しいマウス感度
 * @returns 倍率
 */
export function getMouseSensitivityScaleFactor(
  oldMouseSensitivity: MouseSensitivity,
  newMouseSensitivity: MouseSensitivity
): number {
  // 単位が揃っていない場合はcm/360°で統一
  if (oldMouseSensitivity.unit != newMouseSensitivity.unit) {
    oldMouseSensitivity = convertUnitToCm(oldMouseSensitivity);
    newMouseSensitivity = convertUnitToCm(newMouseSensitivity);
  }
  return newMouseSensitivity.value / oldMouseSensitivity.value;
}
