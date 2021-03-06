import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard"

//have switch statement inside render to pick components to render
const App = () => {
  
    return (
      <div>
       <h1><strong>teamSpace</strong></h1>
        <Switch>
        <Route 
        exact
        path="/" 
        component={Login}
        />
        <Route 
        exact
        path= "/dashboard"
        component={Dashboard}/>
        </Switch>
      </div>
    )
  
};


export default App;