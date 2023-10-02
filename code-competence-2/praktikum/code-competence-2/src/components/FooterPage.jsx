import React from "react";
import Footer from "../../public/style/footer.css";
function FooterPage() {
  return (
    <>
      <div className="">
        <footer>
          {/* footerContent */}
          <div className="row pb-4">
            <div className="col-lg-3 offset-lg-1">
              <h2>My Sosial Media</h2>
              <div className="logo mb-3">
                <i
                  className="fa-brands fa-twitter fa-2xl"
                  style={{ color: "#68d37e" }}
                />
                <i
                  className="fa-brands fa-instagram fa-2xl ps-3"
                  style={{ color: "#68d37e" }}
                />
                <i
                  className="fa-brands fa-linkedin fa-2xl ps-3"
                  style={{ color: "#68d37e" }}
                />
                <i
                  className="fa-brands fa-facebook fa-2xl ps-3"
                  style={{ color: "#68d37e" }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className={Footer.logoImg}>
                <img src="public/img/LOGO.png" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                fugit rerum vitae et, laudantium dicta quaerat quod excepturi
                architecto maiores? Minima voluptas beatae ullam! Illum unde
                voluptates iste illo. Soluta!
              </p>
            </div>
            <div className="col-lg-3">
              <h4>Came Say Hello</h4>
              <p style={{ marginBottom: "-5px" }}>
                Jl Bukit Bringin Timur E/1000
              </p>
              <p>Semarang, Jawa Tengah</p>
              <button className="btn btn-success">
                Contact
                <i
                  className="fa-solid fa-paper-plane ps-2"
                  style={{ color: "#68d37e" }}
                />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FooterPage;
