import React from "react";

function Hero() {
  return (
    <div className="heroContent1">
      <img src="img/bootstrap-logo.svg.png" alt="" />
      <h2 className="pt-3">Create Product</h2>
      <p style={{ fontFamily: "Roboto", fontSize: 20 }}>
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
    </div>
  );
}

export default Hero;
