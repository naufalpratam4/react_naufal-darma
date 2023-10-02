import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TablePage from "../components/TablePage";
import Hero from "../components/Hero";
import NavbarPage from "../components/NavbarPage";

function FormPage() {
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert("tidak boleh kosong, harap mengisi form");
    } else {
      const productNameInput = form.elements.validation;
      const productCategoryInput = form.elements.productCategory;

      // Validate Product Name
      const productName = productNameInput.value.trim();
      if (
        productName === "" ||
        /[@#{}]/.test(productName) ||
        productName.length > 25
      ) {
        setErrorMessage(
          "Product Name tidak boleh kosong, mengandung karakter @, #, {, atau melebihi 25 karakter"
        );
        event.preventDefault();
        productNameInput.style.border = "1px solid red";

        return;
      } else {
        // Reset border to default if validation passes
        productNameInput.style.border = "1px solid green";
        setErrorMessage("");
      }

      // Other validations...

      // If all validations pass, proceed
      alert("Berhasil");
      event.preventDefault();

      // Add the new product to the products array
      setProducts([
        ...products,
        { productName, productCategory: productCategoryInput.value },
      ]);
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <NavbarPage />
      <Hero />

      {/* form */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="validation">
            <Form.Label>Product Name</Form.Label>
            <Form.Control required type="text" placeholder="Product Name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </Form.Group>
        </div>

        {/* Product Kategory */}
        <div className="mt-3">
          <label htmlFor="">Product Category</label>
          <Form.Select
            name="productCategory"
            aria-label="Default select example"
            required
          >
            <option></option>
            <option value="Perlengkapan Rumah">Rumah</option>
            <option value="Perlengkapan Motor">Motor</option>
            <option value="Perlengkapan Dapur">Dapur</option>
          </Form.Select>
        </div>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <hr />
      <TablePage products={products} />
    </div>
  );
}

export default FormPage;
