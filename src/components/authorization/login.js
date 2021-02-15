import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Emailvalidate} from '../../common/validate.js';
import { AC_LOGIN } from '../../actions/authorizationaction';
import Signup from './signup';

class Login extends React.Component{
  constructor(props){
    super(props);

    this.state=
    {
      usertype              : 'student',
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
    const usertype          = this.state.usertype;
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
    console.log('====',this.state.usertype);
   if(mail && password && usertype && emailcheck===1){
     localStorage.setItem("usertype",this.state.usertype);
     this.props.login({password:password,email:mail})
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
       //Usertype
       if(name=="usertype"){
         if(value){
           this.setState({usertype:value});
         }
       }

  }
  render(){
    const id = this.props.AuthorizationReducer.id;
    localStorage.setItem("id",id);
    if (this.state.isLogin) {
      return <Redirect to='/'/>;
    }
    if(this.props.AuthorizationReducer.auth){
           localStorage.setItem("isAuth",true);
           this.setState({isLogin:true});
           window.location.reload(false);
           //this.props.history.push("/dashboard");
    }
    return(
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Course</b>Management
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
                <div className="input-group mb-3">
                <select className="form-control" name="usertype" value={this.state.usertype}  onChange={(e)=>this.onChangevalue(e)}>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                </select>
                </div>
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
                  <Link to="/signup">New user? Click here</Link>
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
  return bindActionCreators({login:AC_LOGIN},dispatch)
}
const LoginComponent = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginComponent;
