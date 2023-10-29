/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as actionTypes from "./actionTypes";

const apiUrl =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3000/contacts";

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

export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch(fetchInit());
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      dispatch(fetchSucess(data));
    } catch (error) {
      dispatch(
        fetchFailure(
          error.message.slice(
            0,
            error.message.indexOf("o", error.message.indexOf("o") + 1)
          )
        )
      );
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
    type: actionTypes.POST_DATA_FAILURE,
    payload: error,
  };
};

export const postUserData = (contacts) => {
  return async (dispatch) => {
    dispatch(postInit());
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contacts),
      });
      const data = await response.json();
      console.log(data);
      dispatch(postSucess(data));
    } catch (error) {
      console.log(error.message);
      dispatch(
        postFailure(
          error.message
            .slice(
              0,
              error.message.indexOf("o", error.message.indexOf("o") + 1)
            )
            .replace("fetch", "post")
        )
      );
    }
  };
};

//delete action
export const deleteInit = () => {
  return {
    type: actionTypes.DELETE_DATA_INIT,
  };
};
export const deleteSucess = (data) => {
  return {
    type: actionTypes.DELETE_DATA_SUCCESS,
    payload: data,
  };
};

export const deleteFailure = (error) => {
  return {
    type: actionTypes.DELETE_DATA_FAILURE,
    payload: error,
  };
};

export const deleteUserData = (id) => {
  return async (dispatch) => {
    dispatch(deleteInit());
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to Delete contact");
      }
      dispatch(fetchUserData());
    } catch (error) {
      dispatch(
        deleteFailure(
          error.message
          // .slice(
          //   0,
          //   error.message.indexOf("o", error.message.indexOf("o") + 1)
          // )
          // .replace("fetch", "delete")
        )
      );
    }
  };
};

export const editeFailure = (data) => {
  return {
    type: actionTypes.EDITE_DATA_SEND,
    payload: data,
  };
};

export const putInit = () => {
  return {
    type: actionTypes.POST_DATA_INIT,
  };
};

export const putSuccess = () => {
  return {
    type: actionTypes.POST_DATA_SUCCESS,
  };
};

export const putFailure = (error) => {
  return {
    type: actionTypes.PUT_DATA_FAILURE,
    payload: error,
  };
};

export const putUserData = (contact) => {
  console.log(contact.id);
  console.log(contact);
  return async (dispatch) => {
    dispatch(putInit());
    try {
      const response = await fetch(`${apiUrl}/${contact.id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: contact.id,
          name: contact.name,
          number: contact.number,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // dispatch(putSuccess());
      // const data = await response.json();
      // console.log(response);
      // console.log(data);
      if (!response.ok) {
        throw new Error("Failed to update contact");
      }
      dispatch(fetchUserData());
    } catch (error) {
      dispatch(putFailure(error.message));
    }
  };
};
