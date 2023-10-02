// CreateProduct.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";

describe("CreateProduct component", () => {
  test("renders CreateProduct component", () => {
    render(<CreateProduct />);
    expect(screen.getByLabelText(/Product Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Category/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Agree to terms and conditions/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test("submits the form with valid data", () => {
    render(<CreateProduct />);
    const productNameInput = screen.getByLabelText(/Product Name/i);
    const productCategorySelect = screen.getByLabelText(/Product Category/i);
    const agreeCheckbox = screen.getByLabelText(
      /Agree to terms and conditions/i
    );
    const submitButton = screen.getByText(/Submit/i);

    fireEvent.change(productNameInput, { target: { value: "Valid Product" } });
    fireEvent.change(productCategorySelect, {
      target: { value: "Perlengkapan Rumah" },
    });
    fireEvent.click(agreeCheckbox);
    fireEvent.click(submitButton);

    // Add assertions based on the expected behavior
    // For example, check if the success alert is displayed or if the product is added to the table
  });

  // Add more tests for different scenarios and edge cases
});
