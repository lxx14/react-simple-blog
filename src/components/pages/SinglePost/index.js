import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComments } from './service';
import './style.scss';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOpen: false
    }
  }

  componentDidMount() {
    const commentsFromFetch = getComments();
    commentsFromFetch.then((data)=>{this.props.setComments(data)})
  }

  openComments = () => {
    this.setState({
      buttonOpen: !this.state.buttonOpen
    })
  }

  addComment = () => {
    const id = this.props.comments[this.props.comments.length-1]['id']+1
    console.log(id);
    const comment = {id, body: 'test11111111111111111111'}
  }

  render() {
    const { author, body, date, title } = this.props.onePost;
    const commentsList = this.props.comments.map(item=><li key={item.id}>Comment №: {item.id}</li>)
    return (
      <div className='page single-page'>
        <h1>{title}</h1>
        <p>{body}</p>
        <p className='author'><span>{author}</span> <span>{date}</span></p>
        <NavLink to="/"><i className="fas fa-angle-left"></i> Return</NavLink>
        <div>
          <h2>Comments <button type='button' onClick={this.openComments}>{this.state.buttonOpen ? 'Hide' : 'Show'}</button></h2>
          <ul>
            {this.state.buttonOpen&&commentsList}
          </ul>
        </div>
        <input type='textarea' />
        <input type='button' onClick={this.addComment} value='Send new' />
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
  setComments: (data) => dispatch({type:"SET_COMMENTS", data})
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);