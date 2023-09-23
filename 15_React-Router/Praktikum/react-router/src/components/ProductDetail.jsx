import React from "react";

class ProductDetail extends React.Component {
  render() {
    const { match } = this.props;
    const productId = match.params.id;

    const { products } = this.props;
    const product = products.find((product) => product.id === productId);

    return (
      <>
        <h2>Product Detail</h2>
        <p>Product ID: {productId}</p>
        <p>Name: {product.productName}</p>
        <p>Category: {product.productCategory}</p>
        <p>Freshness: {product.productFreshness}</p>
        <p>Price: ${product.productPrice.toFixed(2)}</p>
      </>
    );
  }
}

export default ProductDetail;
