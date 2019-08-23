import React, { Component } from 'react';
import './../Login/Login.css';

import LoginImage from '../../ImageAssets/fundallLogin.svg';
import Logo from '../Logo/Logo';
import MainButton from '../MainButton/MainButton';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logInEmail: '',
      logInPassword: '',
    };
  }

  onEmailChange = event => {
    //console.log(event.target.value);
    this.setState({ logInEmail: event.target.value });
  };

  onPasswordChange = event => {
    // console.log(event.target.value);
    this.setState({ logInPassword: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('clicked');
  };

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };
  render() {
    return (
      <div className="container">
        <div className="d-md-flex h-md-100 align-items-center">
          <div className="col-md-6 p-0 bg-indigo h-md-100">
            <Logo />
            <div className="d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
              <div className="logoarea pt-5 pb-5">
                <img src={LoginImage} alt="Login" />
                <h2 className="welcome-text text-left font-weight-bold">
                  <span>Welcome back!</span> <br /> We miss you.
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-white h-md-100 loginarea">
            <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center shadow-lg mb-2 rounded">
              <form className="font-weight-normal">
                <h1>Holla</h1>
                <h4 className="pt-2 pb-5 font-weight-normal">
                  Sign in to the vibe!
                </h4>
                <div className="form-row pb-4">
                  <label htmlFor="inputAddress">Email or Username</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Email or Username"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="form-row pb-5">
                  <label htmlFor="inputAddress2">Password</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Password"
                    onChange={this.onPasswordChange}
                  />
                </div>

                <MainButton type="submit" onClick={this.handleSubmit}>
                  {' '}
                  Sign in{' '}
                </MainButton>
                <p className="text-center pt-5 px-4">
                  Don't have an account?
                  <span className="fundall-color font-weight-bold">
                    {' '}
                    Register Here
                  </span>
                </p>
                <p className="text-center pt-3 px-4">
                  By clicking on Login, you agree to our
                  <span className="fundall-color font-weight-light text-center">
                    {' '}
                    Terms & Conditions and Privacy Policy
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
