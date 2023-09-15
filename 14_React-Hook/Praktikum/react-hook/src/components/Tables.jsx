import React from "react";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editIndex: -1, // Indeks item yang sedang diedit, -1 jika tidak ada yang diedit
      editedProduct: {},
    };
  }

  handleDelete = (index) => {
    const { products } = this.props;
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1); // Hapus item dengan indeks tertentu dari array

    this.props.onDelete(updatedProducts);
  };

  handleEdit = (index) => {
    const { products } = this.props;
    const editedProduct = { ...products[index] };
    this.setState({ editIndex: index, editedProduct });
  };

  handleSaveEdit = () => {
    const { editIndex, editedProduct } = this.state;
    const { products } = this.props;

    const updatedProducts = [...products];
    updatedProducts[editIndex] = editedProduct; // Simpan data produk

    this.props.onEdit(updatedProducts); // Panggil fungsi callback untuk mengupdate state
    this.setState({ editIndex: -1, editedProduct: {} });
  };

  // Batal pengeditan dan tutup formulir pengeditan
  handleCancelEdit = () => {
    this.setState({ editIndex: -1, editedProduct: {} });
  };

  render() {
    const { products } = this.props;
    const { editIndex, editedProduct } = this.state;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editIndex === index ? (
                  // Jika sedang diedit, tampilkan input untuk pengeditan
                  <input
                    type="text"
                    value={editedProduct.productName}
                    onChange={(e) =>
                      this.setState({
                        editedProduct: {
                          ...editedProduct,
                          productName: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  // Jika tidak sedang diedit, tampilkan teks biasa
                  product.productName
                )}
              </td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>${product.productPrice.toFixed(2)}</td>
              <td>
                {editIndex === index ? (
                  // Jika sedang diedit, tampilkan tombol Save dan Cancel
                  <>
                    <button
                      className="btn btn-success"
                      onClick={this.handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={this.handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  // Jika tidak sedang diedit, tampilkan tombol Edit dan Delete
                  <>
                    <button
                      className="btn btn-warning me-1"
                      onClick={() => this.handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Tables;
