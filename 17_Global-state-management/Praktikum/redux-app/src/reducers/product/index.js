import { ADD_PRODUCT, GET_LIST_PRODUCT } from "../../actions/productAction";

const initalState = {
  getListProductResult: false,
  getListProductLoading: false,
  getListProductError: false,

  addProductResult: false,
  addProductLoading: false,
  addProductError: false,
};

const product = (state = initalState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        getListProductResult: action.payload.data,
        getListProductLoading: action.payload.loading,
        getListProductError: action.payload.errorMessage,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
export default product;
