import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

const SinglePost = (props) => {
  console.log(props.onePost);
  const { author, body, date, title } = props.onePost;
  return (
    <div className='page single-page'>
      <h1>{title}</h1>
      <p>{body}</p>
      <p className='author'><span>{author}</span> <span>{date}</span></p>
      <NavLink to="/"><i className="fas fa-angle-left"></i> Return</NavLink>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const singleId = ownProps.match.params.id;
  const onePost = state.postsContainer.posts.find(item => parseFloat(singleId) === item.id);
  return {
    onePost
  }
}

export default connect(mapStateToProps)(SinglePost);