import React from 'react';
import './home.sass';

//imports
import Nav from './hoc/nav/nav';

export default class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <Nav />
        Home
      </div>
    );
  }
}
