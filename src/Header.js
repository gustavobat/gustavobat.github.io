import {Navbar, Container, Nav} from 'react-bootstrap';
import Plane from "./plane-logo-large.png";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Plane} height={40} alt="Plane Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="justify-content-center"
            style={{maxHeight: '30px'}}
            navbarScroll
          >
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
