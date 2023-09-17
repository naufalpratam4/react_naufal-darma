import React from "react";
const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};
class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = { language: "en", productName: "", errorMessage: "" };
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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    let errorMessage = "";

    if (name === "productName") {
      if (value.length > 10) {
        errorMessage = "Product Name tidak boleh lebih dari 10 karakter.";
      }
    }

    this.setState({
      [name]: value,
      errorMessage,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { productName } = this.state;

    if (productName.trim() === "") {
      this.setState({
        errorMessage: "Harap isi Product Name.",
      });
    } else {
      // Lakukan tindakan lainnya, seperti mengirimkan data
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
    const { productName, errorMessage } = this.state;
    const inputStyle = errorMessage ? { border: "1px solid red" } : {};
    const { language } = this.state;
    const title = article.title[language];
    const description =
      language === "en"
        ? "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        : "Berikut adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.";

    return (
      <>
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
                {/* button */}
                <button
                  type="submit"
                  //   id="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", marginBottom: "20px" }}
                  //   onClick={this.randomMath}
                  //   onMouseEnter={(e) => this.ubahNama(e)}
                  //   onMouseOut={(e) => this.ubahLagi(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateProduct;
