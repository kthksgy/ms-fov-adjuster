import React from "react";
import SourceInput from "./adjuster/source-settings-input";
import MouseSensitivityAdjuster from "./adjuster/ms-adjuster";
import FieldOfViewAdjuster from "./adjuster/fov-adjuster";
import TargetSettingsInput from "./adjuster/target-settings-input";
import {
  FieldOfView,
  Resolution,
  MonitorDistance,
  FIELD_OF_VIEW_BASIS,
  updateFieldOfView,
} from "../utils/field-of-view";
import {
  MouseSensitivity,
  MOUSE_SENSITIVITY_UNIT,
  updateMouseSensitivity,
} from "../utils/mouse-sensitivity";

export type SourceSettings = {
  sourceMouseSensitivity: MouseSensitivity;
  sourceFieldOfView: FieldOfView;
  sourceResolution: Resolution;
};

export type TargetSettings = {
  targetMonitorDistance: MonitorDistance;
};

/** マウス感度／視野角調整アプリコンポーネント */
export default class Adjuster extends React.Component<
  {},
  SourceSettings & TargetSettings
> {
  constructor(props: never) {
    super(props);
    this.state = {
      sourceMouseSensitivity: {
        value: 40,
        unit: MOUSE_SENSITIVITY_UNIT.CM_360,
      },
      sourceFieldOfView: {
        value: 90,
        basis: FIELD_OF_VIEW_BASIS.HORIZONTAL_4_3,
      },
      sourceResolution: { width: 1920, height: 1080 },
      targetMonitorDistance: 0,
    };
  }

  handleSourceMouseSensitivityChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    // 必要に応じて変更値をキャスト
    const newMouseSensitivity = updateMouseSensitivity(
      this.state.sourceMouseSensitivity,
      event.target.name,
      event.target.value
    );
    if (newMouseSensitivity !== null) {
      // ステートの更新
      this.setState({
        sourceMouseSensitivity: newMouseSensitivity,
      });
    }
  };

  handleSourceFieldOfViewChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const newFieldOfView = updateFieldOfView(
      this.state.sourceFieldOfView,
      this.state.sourceResolution,
      event.target.name,
      event.target.value
    );
    // ステートの更新
    if (newFieldOfView) {
      this.setState({
        sourceFieldOfView: newFieldOfView,
      });
    }
  };

  handleSourceResolutionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    // ステートの更新
    this.setState({
      sourceResolution: {
        ...this.state.sourceResolution,
        [event.target.name]: event.target.value
          ? parseInt(event.target.value)
          : "",
      },
    });
  };

  handleTargetMonitorDistanceChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      // ステートの更新
      this.setState({
        targetMonitorDistance: event.target.value
          ? parseFloat(event.target.value)
          : 0,
      });
    };

  render() {
    return (
      <>
        <div className="m-2">
          <SourceInput
            sourceMouseSensitivity={this.state.sourceMouseSensitivity}
            sourceFieldOfView={this.state.sourceFieldOfView}
            sourceResolution={this.state.sourceResolution}
            handleSourceMouseSensitivityChange={
              this.handleSourceMouseSensitivityChange
            }
            handleSourceFieldOfViewChange={this.handleSourceFieldOfViewChange}
            handleSourceResolutionChange={this.handleSourceResolutionChange}
          />
        </div>

        <div className="m-2">
          <TargetSettingsInput
            targetMonitorDistance={this.state.targetMonitorDistance}
            handleTargetMonitorDistanceChange={
              this.handleTargetMonitorDistanceChange
            }
          />
        </div>

        <div className="m-2">
          <MouseSensitivityAdjuster
            sourceMouseSensitivity={this.state.sourceMouseSensitivity}
            sourceFieldOfView={this.state.sourceFieldOfView}
            sourceResolution={this.state.sourceResolution}
            targetMonitorDistance={this.state.targetMonitorDistance}
          />
        </div>

        <div className="m-2">
          <FieldOfViewAdjuster
            sourceMouseSensitivity={this.state.sourceMouseSensitivity}
            sourceFieldOfView={this.state.sourceFieldOfView}
            sourceResolution={this.state.sourceResolution}
            targetMonitorDistance={this.state.targetMonitorDistance}
          />
        </div>
      </>
    );
  }
}
