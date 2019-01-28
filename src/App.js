import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import Home from '@/pages/home'
import About from '@/pages/about'
import Login from '@/pages/login'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
