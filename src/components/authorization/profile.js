import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_VIEW_PROFILE } from '../../actions/courseaction';
import swal from 'sweetalert';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.validateform=this.validateform.bind(this);
  }
  validateform(){
    var person = window.confirm("Are you sure want to logout?");
    if (person != null) {
      localStorage.setItem("isAuth","");
      localStorage.setItem("token","");
      this.props.history.push("/");
      window.location.reload();
    }
  }
  componentDidMount() {
    const id = localStorage.getItem("id");
    this.props.ViewProfile(id);
  }
  render() {
    const courseInfo  = this.props.CourseReducer.courseList;
    console.log('==courseInfo',courseInfo);
      return(
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">View Profile</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Profile</li>
                  <li className="breadcrumb-item active" aria-current="page">View Profile</li>
                </ol>
              </nav>
            </div>
            <div className="card" style={{width:600}}>
              <div className="card-body">
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" name="name"  value={courseInfo.name} disabled/>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email" value={courseInfo.email} disabled/>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.validateform}>want to Logout?</button>
              </div>
            </div>
          </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    CourseReducer : state.CourseReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ViewProfile: AC_VIEW_PROFILE},dispatch)
}
const ProfileComponent = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileComponent;
