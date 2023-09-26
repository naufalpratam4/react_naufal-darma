// import { useState } from "react";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CardProduct from "./container/Pages/Product/cardProduct/CardProduct";
import Product from "./container/Pages/Product/Product";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<CardProduct />} />
          <Route path="/product" exact element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
