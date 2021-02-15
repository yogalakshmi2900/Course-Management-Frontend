import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from "react-router-dom";

class Header extends React.Component {
  render() {

    return(
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" data-widget="pushmenu" ><i className="fas fa-bars"></i></div>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to='/'><div className="nav-link">Home</div></Link>
        </li>
      </ul>

    </nav>
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
const HeaderComponent = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderComponent;
