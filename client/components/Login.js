import React, { Component } from 'react';
import { render } from 'react-dom';
class Login extends Component {
  render() {
    return (
      <div>
      <h1>Login</h1>
      <button className= "gTag" onClick =  {() => window.location = "http://localhost:3000/login/google"}> Login with Google </button>

      </div>
    )
  }
}

export default Login; 