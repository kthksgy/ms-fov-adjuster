import React from "react";
import Card from "react-bootstrap/Card";
import {
  FieldOfView,
  FIELD_OF_VIEW_BASIS,
  updateFieldOfView,
} from "../../utils/field-of-view";
import { convertMouseSensitivity } from "../../utils/ms-fov-conversion";
import { SourceSettings, TargetSettings } from "../adjuster";
import FieldOfViewInput from "./inputs/field-of-view-input";

type Props = SourceSettings & TargetSettings;
type State = {
  targetFieldOfView: FieldOfView;
};

/** マウス感度調整コンポーネント */
export default class MouseSensitivityAdjuster extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      targetFieldOfView: {
        value: 100,
        basis: FIELD_OF_VIEW_BASIS.HORIZONTAL_4_3,
      },
    };
  }

  handleTargetFieldOfViewChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const newFieldOfView = updateFieldOfView(
      this.state.targetFieldOfView,
      this.props.sourceResolution,
      event.target.name,
      event.target.value
    );
    if (newFieldOfView !== null) {
      // ステートの更新
      this.setState({
        targetFieldOfView: newFieldOfView,
      });
    }
  };

  render() {
    const newMouseSensitivity = convertMouseSensitivity(
      this.props.sourceMouseSensitivity,
      this.props.sourceFieldOfView,
      this.props.sourceResolution,
      this.state.targetFieldOfView,
      this.props.targetMonitorDistance
    );
    return (
      <Card>
        <Card.Header>視野角からマウス感度を計算する</Card.Header>
        <Card.Body className="m-0">
          <FieldOfViewInput
            fieldOfView={this.state.targetFieldOfView}
            handleFieldOfViewChange={this.handleTargetFieldOfViewChange}
          />
          <p className="mt-1">
            新しいマウス感度: {newMouseSensitivity.value}[
            {newMouseSensitivity.unit}]
          </p>
        </Card.Body>
      </Card>
    );
  }
}
