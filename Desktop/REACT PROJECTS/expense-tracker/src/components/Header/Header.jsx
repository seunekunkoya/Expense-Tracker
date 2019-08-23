import React from 'react';
import logo from '../../ImageAssets/fundalllogo.svg';

const Header = ({ loginClick, signupClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              className="btn nav-link btn-outline-light font-weight-bold text-dark rounded"
              onClick={loginClick}
            >
              {' '}
              LOG IN
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn nav-link btn-outline-light font-weight-bold text-dark rounded"
              onClick={signupClick}
            >
              SIGN UP{' '}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
