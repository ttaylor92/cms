import React from 'react';
import { Link } from 'react-router-dom';
import './nav.sass';

export default class Nav extends React.Component {
    state={
        display: 'none'
    }

    displayHandle = () => (this.state.display === 'none') ? this.setState({ display: 'block' }) : this.setState({ display: 'none' })

    render(){
        let { display } = this.state;

        return(
            <div>
                <div className="nav justify-content-end">
                    <Link to="/" className="routes">Home</Link>
                    <Link to="/dashboard" className="routes">Dashboard</Link>

                    <img
                        src="https://image.shutterstock.com/image-vector/picture-profile-icon-human-people-260nw-1011304363.jpg"
                        alt="profile"
                        className="display"
                        onClick={this.displayHandle}
                        />
                </div>
                <div style={{ display: display }} className="drop">
                    <Link to="/account" className="routes">Account</Link>
                </div>
            </div>

        )
    }
}

