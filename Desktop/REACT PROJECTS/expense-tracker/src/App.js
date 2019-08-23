import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
    };
  }

  onClickLogin = () => {
    this.setState({ route: 'login' });
  };

  onClickSignup = () => {
    this.setState({ route: 'signup' });
  };

  render() {
    return (
      <div className="container">
        {/*  */}
        {this.state.route === 'home' ? (
          <Home
            onClickLogin={this.onClickLogin}
            onClickSignup={this.onClickSignup}
          />
        ) : this.state.route === 'login' ? (
          <Login />
        ) : this.state.route === 'signup' ? (
          <Signup />
        ) : (
          <div>
            <Dashboard />
          </div>
        )}
      </div>
    );
  }
}

export default App;
