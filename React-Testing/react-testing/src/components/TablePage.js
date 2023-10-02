import Table from "react-bootstrap/Table";

import React from "react";

function TablePage({ products }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Product Name</th>
          <th>Product Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.productName}</td>
            <td>{product.productCategory}</td>
            {/* Add more cells based on the data structure */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablePage;
