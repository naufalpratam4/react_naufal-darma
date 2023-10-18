import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function TablePage() {
  const [products, setProducts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState({
    id: "",
    ProductName: "",
    ProductCategory: "",
    ProductFreshness: "",
    ProductPrice: "",
  });

  useEffect(() => {
    fetchData();
  }, []); // empty dependency array untuk menjalankan useEffect hanya sekali

  const fetchData = () => {
    // Mengambil data dari API
    axios
      .get("https://65239ce1ea560a22a4e88ce2.mockapi.io/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleDelete = (id) => {
    // Menghapus data dari API berdasarkan ID
    axios
      .delete(`https://65239ce1ea560a22a4e88ce2.mockapi.io/product/${id}`)
      .then(() => {
        // Jika penghapusan berhasil, update komponen dengan data terbaru
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const handleEdit = (product) => {
    // Menampilkan modal edit dan mengatur data produk yang akan diubah
    setEditProduct(product);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    // Menyembunyikan modal edit
    setShowEditModal(false);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    // Mengirim permintaan PUT ke API untuk memperbarui data produk
    axios
      .put(
        `https://65239ce1ea560a22a4e88ce2.mockapi.io/product/${editProduct.id}`,
        editProduct
      )
      .then(() => {
        // Jika pembaruan berhasil, update komponen dengan data terbaru
        fetchData();
        // Menyembunyikan modal edit
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.ProductCategory}</td>
              <td>{product.ProductFreshness}</td>
              <td>${product.ProductPrice}</td>
              <td>
                <div>
                  <Button
                    className="btn btn-danger me-1"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn btn-warning"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* formulir edit */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group controlId="editProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={editProduct.ProductName}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    ProductName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="editProductCategory">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                type="text"
                value={editProduct.ProductCategory}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    ProductCategory: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="editProductFreshness">
              <Form.Label>Product Freshness</Form.Label>
              <Form.Control
                type="text"
                value={editProduct.ProductFreshness}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    ProductFreshness: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="editProductPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                value={editProduct.ProductPrice}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    ProductPrice: e.target.value,
                  })
                }
              />
            </Form.Group>
            <div className="mt-2">
              <Button variant="primary" type="submit">
                Save Changes
              </Button>{" "}
              <Button variant="secondary" onClick={handleCloseEditModal}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TablePage;
