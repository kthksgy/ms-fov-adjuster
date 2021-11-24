import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MonitorDistance } from "../../../utils/field-of-view";

type Props = {
  monitorDistance: MonitorDistance;
  handleMonitorDistanceChange: React.ChangeEventHandler<HTMLElement>;
};

/** モニターディスタンスの入力コンポーネント */
export default function MonitorDistanceInput(props: Props) {
  return (
    <Row className="g-0">
      <Col md={10}>
        <Form.Group className="pe-3">
          <Form.Label>モニターディスタンス</Form.Label>
          <Form.Range
            min="0.0"
            max="1.0"
            step="0.01"
            value={props.monitorDistance}
            onChange={props.handleMonitorDistanceChange}
          />
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group>
          <FloatingLabel
            controlId="floatingInputGrid"
            label={(props.monitorDistance * 100).toFixed(2) + "%"}
          >
            <Form.Control
              type="number"
              min="0.0"
              max="1.0"
              step="0.01"
              placeholder="0"
              value={props.monitorDistance}
              onChange={props.handleMonitorDistanceChange}
            />
          </FloatingLabel>
        </Form.Group>
      </Col>
    </Row>
  );
}
