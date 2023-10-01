import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import "bootstrap/dist/css/bootstrap.min.css";

function ListProduct() {
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // get list product

    console.log("1. Use effect component di mount");
    dispatch(getListProduct());
  }, [dispatch]);

  return (
    <>
      <div>
        <h3>List Produk</h3>

        {getListProductResult ? (
          getListProductResult.map((product) => {
            return (
              <div key={product.id}>
                <ul>
                  <li>{`Product Name :  ` + product.productName}</li>
                  <li>{`Product Category :  ` + product.productCategory}</li>
                  <li>{`ProductFreshness :  ` + product.productFreshness}</li>
                  <li>{`Product Price :  ` + product.productPrice}</li>
                  <li>{`Image :  ` + product.image}</li>
                  <li>{`Description :  ` + product.additionalDescription}</li>
                </ul>
              </div>
            );
          })
        ) : getListProductLoading ? (
          <p>Loading . . .</p>
        ) : (
          <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
        )}
      </div>
    </>
  );
}

export default ListProduct;
