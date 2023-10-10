import * as actionType from "./actionTypes";

const intialState = {
  result: [],
  isLoading: false,
  error: null,
};

export const userReducer = (state = intialState, action) => {
  // console.log(action.payloade, state);
  switch (action.type) {
    case actionType.FETCH_DATA_INIT:
      return (state = {
        ...state,
        isLoading: true,
      });
    case actionType.FETCH_DATA_SUCCESS:
      return (state = {
        ...state,
        result: action.payload,
        isLoading: false,
      });
    case actionType.FETCH_DATA_FAILURE:
      return (state = {
        ...state,
        isLoading: false,
        error: action.error,
      });

    case actionType.POST_DATA_INIT:
      return (state = {
        ...state,
        isLoading: true,
      });
    case actionType.POST_DATA_SUCCESS:
      return (state = {
        ...state,
        result: [...state.result, action.payload],
        isLoading: false,
      });
    case actionType.POST_DATA_FAILURE:
      return (state = {
        ...state,
        isLoading: false,
        error: action.error,
      });

    case actionType.DELETE_DATA_INIT:
      return (state = {
        ...state,
        isLoading: true,
      });
    case actionType.DELETE_DATA_SUCCESS:
      return (state = {
        ...state,
        isLoading: false,
      });
    case actionType.DELETE_DATA_FAILURE:
      return (state = {
        ...state,
        isLoading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
