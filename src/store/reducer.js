import * as actionType from "./actionTypes";

const intialState = {
  result: [],
  isLoading: false,
  error: null,
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.FETCH_DATA_INIT:
      return (state = {
        ...state,
        isLoading: true,
      });
    case actionType.FETCH_DATA_SUCCESS:
      return (state = {
        ...state,
        result: [...state.result, action.payload],
        isLoading: false,
      });
    case actionType.FETCH_DATA_FAILURE:
      return (state = {
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
