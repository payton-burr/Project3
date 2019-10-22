import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./sass/main.scss";
import Nav from './components/Nav';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <Nav />
        <Home />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;