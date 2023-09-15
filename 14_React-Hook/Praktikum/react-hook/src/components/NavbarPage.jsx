import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarPage = () => {
  return (
    <>
      <Navbar
        className="bg-body-dark"
        bg="dark"
        variant="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="foto google"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Naufal
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="">Create Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
