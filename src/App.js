import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import Home from './pages/home'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={import('./pages/about')} />
          <Route path="/login" component={import('./pages/login')} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
