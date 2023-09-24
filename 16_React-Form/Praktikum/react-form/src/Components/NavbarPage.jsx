import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarPage(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{props.header}</Navbar.Brand>
          <Nav className="ms-auto">
            <Link
              to="/"
              className="me-3"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
            <Link
              to="/create"
              style={{ textDecoration: "none", color: "white" }}
            >
              Create Product
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
