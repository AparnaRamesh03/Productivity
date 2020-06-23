import React from 'react'
import './Home.css';
import  slide1 from './slide1.png';
import  slide2 from './slide2.png';
import  slide3 from './slide3.png';
import {Slide} from 'react-slideshow-image';

const slideImages=[
    slide1,slide2,slide3
];

const properties={
    duration : 5000,
    transitionDuration:500,
    infinite:true,
    indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
class Home extends React.Component {
    render () {
        return (
            <div > <h1>HOME</h1>
            <hr />
            <div className="a">
            <p >Using this,one can set a To-Do-List for a week and set daily lists too.A stopwatch as well as an alarm is available.</p>
            <p >This has been developed on the notion of what I would like to have in my to-do checklist.</p>
            </div>
            <br/>
            <div className="b">
                <p>A list of what can be done.</p>
                <p>We have a clock that can give you remainders when needed</p>
                <p>There is a StopWatch feature that can be used to figure out how much time has been used precisely.</p>
                <p>Use according to the requirement of your choice. :D</p>
            </div>
            <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
            </div>

        )
    }
}

export default Home;