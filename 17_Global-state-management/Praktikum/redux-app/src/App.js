import React from "react";
// import SimpleForm from "./components/FormPage";
import { ListProduct } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProductComponent from "./components/AddProduct";
function App() {
  return (
    <div className="container pt-4" style={{ width: "800px" }}>
      <h2>List Product</h2>
      <hr />
      <AddProductComponent />
      <hr />
      <ListProduct />
    </div>
  );
}

export default App;
