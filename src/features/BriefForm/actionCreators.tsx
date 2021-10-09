import { ADD_BRIEF_FAILURE, ADD_BRIEF_REQUEST, ADD_BRIEF_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from '../../shared/constants/ActionTypes';
import { Dispatch } from 'redux';

interface Ibrief {
  brief: object[]
}
interface Iproducts {
  products: object[]
}

export const addBriefRequest = () => {
  return (dispatch: any) => {
    dispatch({
      type:ADD_BRIEF_REQUEST
    })
  }
}

export const addBriefFailure = (error:any) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_BRIEF_FAILURE,
      error:error
    })
  }
}

export const addBriefSuccess = (brief:Ibrief) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_BRIEF_SUCCESS,
      brief:brief
    })
  }
}

export const fetchProductsRequest = () => {
  return (dispatch: any) => {
    dispatch({
      type: FETCH_PRODUCTS_REQUEST,
    })
  }
}

export const fetchProductFailure = (error: any) => {
  return (dispatch: any) => {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      error: error,
    });
  };
};

export const fetchProductSuccess = (products: Iproducts) => {
  return (dispatch: any) => {
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      products: products,
    });
  };
};