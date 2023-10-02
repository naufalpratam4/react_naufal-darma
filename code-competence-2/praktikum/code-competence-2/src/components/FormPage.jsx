import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("try");
    }

    setValidated(true);
  };

  return (
    <>
      <section className="d-flex align-items-center py-lg-0 py-5">
        <div className="container" style={{ width: "800px" }}>
          <h2 className="text-center fw-bold mt-4 mb-4">Contact Us</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="First Name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid FirstName.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Last Name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Last Name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* email */}
            <Form.Group controlId="validationCustom03" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Tulis Pesan */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tulis Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} required />
              <Form.Control.Feedback type="invalid">
                Please input your message
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            <Button className="btn btn-success mb-3" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
}

export default FormPage;
