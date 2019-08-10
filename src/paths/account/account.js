import React from 'react';
import './account.sass';

//imports
import Nav from '../hoc/nav/nav';

export default class Account extends React.Component{
  constructor(props){
    super(props)

    this.state={
      loggedIn: false,
      
    }
  }

  render() {
    return (
      <div>
        <Nav />
        Account
      </div>
    );
  };
};