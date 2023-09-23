import React from "react";
// import { useEffect } from "react";
// import NavbarPage from "./components/NavbarPage";

import LandingPage from "./Pages/LandingPage";
// import { createRoot } from "react-dom/client";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./Pages/CreateProduct";
// import Tables from "./components/Tables";

const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/createproduct" exact element={<CreateProduct />} />
          <Route path="/product/:id" component={ProductDetail} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
