import {Row, Col, Container} from 'react-bootstrap';

function Body() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ span: 3, offset: 6 }}>Sections</Col>
      </Row>
    </Container>
  );
}

export default Body;
