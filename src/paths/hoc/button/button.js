import React from 'react';
import './button.sass';


export default class Button extends React.Component{
    constructor(props){
        super(props)

        this.state={
            number: 0,
            colours: [
                ['#0092BD', '#006583'],
                ['#40B434', '#0C7E00'],
                ['#D85315', '#9A3A00'],
                ['#DA1400', '#830C00']
            ]
        }
    }

    swap(type){
        let { number, colours } = this.state;

        switch(type) {
            case 'Users':
                return (
                    <div className="button">
                        <div className="flex" style={{ background: `${colours[0][0]}` }}>
                            <div className="flex-1">
                                <h3>{number}</h3>
                                <p>Amount of Users</p>
                            </div>
                            <div className="flex-2">
                                <img className="bar-img" src="https://img.icons8.com/ios-filled/50/000000/bar-chart.png" alt="bar"/>
                            </div>
                        </div>
                        <div className="button-bottom" style={{ background: `${colours[0][1]}` }}>
                            <p>More Info <img id="arr-img" src="https://img.icons8.com/material/24/000000/circled-right--v1.png" alt="arr"/></p>
                        </div>
                    </div>
                    )
            case 'Revenue':
                    return (
                        <div className="button">
                            <div className="flex" style={{ background: `${colours[1][0]}` }}>
                                <div className="flex-1">
                                    <h3>{number}</h3>
                                    <p>Revenue</p>
                                </div>
                                <div className="flex-2">
                                    <img className="dollars" src="https://img.icons8.com/material/50/000000/us-dollar.png" alt="dollars" />
                                </div>
                            </div>
                            <div className="button-bottom" style={{ background: `${colours[1][1]}` }}>
                                <p>More Info <img id="arr-img" src="https://img.icons8.com/material/24/000000/circled-right--v1.png" alt="arr"/></p>
                            </div>
                        </div>
                        )
            case 'InActive':
                    return (
                        <div className="button">
                            <div className="flex" style={{ background: `${colours[2][0]}` }}>
                                <div className="flex-1">
                                    <h3>{number}</h3>
                                    <p>In-Active Users</p>
                                </div>
                                <div className="flex-2">
                                    <img className="user" src="https://img.icons8.com/material/50/000000/change-user-male.png" alt="contact"/>
                                </div>
                            </div>
                            <div className="button-bottom" style={{ background: `${colours[2][1]}` }}>
                                <p>More Info <img id="arr-img" src="https://img.icons8.com/material/24/000000/circled-right--v1.png" alt="arr"/></p>
                            </div>
                        </div>
                        )
            case 'Trips':
                    return (
                        <div className="button">
                            <div className="flex" style={{ background: `${colours[3][0]}` }}>
                                <div className="flex-1">
                                    <h3>{number}</h3>
                                    <p>Trips</p>
                                </div>
                                <div className="flex-2">
                                <img className="driver" src="https://img.icons8.com/material/50/000000/vanpool.png" alt="driver"/>
                                </div>
                            </div>
                            <div className="button-bottom" style={{ background: `${colours[3][1]}` }}>
                                <p>More Info <img id="arr-img" src="https://img.icons8.com/material/24/000000/circled-right--v1.png" alt="arr"/></p>
                            </div>
                        </div>
                        )
            default:
                return null
    }
}

    render(){
        let { type } = this.props;

        return(
            <div>
                {this.swap(type)}
            </div>
        )
    }
}