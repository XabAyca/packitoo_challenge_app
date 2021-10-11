import { Dispatch } from 'redux';
import { FETCH_BRIEF_FAILURE, FETCH_BRIEF_SUCCESS, FETCH_BRIEF_REQUEST, FILTER_PRODUCT } from '../../shared/constants/ActionTypes';

export const fetchBriefsRequest = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type:FETCH_BRIEF_REQUEST
    })
  }
}

export const fetchBriefsFailure = (error:any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_BRIEF_FAILURE,
      error:error
    })
  }
}

export const fetchBriefsSuccess = (briefs:any[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_BRIEF_SUCCESS,
      briefs:briefs
    })
  }
}

export const saveFilterKey = (filterKey: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: FILTER_PRODUCT,
      filterKey:filterKey
    })
  }
}