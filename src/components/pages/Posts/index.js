import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from './service';
import './style.scss';

class Posts extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const postsFromFetch = getPosts();
    postsFromFetch.then((posts) => { this.props.setPosts(posts) })
  }

  render() {
    const { posts } = this.props;
    const postsList = posts.map((item) =>
      <div key={item.id} className='post-page'>
        <h2>{item.title}</h2>
        <p>{item.author}, {item.date}</p>
        <NavLink to={`post/${item.id}`}>Read more</NavLink>
      </div>
    );
    return (
      <div className='page'>
        {postsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.postsContainer.posts,
})

const mapDispatchToProps = (dispatch) => ({
  setPosts: (data) => dispatch({ type: "SET_POSTS", data })
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
