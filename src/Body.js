import {Row, Col, Container} from 'react-bootstrap';
import RepoCard from './RepoCard.tsx'

function Body() {
  return (
    <Container style={{height: "100vh", justifyContent: "center", paddingTop: "5vh", paddingBottom: "5vh"}}>
      <Row style={{height: "100vh", justifyContent: "center", padding: "100"}}>
        <Col xs={{span: 8}}>
          <Row>
            <Col>
              <RepoCard username="gustavobat" repository="jstatics"/>
            </Col>
            <Col>
              <RepoCard username="gustavobat" repository="gustavobat.github.io"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <RepoCard username="gustavobat" repository="strings-n-scales"/>
            </Col>
            <Col>
              <RepoCard username="gustavobat" repository="compile-time-8-queens"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
