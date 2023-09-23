import React from "react";
import Tablesss from "../components/Tables";
import NavbarPage from "../components/NavbarPage";
const article = {
  title: {
    id: "Buat Product",
    en: "Create Product",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};
class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "en",
      productName: "",
      productCategory: "",
      productFreshness: "",
      productPrice: "",
      errorMessage: "",
      editIndex: -1, //index yang diedit
      editedProduct: {}, //data yg sedang diedit
      products: [], //menyimpan data product
    };
  }

  randomMath = () => {
    const angkaRandom = Math.floor(Math.random() * 100) + 1;
    this.setState({ angkaRandom });
    alert(`Angka random : ${angkaRandom}`);
  };

  ubahNama(e) {
    e.target.innerHTML = "Confirm";
  }
  ubahLagi(e) {
    e.target.innerHTML = "Submit";
  }

  pName(e) {
    this.setState({ productName: e.target.value });
  }

  handleDelete = (updatedProducts) => {
    this.setState({ products: updatedProducts });
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
    updatedProducts[editIndex] = editedProduct; // Simpan data produk yang diedit kembali ke array produk

    this.props.onEdit(updatedProducts); // Panggil fungsi callback untuk mengupdate state dengan produk yang diperbarui
    this.setState({ editIndex: -1, editedProduct: {} }); // Setel editIndex kembali ke -1 untuk menutup formulir pengeditan
  };
  handleCancelEdit = () => {
    this.setState({ editIndex: -1, editedProduct: {} }); // Batal pengeditan dan tutup formulir pengeditan
  };
  handleEdit = (updatedProducts) => {
    // Mengupdate state dengan produk yang diperbarui
    this.setState({ products: updatedProducts });
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    let errorMessage = "";

    if (name === "productName") {
      if (value.length > 25) {
        errorMessage = "Product Name tidak boleh lebih dari 10 karakter.";
      }
    } else if (name === "productPrice") {
      // Tambahkan kondisi untuk productPrice
      if (isNaN(value) || parseFloat(value) < 0) {
        // Pastikan nilai yang dimasukkan adalah angka positif
        errorMessage = "Product Price harus berupa angka positif.";
      }
    }

    this.setState({
      [name]: value,
      errorMessage,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { productName, productCategory, productFreshness, productPrice } =
      this.state;

    if (productName.trim() === "") {
      this.setState({
        errorMessage: "Harap isi Product Name.",
      });
    } else if (isNaN(productPrice) || parseFloat(productPrice) < 0) {
      // Periksa jika Product Price tidak valid (bukan angka positif)
      this.setState({
        errorMessage: "Product Price harus berupa angka positif.",
      });
    } else {
      // Menambahkan produk baru ke state 'products' dengan productCategory
      const newProduct = {
        productName: productName,
        productCategory: productCategory,
        productFreshness: productFreshness,
        productPrice: parseFloat(productPrice),
      };

      this.setState((prevState) => ({
        products: [...prevState.products, newProduct],
        productName: "", // Mengosongkan input
        productCategory: "", // Mengosongkan input productCategory,
        productFreshness: "",
        productPrice: "",
        errorMessage: "", // Menghapus pesan error
      }));

      alert("Product created successfully.");
    }
  };

  changeLanguage = () => {
    // Mengganti bahasa antara Inggris (en) dan Indonesia (id)
    this.setState((prevState) => ({
      language: prevState.language === "en" ? "id" : "en",
    }));
  };

  render() {
    const { productName, errorMessage, products, productFreshness } =
      this.state;

    const inputStyle = errorMessage ? { border: "1px solid red" } : {};
    const { language } = this.state;
    const title = article.title[language];
    const description =
      language === "en"
        ? "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        : "Berikut adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.";

    return (
      <>
        <NavbarPage name="Home" link="/" />

        <div className="container pt-5" style={{ width: "800px" }}>
          <div className="heroContent1">
            <div className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/id/4/47/Logo_Universitas_Negeri_Semarang.png"
                alt=""
                width={"80px"}
              />
            </div>

            <h2 className="pt-3 text-center fw-bold">{title}</h2>
            <p
              className="text-center"
              style={{ fontFamily: "Roboto", fontSize: 20 }}
            >
              {description}
            </p>
            <button className="btn btn-warning" onClick={this.changeLanguage}>
              Ganti bahasa
            </button>
          </div>
          <div className="heroContainer">
            <div className="heroContent2">
              {/* detail */}
              <h3>Detail Product</h3>
              {/* productName */}
              <form action="" id="form" onSubmit={this.handleSubmit}>
                <div className="productName">
                  <label htmlFor="productName">Product Name </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    className="form-control mb-3"
                    value={productName}
                    onChange={this.handleInputChange}
                    style={inputStyle}
                  />
                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                </div>

                {/* productCategory */}
                <div className="pt-3">
                  <label htmlFor="">Product Category</label>
                  <select
                    className="form-select"
                    id="productCategory"
                    name="productCategory"
                    onChange={this.handleInputChange} // Menggunakan handleInputChange yang telah ada
                    aria-label="Default select example"
                  >
                    <option selected="" value="" disabled="" />
                    <option defaultValue={"Baju"} value={"Baju"}>
                      Baju
                    </option>
                    <option defaultValue={"Kaos"} value={"Kaos"}>
                      Kaos
                    </option>
                    <option defaultValue={"Celana"} value={"Celana"}>
                      Celana
                    </option>
                  </select>
                  <p id="validationCategory" />
                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                </div>

                {/* Product Freshness */}
                <div>
                  <label htmlFor="">Product Freshness</label>
                  <div className="form-check">
                    <input
                      id="radioProduct1"
                      className="form-check-input"
                      type="radio"
                      name="productFreshness"
                      value="Fresh"
                      checked={productFreshness === "Fresh"} // Menandai radio jika productFreshness adalah "Fresh"
                      onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="radioProduct1">
                      Fresh
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="radioProduct2"
                      className="form-check-input"
                      type="radio"
                      name="productFreshness"
                      value="Moderate"
                      checked={productFreshness === "Moderate"} // Menandai radio jika productFreshness adalah "Moderate"
                      onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="radioProduct2">
                      Moderate
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="radioProduct3"
                      className="form-check-input"
                      type="radio"
                      name="productFreshness"
                      value="Stale"
                      checked={productFreshness === "Stale"} // Menandai radio jika productFreshness adalah "Stale"
                      onChange={this.handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="radioProduct3">
                      Stale
                    </label>
                  </div>
                  <p id="validationRadio" style={{ color: "red" }} />
                </div>

                {/* Product Pice */}
                <div className="pt-3">
                  <label htmlFor=""> Product Pice </label>
                  <div className="input-group mb-3" style={{ width: "100%" }}>
                    <input
                      id="productPrice"
                      name="productPrice"
                      type="number"
                      className="form-control"
                      value={this.state.productPrice}
                      onChange={this.handleInputChange}
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="$ 1"
                    />
                  </div>
                  <p id="validationPrice" />
                </div>

                {/* button */}
                <button
                  type="submit"
                  //   id="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginBottom: "20px" }}
                >
                  Submit
                </button>
              </form>
              <Tablesss
                products={products}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateProduct;
