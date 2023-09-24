import React, { useState, useEffect } from "react";
import NavbarPage from "../Components/NavbarPage";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Table from "react-bootstrap/Table";

const Create = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [freshness, setFreshness] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [language, setLanguage] = useState("en"); // Default language

  const [tableData, setTableData] = useState([]); // table

  // validasi

  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [freshnessError, setFreshnessError] = useState(false);
  const [deskripsiError, setDeskrpsiError] = useState(false);

  useEffect(() => {
    // Reset nilai input setelah data dikirimkan ke tabel
    setName("");
    setCategory("");
    setPrice("");
    setImage("");
    setFreshness("");
    setDeskripsi("");
  }, [tableData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset status kesalahan
    setNameError(false);
    setCategoryError(false);
    setPriceError(false);
    setImageError(false);
    setFreshnessError(false);

    // Validasi nama produk
    if (!name) {
      setNameError(true);
    }

    // Validasi kategori produk
    if (!category) {
      setCategoryError(true);
    }

    // Validasi harga produk
    if (!price) {
      setPriceError(true);
    }

    // Validasi gambar
    if (!image) {
      setImageError(true);
    }

    // Validasi kesegaran
    if (!freshness) {
      setFreshnessError(true);
    }

    // Validasi dan pembentukan objek produk
    if (name && category && price && image && freshness) {
      const product = {
        name,
        category,
        price,
        image: URL.createObjectURL(image),
        freshness: freshness,
        deskripsi,
      };
      // Menambahkan produk ke data tabel
      setTableData([...tableData, product]);
    } else {
      alert("Harap isi semua field sebelum mengirimkan data.");
    }
  };

  const changeLanguage = () => {
    // Mengganti bahasa antara Inggris (en) dan Indonesia (id)
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
  };

  const descriptions = {
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    id: "Berikut adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
  };

  const description = descriptions[language];

  return (
    <>
      <NavbarPage header="Create Product" />
      <div className="container pt-5 contact-form" style={{ width: "800px" }}>
        <div className="text-center">
          <h2 className="fw-bold">Hallo {props.nama}</h2>
          <h3 className="fw-bold">Create Product</h3>
          <p>{description}</p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={changeLanguage}
          >
            Ganti Bahasa
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className={nameError ? "error" : ""}>
            <label className="control-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                border: nameError ? "1px solid red" : "",
              }}
            />
          </div>

          {/* productCategory */}
          <div className={categoryError ? "error" : ""}>
            <label className="control-label">Product Category</label>
            <Form.Select
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                border: nameError ? "1px solid red" : "",
              }}
            >
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>

          {/* file choose */}
          <div className={imageError ? "error" : ""}>
            <Form.Group controlId="formFileMultiple" className="mb-2">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/*" // hanya menerima image
                onChange={(e) => setImage(e.target.files[0])}
                style={{
                  border: nameError ? "1px solid red" : "",
                }}
              />
            </Form.Group>
          </div>

          {/* Product Freshness */}
          <div className={freshnessError ? "error" : ""}>
            <label htmlFor="">Product Freshness</label>
            {["Brand New", "Second Hand", "Refurbished"].map((fresh, index) => (
              <div key={`freshness-${index}`} className={`mb-3 `}>
                <Form.Check
                  type="radio"
                  id={`freshness-${index}`}
                  label={fresh}
                  value={fresh}
                  checked={freshness === fresh}
                  onChange={() => setFreshness(fresh)}
                />
              </div>
            ))}
          </div>

          {/* Deskripsi */}
          <div className={deskripsiError ? "error" : "pt-2"}>
            <label htmlFor="">Additional Description</label>
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                style={{
                  height: "100px",
                  border: nameError ? "1px solid red" : "",
                }}
              />
            </FloatingLabel>
          </div>
          {/* Product Price */}
          <div className={priceError ? "error" : "pt-2"}>
            <label htmlFor="">Product Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="$ 1"
              style={{
                border: nameError ? "1px solid red" : "",
              }}
            />
          </div>

          {/* button */}
          <div className="btn-group pt-2" style={{ width: "100%" }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          {/* tabel */}
          <div className="mt-5">
            <h3 className="fw-bold">Product List</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Freshness</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxWidth: "100px" }}
                      />
                    </td>

                    <td>{product.freshness}</td>
                    <td>{product.deskripsi}</td>
                    <td>${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
