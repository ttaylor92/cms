import React from 'react';
import { Redirect } from 'react-router-dom';

import { IsLoggedIn } from '../../index';

const Users = props =>{

    const inactiveRender = () =>{
        return(
            <div>
                user
            </div>
        )
    }

    return(
        <IsLoggedIn.Consumer>
            {(context) => (context.state.loggedIn) ? inactiveRender() : <Redirect to="/"/>}
        </IsLoggedIn.Consumer>
    )
}

export default Users;