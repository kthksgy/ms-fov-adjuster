import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  MouseSensitivity,
  MOUSE_SENSITIVITY_UNIT,
} from "../../../utils/mouse-sensitivity";

type Props = {
  mouseSensitivity: MouseSensitivity;
  handleMouseSensitivityChange: React.ChangeEventHandler<HTMLElement>;
};

/** マウス感度の入力コンポーネント */
export default function MouseSensitivityInput(props: Props) {
  return (
    <Row className="g-0">
      <Col md={8}>
        <Form.Group>
          <FloatingLabel controlId="floatingInputGrid" label="マウス感度">
            <Form.Control
              type="number"
              name="value"
              min="0"
              value={props.mouseSensitivity.value}
              onChange={props.handleMouseSensitivityChange}
              placeholder="40.0"
            />
          </FloatingLabel>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="マウス感度の単位"
          >
            <Form.Select
              name="unit"
              value={props.mouseSensitivity.unit}
              onChange={props.handleMouseSensitivityChange}
              aria-label="マウス感度の単位"
            >
              {Object.values(MOUSE_SENSITIVITY_UNIT).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
      </Col>
    </Row>
  );
}
