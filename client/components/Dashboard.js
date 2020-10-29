import React, { Component } from 'react';
import { render } from 'react-dom';
class Dashboard extends Component {
  render() {
    //decalre variable before returning. 
    let fun = ['what', 'is', 'up']

    //dashboard should render a list of todo. inside tbody?

    return (
      <div>
      <h1>Dashhh </h1>
      <button className= "gTag" onClick =  {() => window.location = "/"}>Logout </button>
      <p>Pending Todos</p>
        <table> 
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Task</th>
              <th>''</th>
            </tr>
          </thead>
          <tbody>
            {}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Dashboard; 