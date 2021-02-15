import { combineReducers } from 'redux';

import AuthorizationReducer from './reducers/authorizationreducer';
import CourseReducer from './reducers/coursereducer';

export default combineReducers({
  AuthorizationReducer,
  CourseReducer
})
