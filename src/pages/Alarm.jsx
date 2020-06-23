// import React, { Component } from 'react'

// class Contact extends Component {
//     render () {
//         return (
//             <div>Contact</div>
//         )
//     }
// }

// export default Contact

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Clock,Time} from './components/clock';
class Alarm extends Component {
    state = {}

    // static contextTypes.propTypes = {
    //   route: PropTypes.string
    // }
  
    render() {
      return (
         <div className="App">
          <div className="App-header">
        
            <Clock renderChild={this.state.renderChild}></Clock>
            <Time></Time>
          </div>
         </div>
      );
    }
  }
  export default Alarm;
  
//   ReactDOM.render(
//       <Contact />,
//       document.getElementById('alarm-clock')
//   );

