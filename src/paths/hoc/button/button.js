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
                                <img className="bar-img" src="https://img.icons8.com/ios-filled/50/000000/bar-chart.png"/>
                            </div>
                        </div>
                        <div className="button-bottom" style={{ background: `${colours[0][1]}` }}>
                            <p>More Info <img id="arr-img" src="https://img.icons8.com/material/24/000000/circled-right--v1.png"/></p>
                        </div>
                    </div>
                    )
            case 'Revenue':
                    return (
                        <div className="button">
                            <div className="flex" style={{ background: `${colours[1][0]}` }}>
                                <div className="flex-1">
                                    <h3>{number}</h3>
                                    <p>Revenue generated</p>
                                </div>
                                <div className="flex-2">
                                    <img className="bar-img" src="https://img.icons8.com/ios-filled/50/000000/bar-chart.png"/>
                                </div>
                            </div>
                            <div className="button-bottom" style={{ background: `${colours[1][1]}` }}>
                                <p>More Info <img id="arr-img" src="https://img.icons8.com/material/24/000000/circled-right--v1.png"/></p>
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