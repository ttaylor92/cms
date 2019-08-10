import React from 'react';
import axios from 'axios';
import './login.sass';
import { Redirect } from 'react-router-dom';

import { IsLoggedIn } from '../../index';

const utf8 = require('utf8');
const base64 = require('base-64');

export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email: 'jordainegayle34@gmail.com',
            password: 'Love123456789',
            type: 'user',
            res: {},
            auth: false
        }

        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler = (e) => this.setState({ [e.target.name]: e.target.value})

    sumbitHandler = e =>{
        e.preventDefault();
        let { email, password,  type } = this.state;

        if(email.length > 0){
            const appended = `${email}:${password}:${type}`

            let bytes = utf8.encode(appended);
            let encoded = base64.encode(bytes);

            console.log(encoded)

            axios.get(`https://phynixnetapi.azurewebsites.net/api/Login?token=${encoded}`)
                .then(res => {
                    this.setState({ res, auth: true })
                    })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    logIn = () =>{
        let { email, password, auth } = this.state;
        
        return(
            
                <div className="login">
                    <img src="/images/phynix.png" alt="logo" className="login-logo" />
                    <div>
                        <p className="login-info">Email</p>
                        <input value={email} onChange={this.inputHandler} name="email"/>
                    </div>
                    <div>
                        <p className="login-info">Password</p>
                        <input value={password} onChange={this.inputHandler} name="password"/>
                    </div>
                    <IsLoggedIn.Consumer>
                        {(context) => (auth) ? context.state.authenticated() : null}
                    </IsLoggedIn.Consumer>
                    <button onClick={this.sumbitHandler} className="myButton">Log In</button>
                </div>
        )
    }

    render(){
        console.log(this.state)

        return(
            <IsLoggedIn.Consumer>
                {(context) => (context.state.loggedIn) ? <Redirect to="/dashboard" /> : this.logIn()}
            </IsLoggedIn.Consumer>
        )
    }
}