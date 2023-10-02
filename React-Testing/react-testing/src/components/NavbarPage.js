import React from "react";

function NavbarPage() {
  return (
    <>
      {/* Navbar */}
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="landingPage.html"
              style={{ fontFamily: "Roboto", fontSize: 24 }}
            >
              Simple Header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button className="btn btn-primary me-2" type="button">
                    <a
                      href="landingPage.html"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Home
                    </a>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-light me-2"
                    style={{ color: "blue" }}
                    type="button"
                  >
                    Features
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-light me-2"
                    style={{ color: "blue" }}
                    type="button"
                  >
                    Pricing
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-light me-2"
                    style={{ color: "blue" }}
                    type="button"
                  >
                    FAQs
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-light me-2"
                    style={{ color: "blue" }}
                    type="button"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NavbarPage;
