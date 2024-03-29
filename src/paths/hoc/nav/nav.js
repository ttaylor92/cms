import React from 'react';
import { Link } from 'react-router-dom';
import './nav.sass';

export default class Nav extends React.Component {
    state={
        display: 'none',
        account: 'Administrator'
    }

    displayHandle = () => (this.state.display === 'none') ? this.setState({ display: 'block' }) : this.setState({ display: 'none' })

    render(){
        let { display, account } = this.state;

        return(
            <div>
                <div className="nav d-flex">
                    <div className="p-2">
                        <Link to="/">
                            <img
                                src="/images/phynix-1.png"
                                alt="logo"
                                className="logo"
                                />
                        </Link>
                    </div>
                    <div className="ml-auto p2" style={{ paddingTop: '5px' }}>
                        <Link to="/" className="routes">Home</Link>
                        <Link to="/dashboard" className="routes">Dashboard</Link>
                        
                        <img
                            src="https://image.shutterstock.com/image-vector/picture-profile-icon-human-people-260nw-1011304363.jpg"
                            alt="profile"
                            className="display"
                            onClick={this.displayHandle}
                            />
                    </div>
                </div>
                <div style={{ display: display }} className="drop">
                    <Link to="/account" className="routes" style={{ margin: '0 10px 0 10px' }}>Account</Link>
                </div>
                <div className="side-nav">
                    <div style={{ display: 'flex', width: '250px', position: 'fixed', bottom: '10px', left: '10px' }}>
                        <div style={{ width: '70%', marginTop: '-5px' }}>
                            <p style={{ margin: 0}}>Administrator</p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" checked readOnly/>
                                    <span>Online</span>
                                </label>
                            </p>
                        </div>
                        <img
                            src="https://image.shutterstock.com/image-vector/picture-profile-icon-human-people-260nw-1011304363.jpg"
                            alt="profile"
                            className="display"
                            onClick={this.displayHandle}
                            style={{ marginBottom: '-20px'}}
                            />
                    </div>
                </div>
            </div>

        )
    }
}

