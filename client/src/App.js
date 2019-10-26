import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./sass/main.scss";
import Nav from './components/Nav';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;