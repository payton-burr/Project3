import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./sass/main.scss";
import Nav from './components/Nav';
import Homepage from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Homepage />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;