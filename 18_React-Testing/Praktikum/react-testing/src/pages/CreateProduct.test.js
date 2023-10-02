// CreateProduct.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";

test("memastikan bahwa form input Product Name dapat menerima input teks dan menampilkannya di halaman", () => {
  // Render CreateProduct component
  render(<CreateProduct />);

  // Temukan input Product Name berdasarkan label atau atribut lain yang sesuai
  const productNameInput = screen.getByLabelText("Product Name");

  // Masukkan teks ke dalam input Product Name
  fireEvent.change(productNameInput, { target: { value: "Nama Produk" } });

  // Pastikan bahwa nilai input telah diperbarui sesuai dengan yang dimasukkan
  expect(productNameInput.value).toBe("Nama Produk");

  // Atau Anda juga dapat memastikan bahwa nilai telah muncul di halaman
  const displayedProductName = screen.getByText("Nama Produk");
  expect(displayedProductName).toBeInTheDocument();
});
