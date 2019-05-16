import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import SinglePost from '../pages/SinglePost';

export default function () {
  return (
    <Switch>
      <Route exact path='/' component={Posts} />
      <Route path='/post/:id' component={SinglePost} />
    </Switch>
  )
}