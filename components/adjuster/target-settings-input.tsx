import React from "react";
import Card from "react-bootstrap/Card";
import { TargetSettings } from "../adjuster";
import MonitorDistanceInput from "./inputs/monitor-distance-input";

type Props = TargetSettings & {
  handleTargetMonitorDistanceChange: React.ChangeEventHandler<HTMLInputElement>;
};

/** 変換方法の設定の入力コンポーネント */
export default function TargetSettingsInput(props: Props) {
  return (
    <Card>
      <Card.Header>変換方法の設定</Card.Header>
      <Card.Body className="m-0">
        <MonitorDistanceInput
          monitorDistance={props.targetMonitorDistance}
          handleMonitorDistanceChange={props.handleTargetMonitorDistanceChange}
        />
      </Card.Body>
    </Card>
  );
}
