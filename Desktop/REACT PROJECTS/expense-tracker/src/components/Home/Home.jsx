import React from 'react';
import './Home.css';

import Header from '../Header/Header';
import HomeImage from '../../ImageAssets/fundall.svg';

const Home = ({ onClickLogin, onClickSignup }) => {
  return (
    <div>
      <Header loginClick={onClickLogin} signupClick={onClickSignup} />
      <div className="container">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <img src={HomeImage} alt="Home" className="pt-5" />
            <h1 className="font-weight-bold pt-5">Fundall Expense Tracker</h1>
            <h3 className="font-weight-normal pt-2 mb-5">
              Mini Project Frontend
            </h3>
            <h5 className="font-weight-bold mb-5">By Isaiah Ekunkoya</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
