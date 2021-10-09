import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../../shared/constants/ActionTypes';
import {
  ADD_BRIEF_REQUEST,
  ADD_BRIEF_SUCCESS,
  ADD_BRIEF_FAILURE,
} from "../../shared/constants/ActionTypes";

type InitialState = {
  loading: boolean;
  brief?: object;
  error?: any[];
  products?: object[]
};

type Action = {
  type: String;
  brief?: object;
  error?: any[];
  products?: object[]
};

const initialState: InitialState = {
  loading: false,
};

export const addBriefReducer = (
  state: object = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_BRIEF_REQUEST:
      return { ...state, loading: true };

    case ADD_BRIEF_SUCCESS:
      return { ...state, loading: false, brief: action.brief };

    case ADD_BRIEF_FAILURE:
      return { ...state, loading: false, error: action.error };
    
    case FETCH_PRODUCTS_REQUEST:
      return {...state, loading: true}
    
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, loading: false, products:action.products}

    case FETCH_PRODUCTS_FAILURE:
      return {...state, loading: false, products:action.error}
    
    default:
      return state;
  }
};

export const getProductsReducer = (
  state: object = initialState,
  action: Action
) => {
  switch (action.type) {

    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.products };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, products: action.error };

    default:
      return state;
  }
};