// import React, { Component } from 'react'

// class Portfolio extends Component {
//     render () {
//         return (
//             <div>Portfolio
//             </div>
//         )
//     }
// }

// export default Portfolio

import React,{Component} from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }
      doTheMultiplication() {
        this.setState(function (prevState, props) {
          return {
            value: prevState.thingToMultiply * props.multiplier
          };
        });
      }
      render() {
        return (
          <p className="App-clock">
            The time is {this.state.time}.
          </p>
        );
      }
    }
export default Portfolio;