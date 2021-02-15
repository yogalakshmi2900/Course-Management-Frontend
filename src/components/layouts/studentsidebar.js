import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SIDEBAR } from '../../common/studentsidebar';
import URL from '../../common/api';

class StudentSidebar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  menuSelection(event) {
    event.preventDefault();
    if (document.querySelector('#navList li.nav-link') !== null) {
        document.querySelector('#navList li.nav-link').classList.remove('active');
    }
    event.target.className = "active";
 }
  render() {

      var sitename      = "Course Management";
      var name          = "Student";
      var favicon       = "dist/img/Admin.jpg";
      var logo          = "dist/img/Admin.jpg";

      const sideBarArray = SIDEBAR;
      const sideBar      = [];
      for (var i = 0; i < sideBarArray.length; i++) {
        if(sideBarArray[i].Active) {
          let isActive = false;
          if(i === 0) {
            isActive = true;
          }
          sideBar.push(
              <li className={"nav-item has-treeview"} key={i} >
                <Link to={sideBarArray[i].Url} className={isActive?"nav-link active":"nav-link"} >
                  <i className={sideBarArray[i].Icon}></i>
                  <p id={sideBarArray[i].Module_Name}>
                    {sideBarArray[i].Module_Name}
                    { sideBarArray[i].Sub_Module ? <i className="right fas fa-angle-left"></i>: "" }
                  </p>
                </Link>
                { sideBarArray[i].Sub_Module ?
                  <ul className="nav nav-treeview">
                  { sideBarArray[i].Sub_Module.map((Submodule,j)=> {
                      return (
                               <li className="nav-item" key={j}>
                                  <Link to={Submodule.Url} className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>{Submodule.Module_Name}</p>
                                  </Link>
                                </li>
                             )
                     })
                  }
                  </ul> : ""
                }
              </li>
          )
        }
      }
    return(
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="brand-link">
          {logo?<img src={logo} alt="AdminLTE" className="brand-image img-circle elevation-3"
               style={{opacity: ".8"}}/>:<img src="dist/img/Admin.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style={{opacity: ".8"}}/>}
          <span className="brand-text font-weight-light">{sitename}</span>
        </div>
        <div className="sidebar ">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {favicon?<img src={favicon} className="img-circle elevation-2" alt=""/>:<img src="dist/img/Admin.jpg" className="img-circle elevation-2" alt=""/>}
            </div>
            <div className="info">
              <a className="d-block">{name} </a>
            </div>
          </div>
          <nav className="mt-2">
            <ul  id='navList' className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {sideBar}
            </ul>
          </nav>
        </div>
      </aside>
    )
  }
}
function mapStateToProps(state) {
  return {
    SettingsReducer : state.SettingsReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({},dispatch)
}
const StudentSidebarComponent = connect(mapStateToProps,mapDispatchToProps)(StudentSidebar);

export default StudentSidebarComponent;
