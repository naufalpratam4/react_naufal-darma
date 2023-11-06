import React from "react";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/SignIn";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<>Haloo</>} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/signin" exact element={<Login />} />
          <Route path="/homepage" exact element={<HomePage />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
