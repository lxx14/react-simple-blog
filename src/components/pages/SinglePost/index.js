import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

const SinglePost = () => {
  return (
    <div className='page single-page'>
      <h1>SinglePost</h1>
      <NavLink to="/"><i className="fas fa-angle-left"></i> Return</NavLink>
    </div>
  )
}

export default SinglePost;