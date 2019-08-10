import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';

import { HashRouter as Router, Route } from 'react-router-dom';

//Paths
import Login from './paths/login/login';
import Home from './paths/home';
import Account from './paths/account/account';
import Dashboard from './paths/dashboard/dashboard';

const App = () => {
  return(
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/account" exact component={Account} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
