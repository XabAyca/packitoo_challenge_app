
import { addBriefFailure, addBriefRequest, addBriefSuccess } from '../../features/BriefForm/actionCreators';
import { fetchBriefsRequest, fetchBriefsFailure, fetchBriefsSuccess } from '../../features/BriefList/actionCreators';

const baseUrl:string = "http://localhost3000/"

export const addBrief = (data:JSON) => {
  return (dispatch: any)=> {
    dispatch(addBriefRequest())
    fetch(baseUrl+"/briefs", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json)
      .then((response:any) => {
        if (response.error || response.errors) {
         dispatch(addBriefFailure(response.error))
        } else {
          dispatch(addBriefSuccess(response))
       }
    })
  }
}

export const getBriefs = () => {
  return (dispatch: any)=> {
    dispatch(fetchBriefsRequest())
    fetch(baseUrl+"/briefs", {
      method: "get",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((response) => response.json)
      .then((response:any) => {
        if (response.error || response.errors) {
         dispatch(fetchBriefsFailure(response.error))
        } else {
          dispatch(fetchBriefsSuccess(response))
       }
    })
  }
}