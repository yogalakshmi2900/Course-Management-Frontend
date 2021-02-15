import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import swal from 'sweetalert';
import URL from '../common/api';
import { Success,Error } from '../common/swal';

// Action types for admin settings management
const LOGIN             = "LOGIN";
const SIGNUP            = "SIGNUP";

export function AC_LOGIN(formData) {
  return function(dispatch) {
    return axios.post(
      URL.API.Login,
      formData,
      )
      .then(({ data }) => {
        if(!data.status){
          Error(data.message);
        }
        else{
          localStorage.setItem("token",data.token);
          dispatch({type: LOGIN, payload:data});
        }
    });
  };
}

export function AC_SIGNUP(formData) {
  return function(dispatch) {
    return axios.post(
      URL.API.Signup,
      formData,
      )
      .then(({ data }) => {
        console.log('====',data);
        if(!data.status){
          Error(data.message);
        }
        else{
          dispatch({type: LOGIN, payload:data});
        }
    });
  };
}
