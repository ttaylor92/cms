import React from 'react';
import './dashboard.sass';

import Nav from '../hoc/nav/nav';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div className="dashboard">
                <Nav />
                Dashboard
            </div>
        )
    }
}