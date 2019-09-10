import {
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.logs.filter(tech => tech.id !== action.payload),
        loading: false
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
