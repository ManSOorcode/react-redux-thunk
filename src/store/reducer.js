import * as actionType from "./actionTypes";

const intialState = {
  result: [],
  isLoading: false,
  error: null,
  isEditForm: false,
  editValue: [],
};

export const userReducer = (state = intialState, action) => {
  console.log(action, state);
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
      console.log(action.payload);
      return (state = {
        ...state,
        isLoading: false,
        error: action.payload,
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
      console.log(action.payload);
      return (state = {
        ...state,
        isLoading: false,
        error: action.payload,
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
        error: action.payload,
      });

    case actionType.EDITE_DATA_SEND:
      return (state = {
        ...state,
        editValue: action.payload,
        isEditForm: true,
      });

    case actionType.PUT_DATA_INIT:
      return (state = {
        ...state,
        isLoading: true,
      });
    case actionType.PUT_DATA_SUCCESS:
      return (state = {
        ...state,
        isLoading: false,
        isEditForm: false,
      });
    case actionType.PUT_DATA_FAILURE:
      return (state = {
        ...state,
        isLoading: false,
        error: action.payload,
      });

    default:
      return state;
  }
};
