// =============================
// 型定義
// =============================

/** 角度(ラジアン)[rad] */
export type Radian = number;

/** 角度(度)[°] */
export type Degree = number;

/** 視野角の値の基準の定数文字列 */
export const FIELD_OF_VIEW_BASIS = {
  HORIZONTAL_4_3: "4:3 Horizontal",
  HORIZONTAL_16_9: "16:9 Horizontal",
  HORIZONTAL_DIRECT: "Direct Horizontal",
  VERTICAL: "Vertical",
} as const;

/** 視野角 */
export type FieldOfView = {
  /** 値[°] */
  value: number;
  /** 値の基準 */
  basis: typeof FIELD_OF_VIEW_BASIS[keyof typeof FIELD_OF_VIEW_BASIS];
};

/** モニターディスタンス[%] */
export type MonitorDistance = number;

/** 解像度 */
export type Resolution = {
  /** 横のピクセル数 */
  width: number;
  /** 縦のピクセル数 */
  height: number;
};

export const NEAR_ZERO = 0.000000000000001;
export const LARGE_NUMBER = 1000000;

// =============================

/** 度数[°]を度数[rad]に変換する。 */
export function degreeToRadian(degree: Degree): Radian {
  return degree * (Math.PI / 180);
}

/** 度数[rad]を度数[°]に変換する。 */
export function radianToDegree(radian: Radian): Degree {
  return radian / (Math.PI / 180);
}

/**
 * 与えられた値で視野角を上書きする。
 * @param fieldOfView 上書き先の視野角
 * @param resolution
 * @param name 値の名前
 * @param value 値
 * @returns 変更が反映された視野角
 */
export function updateFieldOfView(
  fieldOfView: FieldOfView,
  resolution: Resolution,
  name: string,
  value: string
): FieldOfView | null {
  switch (name) {
    case "value":
      return {
        value: value ? parseFloat(value) : "",
        basis: fieldOfView.basis,
      } as FieldOfView;
    case "basis":
      return convertFieldOfViewBasis(
        fieldOfView,
        resolution,
        value as FieldOfView["basis"]
      );
    default:
      return null;
  }
}

/**
 * 実視野角計算におけるアスペクト比の係数を取得する。
 * @param basis 視野角の基準
 * @returns アスペクト比の係数
 */
export function getAspectRatioCoefficient(
  basis: FieldOfView["basis"] | string
): number {
  switch (basis) {
    case FIELD_OF_VIEW_BASIS.HORIZONTAL_4_3:
      return 3.0 / 4.0;
    case FIELD_OF_VIEW_BASIS.HORIZONTAL_16_9:
      return 9.0 / 16.0;
    case FIELD_OF_VIEW_BASIS.VERTICAL:
      return 1.0;
    default:
      return 1.0;
  }
}

/**
 * 解像度を基に実際の画角を計算する。
 * @param fieldOfView 視野角
 * @param resolution 解像度
 * @returns 実際の画角
 */
export function calculateAngleOfView(
  fieldOfView: FieldOfView,
  resolution: Resolution
): Radian {
  switch (fieldOfView.basis) {
    case FIELD_OF_VIEW_BASIS.HORIZONTAL_4_3:
    case FIELD_OF_VIEW_BASIS.HORIZONTAL_16_9:
    case FIELD_OF_VIEW_BASIS.VERTICAL: {
      return (
        Math.atan(
          Math.tan(degreeToRadian(fieldOfView.value) / 2) *
            getAspectRatioCoefficient(fieldOfView.basis) *
            (resolution.width / resolution.height)
        ) * 2
      );
    }
    case FIELD_OF_VIEW_BASIS.HORIZONTAL_DIRECT:
    default:
      return degreeToRadian(fieldOfView.value);
  }
}

/**
 * 基準の変更に対応して画角の数値を変換する。
 * @param fieldOfView 視野角
 * @param resolution 解像度
 * @param newBasis 新しい視野角の基準
 * @returns 新しい視野角
 */
export function convertFieldOfViewBasis(
  fieldOfView: FieldOfView,
  resolution: Resolution,
  newBasis: FieldOfView["basis"]
): FieldOfView {
  const angleOfView = calculateAngleOfView(fieldOfView, resolution);
  return {
    value:
      Math.round(
        radianToDegree(
          newBasis == FIELD_OF_VIEW_BASIS.HORIZONTAL_DIRECT
            ? angleOfView
            : Math.atan(
                Math.tan(angleOfView / 2) /
                  getAspectRatioCoefficient(newBasis) /
                  (resolution.width / resolution.height)
              ) * 2
        ) * LARGE_NUMBER
      ) / LARGE_NUMBER,
    basis: newBasis,
  } as FieldOfView;
}

/**
 * 画面上の点に対応する角度を計算する。
 * @param angleOfView 画角
 * @param monitorDistance モニターディスタンス(範囲: 0.0--1.0)
 * @returns 画面上の点に対応する角度
 */
export function calculateAngleAtMonitorDistance(
  angleOfView: Radian,
  monitorDistance: MonitorDistance
): Radian {
  // Monitor Distance 0%は一般的に『0に限りなく近い値』なので変換
  monitorDistance = monitorDistance === 0 ? NEAR_ZERO : monitorDistance;
  return Math.atan(monitorDistance * Math.tan(angleOfView / 2)) * 2;
}

/**
 * 画面上の点に対応する角度を計算する。
 * @param angleOfView 画角
 * @param monitorDistance モニターディスタンス(範囲: 0.0--1.0)
 * @returns 画面上の点に対応する角度
 */
export function calculateAngleOfViewFromAngleAtMonitorDistance(
  angleAtMonitorDistance: Radian,
  monitorDistance: MonitorDistance
): Radian {
  // Monitor Distance 0%は一般的に『0に限りなく近い値』なので変換
  monitorDistance = monitorDistance === 0 ? NEAR_ZERO : monitorDistance;
  return Math.atan(Math.tan(angleAtMonitorDistance / 2) / monitorDistance) * 2;
}
