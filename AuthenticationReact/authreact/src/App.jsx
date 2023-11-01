import React from "react";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<>Haloo</>} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
