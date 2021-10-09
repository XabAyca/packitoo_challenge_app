
import { addBriefFailure, addBriefRequest, addBriefSuccess, fetchProductFailure, fetchProductsRequest } from '../../features/BriefForm/actionCreators';
import { fetchBriefsRequest, fetchBriefsFailure, fetchBriefsSuccess } from '../../features/BriefList/actionCreators';
import dispatch, { Dispatch } from 'react'

const baseUrl:string = "http://localhost:3000/"

export const addBrief = (data:JSON) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(addBriefRequest());
    fetch(baseUrl + "briefs", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response: any) => {       
        if (response.error || response.errors) {
          dispatch(addBriefFailure(response.error));
        } else {
          dispatch(addBriefSuccess(response));
        }
      });
  };
}

export const getBriefs = () => {
  return (dispatch: Dispatch<any>)=> {
    dispatch(fetchBriefsRequest())
    fetch(baseUrl+"briefs", {
      method: "get",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((response: any) => {
        if (response.error || response.errors) {
          dispatch(fetchBriefsFailure(response.error))
        } else {
          dispatch(fetchBriefsSuccess(response))
       }
    })
  }
}

export const getProducts = () => {
  return (dispatch: Dispatch<any>)=> {
    dispatch(fetchProductsRequest())
    fetch(baseUrl+"products", {
      method: "get",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((response: any) => {
        if (response.error || response.errors) {
         dispatch(fetchProductFailure(response.error))
        } else {
          dispatch(fetchProductFailure(response))
       }
    })
  }
}