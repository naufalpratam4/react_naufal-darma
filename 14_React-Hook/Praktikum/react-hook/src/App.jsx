import React from "react";
// import { useEffect } from "react";
import NavbarPage from "./components/NavbarPage";
// import CreateAccount from "./Pages/CreateAccount";
import CreateProduct from "./Pages/CreateProduct";

const App = () => {
  return (
    <>
      <NavbarPage />
      {/* <CreateAccount /> */}
      <CreateProduct />
    </>
  );
};

export default App;
