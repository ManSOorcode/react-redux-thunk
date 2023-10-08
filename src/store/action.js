import * as actionTypes from "./actionTypes";

export const fetchInit = () => {
  return {
    type: actionTypes.FETCH_DATA_INIT,
  };
};
export const fetchSucess = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchFailure = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error,
  };
};

//https://mansoor-contact-app-default-rtdb.firebaseio.com/name.json
export const fetchUserData = () => {
  return async (dispatch) => {
    fetchInit();
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      dispatch(fetchSucess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};
