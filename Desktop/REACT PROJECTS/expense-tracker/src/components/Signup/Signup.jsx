import React, { Component } from 'react';
import './../Signup/Signup.css';

import SignupImage from '../../ImageAssets/fundall.svg';
import Logo from '../Logo/Logo';
import MainButton from '../MainButton/MainButton';

class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-md-flex h-md-100 align-items-center">
          <div className="col-md-6 p-0 bg-indigo h-md-100">
            <Logo />
            <div className="d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
              <div className="logoarea pt-5 pb-5">
                <img src={SignupImage} alt="Signup" />
                <h2 className="welcome-text text-left font-weight-bold">
                  <span>Welcome! </span>
                  Let's get to know you.
                </h2>
                <h5 className="welcome-text text-left font-weight-normal">
                  Your first step towards a better financial life style starts
                  here
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-white h-md-100 loginarea">
            <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center shadow-lg p-2 mb-2 rounded">
              <form className="font-weight-normal">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="first name">First Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="last name">Last Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Email Address</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Password</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputAddress2">Confirm Password</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                  />
                </div>

                <MainButton buttonText="Sign Up" />

                <p className="pt-5 mx-auto" style={{ width: 270 }}>
                  Already have an account?
                  <span className="fundall-color font-weight-bold">
                    {' '}
                    Login Here
                  </span>
                </p>
              </form>
            </div>
            <p className="text-center pt-3 px-4">
              By clicking on Login, you agree to our
              <span className="fundall-color font-weight-light text-center">
                {' '}
                Terms & Conditions and Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
