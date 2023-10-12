import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"; // Import axios

function FormAddProduct() {
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert("tidak boleh kosong, harap mengisi form");
    } else {
      const productNameInput = form.elements.ProductName;
      const productCategoryInput = form.elements.ProductCategory;
      const productFreshnessInput = form.elements.ProductFreshness;
      const productPriceInput = form.elements.ProductPrice;

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
        productNameInput.style.border = "1px solid green";
        setErrorMessage("");
      }

      // Other validations...

      event.preventDefault();

      try {
        // Send a POST request to the MockAPI
        const response = await axios.post(
          "https://65239ce1ea560a22a4e88ce2.mockapi.io/product",
          {
            ProductName: productName,
            ProductCategory: productCategoryInput.value,
            ProductFreshness: productFreshnessInput.value,
            ProductPrice: productPriceInput.value,
          }
        );

        // Assuming the API returns the created product, update state
        setProducts([...products, response.data]);

        // Do any additional success handling if needed
        alert("Berhasil");
      } catch (error) {
        // Handle error appropriately (e.g., show error message)
        console.error("Error adding product:", error);
      }
    }

    setValidated(true);
  };

  return (
    <div className="container pt-5" style={{ width: "800px" }}>
      <h2>Add Product</h2>
      {/* form */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="ProductName">
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
            name="ProductCategory"
            aria-label="Default select example"
            required
          >
            <option></option>
            <option value="Perlengkapan Rumah">Rumah</option>
            <option value="Perlengkapan Motor">Motor</option>
            <option value="Perlengkapan Dapur">Dapur</option>
          </Form.Select>
        </div>

        {/* Product Freshness */}
        <div className="mt-3">
          <label htmlFor="">Product Freshness</label>
          <Form.Select
            name="ProductFreshness"
            aria-label="Default select example"
            required
          >
            <option></option>
            <option value="Brand New">Brand New</option>
            <option value="Second Hand">Second Hand</option>
            <option value="Rubishh">Rubishh</option>
          </Form.Select>
        </div>

        {/* Product Price */}
        <div>
          <div>
            <Form.Group controlId="ProductPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control required type="number" placeholder="$1" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </Form.Group>
          </div>
        </div>

        {/* cek ulang */}
        <Form.Group className="mb-3 mt-2">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default FormAddProduct;
