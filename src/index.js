import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';

import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

//Paths
import Login from './paths/login/login';
import Account from './paths/account/account';
import Dashboard from './paths/dashboard/dashboard';
import Users from './paths/users/users';
import inActiveUsers from './paths/inactiveusers/inactiveusers';
import Trips from './paths/trips/trips';
import Revinue from './paths/revinue/revinue';

export const IsLoggedIn = React.createContext();

class App extends React.Component{
  state ={
    allDrivers: {},
    tripsByDrivers: {},
    loggedIn: false,
    authenticated: () => this.setState({ loggedIn: true }),
    loggedOut: () => this.setState({ loggedIn: false })
  }

  componentDidMount(){
    axios.get('https://phynixnetapi.azurewebsites.net/api/GetAllDrivers?code=ECBaVbShCzhbV1b6087SYCSJkI6sj0So7xCXcGMCD0SZak/r8H//QQ==')
      .then(res => {
        this.setState({ allDrivers: res })
      })
      .catch(err => {
        console.error(err)
      })
      axios.get('https://phynixnetapi.azurewebsites.net/api/GetTripsByDriver?code=8Rj9ldhO/LD0ZWJrPUlgJH8mmusN06aPP6f8dOPEcx7MkiaS/CJAxw==')
      .then(res => {
        this.setState({ tripsByDrivers: res })
      })
      .catch(err => {
        console.error(err)
      })
  }
  
  render(){
    let { loggedIn } = this.state;

    return(
      <IsLoggedIn.Provider value={{ state: this.state }}>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/account" exact component={Account} />
          <Route path="/users" exact component={Users} />
          <Route path="/inActiveUsers" exact component={inActiveUsers} />
          <Route path="/trips" exact component={Trips} />
          <Route path="/Revinue" exact component={Revinue} />
        </Router>
      </IsLoggedIn.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
