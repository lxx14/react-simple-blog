import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1>Hello! <i className="fas fa-hand-peace"></i></h1>
      <h2>Welcome to our tiny blog</h2>
      <p>...we are really glad to see you:)</p>
    </div>
  )
}

export default Header;