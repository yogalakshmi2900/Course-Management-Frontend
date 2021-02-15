import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import swal from 'sweetalert';
import URL from '../common/api';
import { Success,Error } from '../common/swal';

const ADD_COURSE            = 'ADD_COURSE';
const ADD_COURSELIST        = 'ADD_COURSELIST';
const LIST_COURSE           = 'LIST_COURSE';
const VIEW_COURSE           = 'VIEW_COURSE';
const VIEW_PROFILE          = 'VIEW_PROFILE';

const accessToken=localStorage.getItem("token");

const authAxios=axios.create({
  headers:{
    Authorization:'bearer '+accessToken
  }
})

export function AC_ADD_COURSE(formData) {
  return function(dispatch) {
    return authAxios.post(URL.API.AddCourse,formData)
      .then(({ data }) => {
        if(data.status===403){
          localStorage.removeItem("token");
          window.location='/';
          window.location.reload(false);
        }else{
        if(data.status){
          Success(data.message)
        } else {
          Error(data.message)
        }
         dispatch({type: ADD_COURSE, payload:data});
       }
       });
   }
}

export function AC_ADD_COURSELIST(formData) {
  return function(dispatch) {
    return authAxios.post(URL.API.AddCourseList,formData)
      .then(({ data }) => {
        if(data.status===403){
          localStorage.removeItem("token");
          window.location='/';
          window.location.reload(false);
        }else{
        if(data.status){
          Success(data.message)
        } else {
          Error(data.message)
        }
         dispatch({type: ADD_COURSELIST, payload:data});
       }
       });
   }
}


export function AC_LIST_COURSE() {
  return function(dispatch) {
    return authAxios.get(URL.API.ListCourse)
      .then(({ data }) => {
        if(data.status===403){
          localStorage.removeItem("token");
          window.location='/';
          window.location.reload(false);
        } else{
          if(data.status){
            Success(data.message)
          } else {
            Error(data.message)
          }
          dispatch({type: LIST_COURSE, payload:data});
       }
       });
   }
}

export function AC_VIEW_COURSE(formData) {
const id =  {id: formData};
  return function(dispatch) {
    return authAxios.post(URL.API.ViewCourse,id)
      .then(({ data }) => {
        console.log('===action',data);
        if(data.status===403){
          localStorage.removeItem("token");
          window.location='/';
          window.location.reload(false);
        } else{
          dispatch({type: VIEW_COURSE, payload:data});
        }
       });
   }
}

export function AC_VIEW_PROFILE(formData) {
const _id =  {_id: formData};
  return function(dispatch) {
    return authAxios.post(URL.API.ViewProfile,_id)
      .then(({ data }) => {
        if(data.status===403){
          localStorage.removeItem("token");
          window.location='/';
          window.location.reload(false);
        } else{
          dispatch({type: VIEW_PROFILE, payload:data});
        }
       });
   }
}
