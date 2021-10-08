import { ADD_BRIEF_FAILURE, ADD_BRIEF_REQUEST, ADD_BRIEF_SUCCESS } from '../../shared/constants/ActionTypes';
import { Dispatch } from 'redux';

export const addBriefRequest = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type:ADD_BRIEF_REQUEST
    })
  }
}

export const addBriefFailure = (error:any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_BRIEF_FAILURE,
      error:error
    })
  }
}

export const addBriefSuccess = (brief:Object) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_BRIEF_SUCCESS,
      brief:brief
    })
  }
}