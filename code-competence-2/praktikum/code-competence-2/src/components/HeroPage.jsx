import React from "react";

function HeroPage() {
  return (
    <>
      {/* main */}
      <div className="main">
        <section className="d-flex align-items-center py-lg-0 py-5" id="home">
          <div className="container">
            <div className="row align-items-center g-5 g-lg-0">
              {/* Text */}
              <div
                className="col-lg-7 order-lg-1 order-2 wlcm ps-4"
                style={{ marginTop: "-120px" }}
              >
                <p className="judulKiri">IslamicXplore</p>
                <p className="deskripsi">
                  Selamat datang di IslamicXplore, sebuah persembahan ilmu agama
                  Islam secara revolusioner di era digital. Kami dengan bangga
                  mempersembahkan platform online kami yang memungkinkan para
                  pencari ilmu Islam mengeksplorasi dan mendalami ajaran-ajaran
                  agama dengan mudah dan fleksibel.
                </p>
                <div className="row">
                  <div className="col-sm-4 col-lg-3">
                    <button
                      type="button"
                      style={{
                        borderRadius: 3,
                        background: "#0e9048",
                        boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
                        display: "flex",
                        width: 147,
                        height: 45,
                        padding: "12px 46px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                      className="btn btn-success"
                    >
                      Daftar
                    </button>
                  </div>
                  <div className="col-sm-6 col-lg-2">
                    <button
                      style={{
                        borderRadius: 3,
                        background: "var(--primary, #fff)",
                        boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.15)",
                        display: "flex",
                        width: 147,
                        height: 45,
                        padding: "12px 0px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                      type="button"
                      className="btn btn-light"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              {/* foto Profil */}
              <div
                className="col-lg-5 order-lg-2 order-1 text-center"
                style={{ marginBottom: 50 }}
              >
                <div className="gambarOrang">
                  <img
                    src="public/img/orang.png"
                    alt=""
                    style={{ width: "100%", height: "auto", flexShrink: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroPage;
