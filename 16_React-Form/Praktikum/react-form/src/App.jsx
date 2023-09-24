import * as React from "react";
import Hero from "./Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/create" element={<Create nama="naufal" />} />
      </Routes>
    </Router>
  );
}

export default App;
