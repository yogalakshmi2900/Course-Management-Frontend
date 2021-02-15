import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_VIEW_COURSE,AC_ADD_COURSELIST } from '../../actions/courseaction';

class ViewCourse extends React.Component {
  constructor(props){
    super(props);
    this.validateform=this.validateform.bind(this);
  }
  validateform(){
    const courseInfo  = this.props.CourseReducer.courseList;
    const iD = localStorage.getItem("id");
    const formData ={
      _id : iD,
      id  : courseInfo.id,
      name : courseInfo.name
    }
    this.props.AddCourseList(formData);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.ViewCourse(id);
  }
  render() {
    const courseInfo  = this.props.CourseReducer.courseList;
    console.log('==courseInfo',courseInfo);
      return(
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">View Course</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Course</li>
                  <li className="breadcrumb-item active" aria-current="page">View Course</li>
                </ol>
              </nav>
            </div>
            <div className="card" style={{width:600}}>
              <div className="card-body">
              <div className="form-group">
                <label>Course ID</label>
                <input type="text" className="form-control" name="id" value={courseInfo.id} disabled/>
              </div>
              <div className="form-group">
                <label>Course Name</label>
                <input type="text" className="form-control" name="name"  value={courseInfo.name} disabled/>
              </div>
              <div className="form-group">
                <label>Course Department</label>
                <input type="text" className="form-control" name="dept" value={courseInfo.department} disabled/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" name="description" value={courseInfo.description} disabled/>
              </div>
              <div className="form-group">
                <label>Course Room</label>
                <input type="number" className="form-control" name="room" value={courseInfo.courseroom} disabled/>
              </div>
              <div className="form-group">
                <label>Waitlist Capacity</label>
                <input type="number" className="form-control" name="capacity" value={courseInfo.waitlistcapacity} disabled/>
              </div>
              <div className="form-group">
                <label>Course Team</label>
                <input type="text" className="form-control" name="team" value={courseInfo.courseteam} disabled/>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.validateform}>Confirm</button>
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

  return bindActionCreators({ViewCourse: AC_VIEW_COURSE,AddCourseList:AC_ADD_COURSELIST},dispatch)
}
const ViewCourseComponent = connect(mapStateToProps,mapDispatchToProps)(ViewCourse);

export default ViewCourseComponent;
