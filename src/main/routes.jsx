import React from 'react';
import {   HashRouter, Route, Link, Redirect } from 'react-router-dom';

import Todo from '../pages/todo';
import About from '../pages/about';

export default props => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Todo} />
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from='*' to='/todos' /> 
    </div>
  </HashRouter >
)   