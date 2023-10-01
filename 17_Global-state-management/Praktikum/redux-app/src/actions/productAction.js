import axios from "axios";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const getListProduct = () => {
  return (dispatch) => {
    console.log("2. Masuk action");
    dispatch({
      type: GET_LIST_PRODUCT,
      payload: { loading: true, data: false, errorMessage: false },
    });

    // getAPI
    axios({
      method: "GET",
      url: " http://localhost:3000/Products",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil get API : ", response.data);
        // berhasil get API
        dispatch({
          type: GET_LIST_PRODUCT,
          payload: { loading: false, data: response.data, errorMessage: false },
        });
      })
      .catch((error) => {
        console.log("3. Gagal Get API : ", error.message);
        // gagal get API
        dispatch({
          type: GET_LIST_PRODUCT,
          payload: { loading: false, data: false, errorMessage: error.message },
        });
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    console.log("2. Masuk action");
    dispatch({
      type: ADD_PRODUCT,
      payload: { loading: true, data: false, errorMessage: false },
    });

    // getAPI
    axios({
      method: "POST",
      url: " http://localhost:3000/Products",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("3. Berhasil get API : ", response.data);
        // berhasil get API
        dispatch({
          type: ADD_PRODUCT,
          payload: { loading: false, data: response.data, errorMessage: false },
        });
      })
      .catch((error) => {
        console.log("3. Gagal Get API : ", error.message);
        // gagal get API
        dispatch({
          type: ADD_PRODUCT,
          payload: { loading: false, data: false, errorMessage: error.message },
        });
      });
  };
};
