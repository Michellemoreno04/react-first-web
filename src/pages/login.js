import React from "react";


export function Login() {
  return (
    
    <div>
      <h2>LOGIN</h2>
    
      <div className="login-box">
      
  <p>Login</p><br/><br/><br/><br/><br/><br/><br/><br/>
  <form>
    <div className="user-box">
      <input required="" className="emailContacto" type="text"/>
      <label>Email</label>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    <div className="user-box">
      <input required="" className="passwordContacto" type="password"/>
      <label>Password</label>
    </div>
    <a href="#" >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="" className="a2">Sign up!</a></p>
</div>
    </div>
  );
}



