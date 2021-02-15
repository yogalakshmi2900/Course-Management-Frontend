const LIVEURL = "http://localhost:3002/";
const ROOTURL = LIVEURL+'api/v1/';
const API = {
  Login                   : ROOTURL+'authorization/login',
  Signup                  : ROOTURL+'authorization/signup',
  AddCourseList           : ROOTURL+'course/addCourseList',
  AddCourse               : ROOTURL+'course/addCourse',
  ViewCourse              : ROOTURL+'course/viewCourse',
  EditCourse              : ROOTURL+'course/editCourse',
  ViewProfile             : ROOTURL+'profile/viewProfile',
  ListCourse              : ROOTURL+'course/listCourse',
  DeleteCourse            : ROOTURL+'course/deleteCourse',
}
export default URL = {
  API     : API,
  LIVEURL : LIVEURL
}
