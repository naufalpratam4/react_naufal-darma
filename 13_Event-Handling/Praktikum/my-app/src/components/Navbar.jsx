import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarPage = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/id/4/47/Logo_Universitas_Negeri_Semarang.png"
              width="30"
              height="auto"
              className="d-inline-block align-top"
            />{" "}
            Naufal Darma
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarPage;
