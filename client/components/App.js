import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1> My Solo App boo</h1>
        <button className= "gTag" onClick =  {() => window.location = "http://localhost:3000/login/google"}> Login with Google </button>
      </div>
    )
  }
} 

export default App; 