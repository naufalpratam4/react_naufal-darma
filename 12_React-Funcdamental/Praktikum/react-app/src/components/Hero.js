export default function Hero() {
  return (
    <>
      <section>
        <div className="container pt-5">
          <div className="heroContent1">
            <img src="img/bootstrap-logo.svg.png" alt="" />
            <h2 className="pt-3">Create Product</h2>
            <p style={{ fontFamily: "Roboto", fontSize: 20 }}>
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="heroContainer">
            <div className="heroContent2">
              {/* detail */}
              <h3>Detail Product</h3>
              {/* productName */}
              <form action="" id="form">
                <div className="productName">
                  <label htmlFor="name">Product Name : </label>
                  <input
                    id="productInput"
                    type="text"
                    className="form-control"
                  />
                  <p id="validationProduct" />
                </div>
                {/* productCategory */}
                <div className="pt-3">
                  <label htmlFor="">Product Category</label>
                  <select
                    className="form-select"
                    id="productCategory"
                    aria-label="Default select example"
                  >
                    <option selected="" value="" disabled="" />
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <p id="validationCategory" />
                </div>
                {/* imageOfProduct */}
                <div className="mb-3 pt-3">
                  <label htmlFor="formFile" className="form-label">
                    Default file input example
                  </label>
                  <input
                    type="file"
                    id="productImage"
                    name="product-image"
                    className="border border-2 border-primary rounded-3 text-primary form-control"
                    style={{ height: 40, width: 250 }}
                  />
                  <p id="validationImage" />
                </div>
                {/* Product Freshness */}
                <div>
                  <label htmlFor="">Product Freshness</label>
                  <div className="form-check">
                    <input
                      id="radioProduct1"
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      defaultValue="Fresh"
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
                      name="flexRadioDefault"
                      defaultValue="Moderate"
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
                      name="flexRadioDefault"
                      defaultValue="Stale"
                    />
                    <label className="form-check-label" htmlFor="radioProduct3">
                      Stale
                    </label>
                  </div>
                  <p id="validationRadio" style={{ color: "red" }} />
                </div>
                {/* Additional Description */}
                <div className="pt-3">
                  <label htmlFor="">Additional Description</label>
                  <div className="form-floating aDescription">
                    <textarea
                      id="productDescription"
                      style={{ height: 100, width: "100%" }}
                      defaultValue={""}
                    />
                    <p id="validationDescription" />
                  </div>
                </div>
                {/* Product Pice */}
                <div className="pt-3">
                  <label htmlFor=""> Product Pice </label>
                  <div className="input-group mb-3" style={{ width: "100%" }}>
                    <input
                      id="productPrice"
                      type="number"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="$ 1"
                    />
                  </div>
                  <p id="validationPrice" />
                </div>
                {/* button */}
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
