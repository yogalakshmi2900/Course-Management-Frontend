import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Emailvalidate} from '../../common/validate.js';
import { AC_SIGNUP } from '../../actions/authorizationaction';

class Signup extends React.Component{
  constructor(props){
    super(props);

    this.state=
    {
      usertype              : '',
      name                  : '',
      nameerror             : false,
      email                 : '',
      password              : '',
      emailerror            : false,
      passworderror         : false,
      validmailerror        : "",
      validpassworderror    : false,
      emailvalue            : false,
      passwordvalue         : false,
      isLogin               : false
    }
    this.validlogin         = this.validlogin.bind(this)
    this.onChangevalue      = this.onChangevalue.bind(this)
  }
  ///validation()
  validlogin(){
    const mail              = this.state.email;
    const password          = this.state.password;
    const name              = this.state.name;
    var emailcheck=0;
    var passwordcheck=0;
    if(mail){
          if(!Emailvalidate(mail)){
            this.setState({emailcheckerror:true});
          }
          else{
            emailcheck=1;
            this.setState({emailcheckerror:false});
          }
    }
    if(mail){
      this.setState({emailerror:false})
    }
    else {
      this.setState({emailerror:true})
    }
    if(password){
        this.setState({passworderror:false});
    }
    else {
        this.setState({passworderror:true})
    }
    if(name){
        this.setState({nameerror:false});
    }
    else {
        this.setState({nameerror:true})
    }
   if(mail && password && name && emailcheck===1){
     console.log('====',this.state.usertype);
     localStorage.setItem("usertype",this.state.usertype);
     this.props.signup({name:name,password:password,email:mail})
    }
  }

//onchange values
  onChangevalue(event){
    const name        =event.target.name;
    const value       =event.target.value;

    //E-Mail
    if(name ==='email'){
     const isvalid=Emailvalidate(value);
     if(isvalid){
      this.setState({email:value,emailerror:false,validmailerror:"",emailvalue:true})
      }
    else{
      this.setState({email:value,emailerror:true,validmailerror:"Enter valid Mail",emailvalue:false})
      }
     this.setState({email:value,emailerror:false})
     }
     //Password
     if(name ==="password"){
       this.setState({password:value,passworderror:false});
       }
      if(name=="name"){
        if(value){
          this.setState({name:value,nameerror:false});
        }
      }
      if(name=="usertype"){
        if(value){
          this.setState({usertype:value});
        }
      }

  }
  render(){
    if (this.state.isLogin) {
      return <Redirect to='/'/>;
    }
    if(this.props.AuthorizationReducer.auth){
           localStorage.setItem("isAuth",true);
           this.setState({isLogin:true});
           window.location.reload(false);
           //this.props.history.push("/dashboard");
    }
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Course</b>Management
          </div>
          <div className="card">
            <div className="card-body login-card-body">

                <div className="input-group mb-3">
                <select className="form-control" name="usertype" value={this.state.usertype}  onChange={(e)=>this.onChangevalue(e)}>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                </select>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Name" name="name"  onChange={(e)=>this.onChangevalue(e)}/>
                </div>
                {this.state.nameerror?<label style={{color:"red"}}>Enter Name</label>:""}
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" name="email"  onChange={(e)=>this.onChangevalue(e)}/>
                   <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                {this.state.emailerror?<label style={{color:"red"}}>Enter Mail</label>:""}
                {this.state.validmailerror!=="" && !this.state.emailerror?<label style={{color:"red"}}>{this.state.validmailerror}</label>:""}
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" name="password" onChange={(e)=>this.onChangevalue(e)}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                {this.state.passworderror?<label style={{color:"red"}}>Enter password</label>:""}
                {this.state.validpassworderror?<label style={{color:"red"}}>Incorrect password</label>:""}
                <div className="row">
                  <div className="col-8">
                  <p className="mb-1">
                  <Link to="/">Already have an Account?</Link>
                  </p>
                  </div>
                  <div className="col-4">
                    <button type="button" value="submit" className="btn btn-primary btn-block btn-flat" onClick={this.validlogin}>Sign In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    AuthorizationReducer : state.AuthorizationReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({signup:AC_SIGNUP},dispatch)
}
const SignupComponent = connect(mapStateToProps,mapDispatchToProps)(Signup);

export default SignupComponent;
