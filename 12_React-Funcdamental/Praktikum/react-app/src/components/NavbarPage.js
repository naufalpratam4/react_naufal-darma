import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function NavbarPage() {
  return (
    <Navbar expand="lg" bg="light" className="bgNav" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">CreateProduct</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="primary" href="#home">
              Home
            </Button>{" "}
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">FAQs</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
