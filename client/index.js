import React from 'react';

import { render } from 'react-dom';
import App from './components/App';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// uncomment so that webpack can bundle styles
import styles from './scss/page.scss';


//this will load w/e app chose 
render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
);
