import React from "react";
import { useEffect } from "react";

const CreateAccount = () => {
  useEffect(() => {
    alert("Welcome");
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="heroContent1 pt-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt=""
              width={"100px"}
            />
            <h2 className="pt-3">Create Account</h2>
            <p style={{ fontFamily: "Roboto", fontSize: 20 }}>
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
          <div className="heroContainer">
            <div className="heroContent2">
              <h3>Detail Form</h3>
              {/* input */}
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <label htmlFor="">First Name</label>
                  <div className="input-group flex-nowrap">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <label htmlFor="">Last Name</label>
                  <div className="input-group flex-nowrap">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              {/* username */}
              <div className="pt-3">
                <label htmlFor="Username">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              {/* email */}
              <div className="pt-3">
                <label htmlFor="email">email</label>
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="you@example.com"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              {/* gender */}
              <div className="pt-3">
                <label htmlFor="gender">Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Male"
                    id="Male"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Female"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Others
                  </label>
                </div>
              </div>
              {/* address */}
              <div className="pt-3">
                <label htmlFor="">Address</label>
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234 Main St"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div className="pt-3">
                <label htmlFor="">
                  Address <span style={{ opacity: "0.5" }}>(Optional)</span>
                </label>
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234 Main St"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              {/* nationality */}
              <div className="pt-3">
                <label htmlFor="">nationality</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="">Choose</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <hr />
              {/* language */}
              <div className="pt-3">
                <label htmlFor="">Language Spoken :</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Bahasa
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    English
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Others
                  </label>
                </div>
                {/* button */}
                <div className="pt-3 pb-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateAccount;
