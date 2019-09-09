import {
  SET_LOADING,
  LOGS_ERROR,
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SET_CURRENT,
  SEARCH_LOGS
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
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
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          //update log with updated id with new payload
          log.id === action.payload.id ? action.payload : log
        )
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
