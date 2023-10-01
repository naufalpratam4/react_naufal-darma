import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CreateProduct from "./CreateProduct";

describe("CreateProduct Component", () => {
  test("renders component properly", () => {
    render(<CreateProduct />);

    expect(screen.getByText("Create Product")).toBeInTheDocument();
    expect(screen.getByLabelText("Product Name")).toBeInTheDocument();
    // Add more assertions as needed based on your UI structure
  });

  test("handles form submission", () => {
    render(<CreateProduct />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText("Product Name"), {
      target: { value: "Test Product" },
    });
    fireEvent.change(screen.getByLabelText("Product Category"), {
      target: { value: "Test Category" },
    });
    // Add more simulated user input as needed

    // Trigger form submission
    fireEvent.submit(screen.getByTestId("form"));

    // Add your assertions based on the expected behavior after form submission
    // For example, you can check if the state is updated or if an API request is made
  });
});
