import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TablePage from "./TablePage";
import Hero from "./Hero";

function FormPage() {
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const productName = form.elements.validation.value;
      const productCategory = form.elements.productCategory.value;
      alert("coba");
      event.preventDefault();
      // Add the new product to the products array
      setProducts([...products, { productName, productCategory }]);
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <Hero />

      {/* form */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="validation">
            <Form.Label>Product Name</Form.Label>
            <Form.Control required type="text" placeholder="Product Name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
