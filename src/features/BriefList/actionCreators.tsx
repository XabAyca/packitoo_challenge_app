import { Dispatch } from 'redux';
import { FECTH_BRIEF_REQUEST, FECTH_BRIEF_FAILURE, FECTH_BRIEF_SUCCESS } from '../../shared/constants/ActionTypes';

export const fetchBriefsRequest = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type:FECTH_BRIEF_REQUEST
    })
  }
}

export const fetchBriefsFailure = (error:any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: FECTH_BRIEF_FAILURE,
      error:error
    })
  }
}

export const fetchBriefsSuccess = (briefs:any[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: FECTH_BRIEF_SUCCESS,
      briefs:briefs
    })
  }
}