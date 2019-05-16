import React, { Component } from 'react';
import { getPosts } from './service';
import './style.scss';

class Posts extends Component {

  componentDidMount() {
    const posts = getPosts();
    console.log(posts);
  }

  render() {
  return (
    <div className='page'>
      <h1>Posts</h1>
    </div>
  )
  }
}

export default Posts;