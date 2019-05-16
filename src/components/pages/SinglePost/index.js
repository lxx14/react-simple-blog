import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComments } from './service';
import { addCommentAction, setCommentAction } from './actions';
import './style.scss';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOpen: false,
      value: ''
    }
  }

  componentDidMount() {
    const commentsFromFetch = getComments();
    commentsFromFetch.then((data) => { this.props.setComments(data) })
  }

  openComments = () => {
    this.setState({
      buttonOpen: !this.state.buttonOpen
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  addComment = () => {
    if (!this.state.value) {
      alert('field is ampty... Add some warm words to us!')
    } else {
      const id = this.props.comments[this.props.comments.length - 1]['id'] + 1
      console.log(id);
      const comment = { id, body: this.state.value };
      this.props.addComment(comment);
      alert('Your opinion is very important to us :)');
      fetch('https://simple-blog-api.crew.red/comments', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:comment.id, body: comment.body})
      });
    }
  }

  render() {
    const { author, body, date, title } = this.props.onePost;
    const commentsList = this.props.comments.map(item => <li key={item.id}>Comment №: {item.id}</li>)
    return (
      <div className='page single-page'>
        <h1>{title}</h1>
        <p>{body}</p>
        <p className='author'><span>{author}</span> <span>{date}</span></p>
        <NavLink to="/"><i className="fas fa-angle-left"></i> Return</NavLink>
        <div>
          <h2>Comments <button className='button' type='button' onClick={this.openComments}>{this.state.buttonOpen ? 'Hide' : 'Show'}</button></h2>
          <ul>
            {this.state.buttonOpen && commentsList}
          </ul>
        </div>
        <input className='textarea' type='textarea' onChange={this.handleChange} />
        <input className='button' type='button' onClick={this.addComment} value='Send new' />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const singleId = ownProps.match.params.id;
  const onePost = state.postsContainer.posts.find(item => parseFloat(singleId) === item.id);
  const comments = state.page.comments;
  return {
    onePost,
    comments
  }
}

const mapDispatchToProps = (dispatch) => ({
  setComments: (data) => dispatch(setCommentAction(data)),
  addComment: (item) => dispatch(addCommentAction(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);