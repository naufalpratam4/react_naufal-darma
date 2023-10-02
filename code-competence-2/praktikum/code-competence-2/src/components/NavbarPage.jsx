import React from "react";

function NavbarPage() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="www.google.com" className="logoIs">
          <img src="public/img/LOGO.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "white" }}
                aria-current="page"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "white" }}
                href="course.html"
              >
                Course
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "white" }}
                href="mentoring.html"
              >
                Mentoring
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "white" }} href="#">
                Event
              </a>
            </li>
            <li className="nav-item" style={{ paddingRight: 20 }}>
              <a className="nav-link" style={{ color: "white" }} href="#">
                Corporate Service
              </a>
            </li>
            <li>
              <a href="login.html">
                <button
                  type="button"
                  className="btn btn-success"
                  style={{
                    borderRadius: 3,
                    background: "#2e9c44",
                    boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  Login
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarPage;
