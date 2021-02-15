import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AC_ADD_COURSE} from '../../actions/courseaction'

class AddCourse extends React.Component {
  constructor(props){
    super(props);
    this.state=
        {
          id                  : '',
          iderror             : false,
          name                : '',
          nameerror           : false,
          dept                : '',
          depterror           : false,
          description         : '',
          descriptionerror    : false,
          room                : '',
          roomerror           : false,
          capacity            : '',
          capacityerror       : false,
          team                : '',
          teamerror           : false
        }
        this.validateform = this.validateform.bind(this);
      }
      componentDidMount() {
        window.$(function () {
          window.$('#compose-textarea').summernote({ height: 200,focus: true });
        })
      }

      //validation
      validateform() {
        var id                = this.state.id;
        var name              = this.state.name;
        var dept              = this.state.dept;
        var room              = this.state.room;
        var capacity          = this.state.capacity;
        var team              = this.state.team;
        var description       = window.$('#compose-textarea').summernote('code');
        var checkdescription = 0;
        if(id) {
          this.setState({iderror:false})
        } else {
          this.setState({iderror:true})
        }
        if(name) {
          this.setState({nameerror:false})
        } else {
          this.setState({nameerror:true})
        }
        if(dept) {
          this.setState({depterror:false})
        } else {
          this.setState({depterror:true})
        }
        if(room) {
          this.setState({roomerror:false})
        } else {
          this.setState({roomerror:true})
        }
        if(capacity) {
          this.setState({capacityerror:false})
        } else {
          this.setState({capacityerror:true})
        }
        if(team) {
          this.setState({teamerror:false})
        } else {
          this.setState({teamerror:true})
        }
        if(description!=="<p><br></p>") {
            this.setState({descriptionerror:false})
            checkdescription=1;
         } else {
            this.setState({descriptionerror:true})
         }
         if(name  && description && id && dept && team && room && capacity) {
         this.setState({name:'',id:'',description:'',dept:'', team:'', room:'',capacity:''});
          window.$('#compose-textarea').summernote('reset');
            const courseFormData = {
                                  id       : id,
                                  name     : name,
                                  dept     : dept,
                                  room     : room,
                                  capacity : capacity,
                                  team     : team,
                                  description : description,
                    }
            this.props.AddCourse(courseFormData);
         }
      }
      //onchange values
      onchangeValue(event) {
        const name        = event.target.name;
        const value       = event.target.value;
        if(name ==='id') {
          if(value){
            this.setState({id:value,iderror:false})
          } else {
            this.setState({id:value,iderror:true})
          }
       }
        if(name ==='name') {
          if(value){
            this.setState({name:value,nameError:false})
          } else {
            this.setState({name:value,nameError:true})
          }
       }
       if(name ==='dept') {
         if(value){
           this.setState({dept:value,depterror:false})
         } else {
           this.setState({dept:value,depterror:true})
         }
       }
         if(name ==='room') {
           if(value){
             this.setState({room:value,roomerror:false})
           } else {
             this.setState({room:value,roomerror:true})
           }
        }
        if(name ==='capacity') {
          if(value){
            this.setState({capacity:value,capacityerror:false})
          } else {
            this.setState({capacity:value,capacityerror:true})
          }
       }
       if(name ==='team') {
         if(value){
           this.setState({team:value,teamerror:false})
         } else {
           this.setState({team:value,teameerror:true})
         }
      }

        if(name ==='description') {
            if(value){
              this.setState({description:value,descriptionerror:false})
            } else {
              this.setState({description:value,descriptionerror:true})
            }
          }
      }
  render() {
      return(
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Add Course</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Course Detail</li>
                  <li className="breadcrumb-item active" aria-current="page">Add Course</li>
                </ol>
              </nav>
            </div>
            <div className="card" style={{width:600}}>
              <div className="card-body">
                  <div className="form-group">
                    <label>Course ID</label><span style={{color:"red"}}>*</span>
                    <input type="text" className="form-control" name="id" placeholder="Enter Course ID" value={this.state.id} onChange={(e)=>this.onchangeValue(e)}/>
                    {this.state.iderror?<label style={{color:"red"}}>ID is Required</label>:""}
                  </div>
                  <div className="form-group">
                    <label>Course Name</label><span style={{color:"red"}}>*</span>
                    <input type="text" className="form-control" name="name" placeholder="Enter Name" value={this.state.name} onChange={(e)=>this.onchangeValue(e)}/>
                    {this.state.nameerror?<label style={{color:"red"}}>Name is Required</label>:""}
                  </div>
                  <div className="form-group">
                    <label>Course Department</label><span style={{color:"red"}}>*</span>
                    <input type="text" className="form-control" name="dept" placeholder="Enter Department" value={this.state.dept} onChange={(e)=>this.onchangeValue(e)}/>
                    {this.state.depterror?<label style={{color:"red"}}>Department is Required</label>:""}
                  </div>
                  <div className="form-group">
                    <label>Description</label><span style={{color:"red"}}>*</span>
                    <textarea type="textarea" className="form-control" name="description" id="compose-textarea" placeholder="Enter Description" value={this.state.description} onChange={(e)=>this.onchangeValue(e)}></textarea>
                    {this.state.descriptionerror?<label style={{color:"red"}}>Description is Required</label>:""}
                  </div>
                  <div className="form-group">
                    <label>Course Room</label><span style={{color:"red"}}>*</span>
                    <input type="number" className="form-control" name="room" placeholder="Enter Room" value={this.state.room} onChange={(e)=>this.onchangeValue(e)}/>
                    {this.state.roomerror?<label style={{color:"red"}}>Course Room is Required</label>:""}
                  </div>
                  <div className="form-group">
                    <label>Waitlist Capacity</label><span style={{color:"red"}}>*</span>
                    <input type="number" className="form-control" name="capacity" placeholder="Enter Capacity" value={this.state.capacity} onChange={(e)=>this.onchangeValue(e)}/>
                    {this.state.capacityerror?<label style={{color:"red"}}>Waitlist Capacity is Required</label>:""}
                  </div>
                  <div className="form-group">
                    <label>Course Team</label><span style={{color:"red"}}>*</span>
                    <input type="text" className="form-control" name="team" placeholder="Enter Team" value={this.state.text} onChange={(e)=>this.onchangeValue(e)}/>
                    {this.state.teamerror?<label style={{color:"red"}}>Course Team is Required</label>:""}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.validateform}>Submit</button>
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
  return bindActionCreators({AddCourse: AC_ADD_COURSE},dispatch)
}
const AddCourseComponent = connect(mapStateToProps,mapDispatchToProps)(AddCourse);

export default AddCourseComponent;
