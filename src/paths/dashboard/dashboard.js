import React from 'react';
import './dashboard.sass';
import { Redirect } from 'react-router-dom';

import Nav from '../hoc/nav/nav';
import Chart from "react-apexcharts";
import Button from "../hoc/button/button";

import { IsLoggedIn } from '../../index';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "series-2",
                data: [60, 70, 80, 80, 90, 40, 20, 50]
            }
          ]
        }
      }
    
      renderFunc = () =>{
        let { options, series} = this.state;

        return(
          <div>
          <Nav />
          <div className="dashboard">
              Dashboard
              <div className="row">
                  <Button type="Users" />
                  <Button type="InActive" />
                  <Button type="Trips" />
                  <Button type="Revenue" />                    
              </div>
              <div className="row">
                <div className="mixed-chart">
                    <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="500"
                    />
                </div>
                <div className="mixed-chart">
                    <Chart
                    options={options}
                    series={series}
                    type="line"
                    width="500"
                    />
                </div>
              </div>
          </div>
        </div>
        )
      }
      render() {
        
        return(
          <IsLoggedIn.Consumer>
            {(context) => (
              (context.state.loggedIn) ? this.renderFunc() : <Redirect to="/"/>
            )}
          </IsLoggedIn.Consumer>
        )
      };
}