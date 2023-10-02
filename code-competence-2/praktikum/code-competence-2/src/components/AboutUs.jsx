import React from "react";

function AboutUs() {
  return (
    <>
      <section className="d-flex align-items-center py-lg-0 py-5 ">
        <div
          className="container text-center"
          style={{ width: "800px", fontFamily: " Poppins" }}
        >
          <h2 className="fw-bold">About Us</h2>
          <img src="img/home.png" alt="" width={"30%"} />
          <p>
            IslamicXplore adalah suatu platform online yeng menyediakan
            pembelajaran dan pelatihan agama. Melalui website ini, pengguna
            dapat mengakses berbagai kursus dan modul pembelajaran terkait agama
            islam. Selain itu, platform ini menawarkan layanan guru private
            untuk pembelajaran yang lebih personal.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
