import React from "react";
import Card from "react-bootstrap/Card";
import { SourceSettings } from "../adjuster";
import FieldOfViewInput from "./inputs/field-of-view-input";
import MouseSensitivityInput from "./inputs/mouse-sensitivity-input";
import ResolutionInput from "./inputs/resolution-input";

type Props = SourceSettings & {
  handleSourceMouseSensitivityChange: React.ChangeEventHandler<HTMLElement>;
  handleSourceFieldOfViewChange: React.ChangeEventHandler<HTMLElement>;
  handleSourceResolutionChange: React.ChangeEventHandler<HTMLElement>;
};

/** 現在の設定の入力コンポーネント */
export default function SourceSettingsInput(props: Props) {
  return (
    <Card>
      <Card.Header>現在の設定</Card.Header>
      <Card.Body className="m-0">
        <MouseSensitivityInput
          mouseSensitivity={props.sourceMouseSensitivity}
          handleMouseSensitivityChange={
            props.handleSourceMouseSensitivityChange
          }
        />

        <FieldOfViewInput
          fieldOfView={props.sourceFieldOfView}
          handleFieldOfViewChange={props.handleSourceFieldOfViewChange}
        />

        <ResolutionInput
          resolution={props.sourceResolution}
          handleResolutionChange={props.handleSourceResolutionChange}
        />
      </Card.Body>
    </Card>
  );
}
