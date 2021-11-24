import React from "react";
import Card from "react-bootstrap/Card";
import {
  MouseSensitivity,
  MOUSE_SENSITIVITY_UNIT,
  updateMouseSensitivity,
} from "../../utils/mouse-sensitivity";
import { convertFieldOfView } from "../../utils/ms-fov-conversion";
import { SourceSettings, TargetSettings } from "../adjuster";
import MouseSensitivityInput from "./inputs/mouse-sensitivity-input";

type Props = SourceSettings & TargetSettings;
type State = {
  targetMouseSensitivity: MouseSensitivity;
};

/** 視野角調整コンポーネント */
export default class FieldOfViewAdjuster extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      targetMouseSensitivity: {
        value: 30,
        unit: MOUSE_SENSITIVITY_UNIT.CM_360,
      },
    };
  }

  handleTargetMouseSensitivityChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const newMouseSensitivity = updateMouseSensitivity(
      this.state.targetMouseSensitivity,
      event.target.name,
      event.target.value
    );
    if (newMouseSensitivity !== null) {
      // ステートの更新
      this.setState({
        targetMouseSensitivity: newMouseSensitivity,
      });
    }
  };

  render() {
    const newFieldOfView = convertFieldOfView(
      this.props.sourceMouseSensitivity,
      this.props.sourceFieldOfView,
      this.props.sourceResolution,
      this.state.targetMouseSensitivity,
      this.props.targetMonitorDistance
    );
    return (
      <Card>
        <Card.Header>マウス感度から視野角を計算する</Card.Header>
        <Card.Body className="m-0">
          <MouseSensitivityInput
            mouseSensitivity={this.state.targetMouseSensitivity}
            handleMouseSensitivityChange={
              this.handleTargetMouseSensitivityChange
            }
          />
          <p className="mt-1">
            新しい視野角: {newFieldOfView.value}° (直接入力 水平視野角)
          </p>
        </Card.Body>
      </Card>
    );
  }
}
