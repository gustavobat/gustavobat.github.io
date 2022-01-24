import {Row, Col, Container} from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid style={{backgroundColor: "black", color: "white", height: "20vh", width: "100wh", paddingRight: "0"}}>
      <Row>
        <Col xs={{ span: 3, offset: 6 }}>Sections</Col>
        <Col xs={{ span: 3 }}>Social</Col>
      </Row>
    </Container>
  );
}

export default Footer;
