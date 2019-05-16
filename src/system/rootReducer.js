import { combineReducers } from 'redux';

import postsContainer from '../components/pages/Posts/reducer';
import page from '../components/pages/SinglePost/reducer';

export default combineReducers({
  postsContainer,
  page
})