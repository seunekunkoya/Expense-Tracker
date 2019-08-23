import React from 'react';

import '../MainButton/MainButton.css';

const MainButton = ({ children, ...otherProps }) => (
  <button className="btn btn-block b_btn" {...otherProps}>
    {children}
  </button>
);

export default MainButton;
