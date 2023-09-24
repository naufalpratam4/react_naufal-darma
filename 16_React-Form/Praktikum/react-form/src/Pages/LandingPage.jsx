import NavbarPage from "../Components/NavbarPage";

export default function () {
  const name = "naufal";
  return (
    <>
      <NavbarPage header="Ini Navbar" />
      <div className="container">
        <h2 className="pt-5 fw-bold">
          Hallo {name} <br />
          Welcome Back
        </h2>
      </div>
    </>
  );
}
