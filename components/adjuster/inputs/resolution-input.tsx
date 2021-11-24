import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Resolution } from "../../../utils/field-of-view";

type Props = {
  resolution: Resolution;
  handleResolutionChange: React.ChangeEventHandler<HTMLElement>;
};

/** 解像度の入力コンポーネント */
export default function ResolutionInput(props: Props) {
  return (
    <Row className="g-0">
      <Col md>
        <Form.Group>
          <FloatingLabel controlId="floatingInputGrid" label="解像度の横幅">
            <Form.Control
              type="number"
              name="width"
              min="0"
              step="1"
              value={props.resolution.width}
              onChange={props.handleResolutionChange}
              placeholder="1920"
            />
          </FloatingLabel>
        </Form.Group>
      </Col>
      <Col md>
        <Form.Group>
          <FloatingLabel controlId="floatingInputGrid" label="解像度の縦幅">
            <Form.Control
              type="number"
              name="height"
              min="0"
              step="1"
              value={props.resolution.height}
              onChange={props.handleResolutionChange}
              placeholder="1080"
            />
          </FloatingLabel>
        </Form.Group>
      </Col>
    </Row>
  );
}
