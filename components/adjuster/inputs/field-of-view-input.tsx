import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FieldOfView, FIELD_OF_VIEW_BASIS } from "../../../utils/field-of-view";

type Props = {
  fieldOfView: FieldOfView;
  handleFieldOfViewChange: React.ChangeEventHandler<HTMLElement>;
};

/** 視野角の入力コンポーネント */
export default function FieldOfViewInput(props: Props) {
  return (
    <Row className="g-0">
      <Col md={8}>
        <Form.Group>
          <FloatingLabel controlId="floatingInputGrid" label="視野角">
            <Form.Control
              type="number"
              name="value"
              min="0"
              value={props.fieldOfView.value}
              onChange={props.handleFieldOfViewChange}
            />
          </FloatingLabel>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <FloatingLabel controlId="floatingSelectGrid" label="視野角の基準">
            <Form.Select
              name="basis"
              value={props.fieldOfView.basis}
              onChange={props.handleFieldOfViewChange}
              aria-label="視野角の基準"
            >
              <option value={FIELD_OF_VIEW_BASIS.HORIZONTAL_4_3}>
                4:3画面 水平視野角
              </option>
              <option value={FIELD_OF_VIEW_BASIS.HORIZONTAL_16_9}>
                16:9画面 水平視野角
              </option>
              <option value={FIELD_OF_VIEW_BASIS.HORIZONTAL_DIRECT}>
                直接入力 水平視野角
              </option>
              <option value={FIELD_OF_VIEW_BASIS.VERTICAL}>垂直視野角</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
      </Col>
    </Row>
  );
}
