import React from 'react';
import axios from 'axios';

const utf8 = require('utf8');
const base64 = require('base-64');

export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email: '',
            password: '',
            type: 'user',
            res: {}
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

            axios.get(`https://phynix-api-func.azurewebsites.net/api/Login?token=${encoded}`)
                .then(res => {
                    this.setState({ res })
                    })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    render(){
        let { email, password } = this.state;
        console.log(this.state)

        return(
            <div className="login">
                <input value={email} onChange={this.inputHandler} name="email"/>
                <input value={password} onChange={this.inputHandler} name="password"/>
                <button onClick={this.sumbitHandler}>Log In</button>
            </div>
        )
    }
}