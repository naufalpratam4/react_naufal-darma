import React from "react";

const Tablesss = ({ product }) => {
  return (
    <div>
      <h3>Product List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Freshness</th>
            <th>Additional Description</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.freshness}</td>
              <td>{product.deskripsi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablesss;
