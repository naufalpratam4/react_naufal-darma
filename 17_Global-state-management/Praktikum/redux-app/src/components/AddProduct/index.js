import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getListProduct } from "../../actions/productAction";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function AddProductComponent() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setSelectedFile] = useState(null);

  const { addProductResult } = useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. masuk handle submit");
    dispatch(
      addProduct({
        productName: productName,
        productCategory: productCategory,
        productFreshness: productFreshness,
        additionalDescription: additionalDescription,
        productPrice: productPrice,
      })
    );
  };

  useEffect(() => {
    if (addProductResult) {
      console.log("5. Masuk component di update");
      dispatch(getListProduct());
      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setAdditionalDescription("");
      setProductPrice("");
      setSelectedFile(null);
    }
  }, [addProductResult, dispatch]);

  return (
    <>
      <h4>Add Contact</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            placeholder="Product Name"
            onChange={(event) => setProductName(event.target.value)}
            value={productName}
          />
        </Form.Group>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Product Category
          </label>
          <Form.Select
            id="productCategory"
            value={productCategory}
            onChange={(event) => setProductCategory(event.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Category1">Category 1</option>
            <option value="Category2">Category 2</option>
            {/* Add more options as needed */}
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="form-label">Product Freshness</label>
          <div>
            {["Brand New", "Second Hand", "Refurbished"].map((fresh, index) => (
              <Form.Check
                key={`freshness-${index}`}
                type="radio"
                id={`freshness-${index}`}
                label={fresh}
                value={fresh}
                checked={productFreshness === fresh}
                onChange={() => setProductFreshness(fresh)}
              />
            ))}
          </div>
        </div>

        {/* image */}
        {/* <div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(event) => {
                setSelectedFile(event.target.files[0]);
              }}
            />
          </Form.Group>
          {productImage && (
            <img
              src={URL.createObjectURL(productImage)}
              alt="Product Preview"
              style={{ maxWidth: "50%", marginTop: "10px" }}
            />
          )}
        </div> */}
        {/* description */}
        <div>
          <label htmlFor="">Additional Description</label>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              value={additionalDescription}
              onChange={(e) => setAdditionalDescription(e.target.value)}
              style={{
                height: "100px",
              }}
            />
          </FloatingLabel>
        </div>

        {/* product Price */}
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            className="form-control"
            placeholder="$ 1"
            onChange={(event) => setProductPrice(event.target.value)}
            value={productPrice}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProductComponent;
