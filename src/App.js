import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Layouts Components
import Header from './components/layouts/header';
import StudentSidebar from './components/layouts/studentsidebar';
import FacultySidebar from './components/layouts/facultysidebar';
import Footer from './components/layouts/footer';

// Dashboard Components

// ag grid
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


// Authorization
import Signup from './components/authorization/signup';
import Login from './components/authorization/login';
import Profile from './components/authorization/profile';

import AddCourse from './components/coursedetail/addcourse';
import ListCourse from './components/coursedetail/listcourse';
import ListUserCourse from './components/coursedetail/listusercourse';
import ViewCourse from './components/coursedetail/viewcourse';
import CourseList from './components/courselist/courselist';

let isAuth = localStorage.getItem("token");
let usertype = localStorage.getItem("usertype");

class Home extends React.Component{
  render() {
    if(!isAuth){
      return(
        <Router>
          <Route exact path='/' component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Router>
    )
    }
    if(usertype=='student'){
      return (
        <Router>
           <div className="wrapper">
            <Header/>
            <StudentSidebar/>
              <Switch>
                  <Route exact path='/' component={CourseList}/>
                  <Route exact path='/courseList' component={CourseList}/>
                  <Route exact path='/viewCourse/:id' component={ViewCourse}/>
                  <Route exact path='/listUserCourse' component={ListUserCourse}/>
                  <Route exact path='/profile' component={Profile}/>
              </Switch>
            <Footer/>
          </div>
        </Router>
      );
    }
    else{
      return (
        <Router>
           <div className="wrapper">
            <Header/>
            <FacultySidebar/>
              <Switch>
                <Route exact path='/' component={ListCourse}/>
                <Route exact path='/addCourse' component={AddCourse}/>
                <Route exact path='/listCourse' component={ListCourse}/>
                <Route exact path='/profile' component={Profile}/>
              </Switch>
            <Footer/>
          </div>
        </Router>
      );
    }
 }
}

export default Home;
