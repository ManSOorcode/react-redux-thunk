import * as actionTypes from "./actionTypes";

//fetch action
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
    dispatch(fetchInit());
    try {
      const response = await fetch("http://localhost:3000/contacts");
      const data = await response.json();
      // console.log(data);
      dispatch(fetchSucess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};

//post Action

export const postInit = () => {
  return {
    type: actionTypes.POST_DATA_INIT,
  };
};
export const postSucess = (data) => {
  return {
    type: actionTypes.POST_DATA_SUCCESS,
    payload: data,
  };
};

export const postFailure = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const postUserData = (contacts) => {
  return async (dispatch) => {
    dispatch(postInit());
    try {
      // const response = await fetch("https://dummyjson.com/products");
      const response = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contacts),
      });
      const data = await response.json();

      // console.log(data.response.json());
      // console.log(data);
      dispatch(postSucess(data));
    } catch (error) {
      dispatch(postFailure(error));
    }
  };
};

export const formUserContacts = (data) => {
  return {
    type: actionTypes.FORM_USER_CONTACTS,
    payload: data,
  };
};
