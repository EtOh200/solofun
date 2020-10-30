import React, { Component } from 'react';
import { render } from 'react-dom';

import styles from '../scss/page.scss';
class Dashboard extends Component {
  render() {
    //decalre variable before returning. 

    let testobj = {
      date: 'Oct-29 10:40AM',
      name: 'Joe',
      task: 'finish connecting server & frontend',
      
    }
    let joyceobj = {
      date: 'Oct-29 12:05PM',
      name: 'Joyce',
      task: '"fetch" lunch for the team'
    }
    let dan = {
      date: 'void',
      name: 'void',
      task: `site has been compromised @#($*&@#(*^@()*#$@#$)@&#$*@&#($*@&#($*&@#(*$&@*#$&` 
    }
    //dashboard should render a list of todo. inside tbody?

    // let todoObj = {
    //   todo: 'connect frontend to back end',

    // }
    return (
      <div>
      
      <button className= "gTag" onClick =  {() => window.location = "/"}>Logout </button>
      <p>Pending Todos</p>
        <table id = "table"> 
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Task</th>
              <th>'Knocked out'</th>
            </tr>
          </thead>
          <tbody>
        <tr>
            <td>{testobj.date}</td>
            <td>{testobj.name}</td>
            <td>{testobj.task}</td>
        </tr>
        <tr>
            <td>{joyceobj.date}</td>
            <td>{joyceobj.name}</td>
            <td>{joyceobj.task}</td>
        </tr>
        <tr>
            <td>{dan.date}</td>
            <td>{dan.name}</td>
            <td>{dan.task}</td>
        </tr>
    </tbody>
        </table>
      </div>
    )
  }
}

export default Dashboard; 