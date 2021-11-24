import {
  calculateAngleOfView,
  calculateAngleAtMonitorDistance,
  calculateAngleOfViewFromAngleAtMonitorDistance,
  FieldOfView,
  FIELD_OF_VIEW_BASIS,
  MonitorDistance,
  Resolution,
  radianToDegree,
  Radian,
} from "./field-of-view";
import {
  calculateNewMouseSensitivity,
  convertUnitToCm,
  getMouseSensitivityScaleFactor,
  MouseSensitivity,
} from "./mouse-sensitivity";

/**
 * モニターディスタンスを用いてマウス感度を新たな視野角用に変換する。
 * @param oldMouseSensitivity 旧環境のマウス感度
 * @param oldFieldOfView 旧環境の視野角
 * @param oldResolution 旧環境の解像度
 * @param newFieldOfView 新環境の視野角
 * @param monitorDistance モニターディスタンス(範囲: 0.0--1.0)
 * @returns 新環境のマウス感度
 */
export function convertMouseSensitivity(
  oldMouseSensitivity: MouseSensitivity,
  oldFieldOfView: FieldOfView,
  oldResolution: Resolution,
  newFieldOfView: FieldOfView,
  monitorDistance: MonitorDistance
): MouseSensitivity {
  // 画角の計算
  const oldAngleOfView = calculateAngleOfView(oldFieldOfView, oldResolution);
  const newAngleOfView = calculateAngleOfView(newFieldOfView, oldResolution);

  // モニターディスタンスの点に対応する角度の計算
  const oldAngleAtMonitorDistance = calculateAngleAtMonitorDistance(
    oldAngleOfView,
    monitorDistance
  );
  const newAngleAtMonitorDistance = calculateAngleAtMonitorDistance(
    newAngleOfView,
    monitorDistance
  );

  // 新しいマウス感度の計算
  const newMouseSensitivity = calculateNewMouseSensitivity(
    oldMouseSensitivity,
    oldAngleAtMonitorDistance / newAngleAtMonitorDistance
  );
  return newMouseSensitivity;
}

/**
 * モニターディスタンスを用いて視野角を新たなマウス感度用に変換する。
 * @param oldMouseSensitivity 旧環境のマウス感度
 * @param oldFieldOfView 旧環境の視野角
 * @param oldResolution 旧環境の解像度
 * @param newMouseSensitivity 新環境のマウス感度
 * @param monitorDistance モニターディスタンス
 * @returns 新環境の視野角
 */
export function convertFieldOfView(
  oldMouseSensitivity: MouseSensitivity,
  oldFieldOfView: FieldOfView,
  oldResolution: Resolution,
  newMouseSensitivity: MouseSensitivity,
  monitorDistance: MonitorDistance
): FieldOfView {
  // 事前にマウス感度の単位を揃える。
  oldMouseSensitivity = convertUnitToCm(oldMouseSensitivity);
  newMouseSensitivity = convertUnitToCm(newMouseSensitivity);

  // マウス感度の倍率を求める。
  const mouseSensitivityScaleFactor = getMouseSensitivityScaleFactor(
    oldMouseSensitivity,
    newMouseSensitivity
  );

  // 計算に必要な情報を旧環境から算出する。
  const oldAngleOfView: Radian = calculateAngleOfView(
    oldFieldOfView,
    oldResolution
  );
  const oldAngleAtMonitorDistance: Radian = calculateAngleAtMonitorDistance(
    oldAngleOfView,
    monitorDistance
  );

  // 新環境のモニターディスタンスでの角度を算出する。
  const newAngleAtMonitorDistance: Radian =
    oldAngleAtMonitorDistance / mouseSensitivityScaleFactor;

  // 画角を求める。
  const newAngleOfView = calculateAngleOfViewFromAngleAtMonitorDistance(
    newAngleAtMonitorDistance,
    monitorDistance
  );

  // ラジアンを度数に変換する。
  const newFieldOfView = {
    value: radianToDegree(newAngleOfView),
    basis: FIELD_OF_VIEW_BASIS.HORIZONTAL_DIRECT,
  } as FieldOfView;
  return newFieldOfView;
}
