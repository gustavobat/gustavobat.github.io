import {Row, Col, Container} from 'react-bootstrap';

function Body() {
  return (
    <Container fluid style={{backgroundColor: "lightblue",  minHeight: "70vh", minWidth: "100wh"}}>
      <Row>
        <Col xs={{ span: 3, offset: 6 }}>Sections</Col>
      </Row>
    </Container>
  );
}

export default Body;
