import React from 'react';
import { Router } from '@reach/router'
import Todo from './pages/Todo.jsx'
import Alarm from './pages/Alarm.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog from './pages/Blog.jsx'
import Home from './pages/Home.jsx'
import Calendar from './pages/Calendar.jsx'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import logo from './logo.svg';
import './App.css';

function App() {
	const navLinks = [
		{
            text: 'Home',
			path: '/',
			icon: 'ion-ios-home'
		},
		{
			text: 'Alarm',
			path: '/Alarm',
			icon: 'ion-ios-alarm'
		},
		{
			text: 'Todo',
			path: '/Todo',
			icon: 'ion-ios-watch'
		},
		// {
		// 	text: 'Blog',
		// 	path: '/blog',
		// 	icon: 'ion-ios-stopwatch'
		// },
		{
			text: 'Portfolio',
			path: '/portfolio',
			icon: 'ion-ios-clock'
        },
        {
			text: 'Calendar',
			path: '/Calendar',
			icon: 'ion-ios-calendar'
		}
	]

	return (
		<div className="App">
			<ResponsiveNavigation
				navLinks={ navLinks }
				logo={ logo }
				background="#fff"
				hoverBackground="#ddd"
				linkColor="#777"
			/>
			<Router>
				<Alarm path="/Alarm" />
				<Home path="/" />
				<Portfolio path="/portfolio" />
				{/* <Blog path="/blog" /> */}
				<Todo path="/Todo" />
                <Calendar path="/Calendar" />
			</Router>
		</div>
	);
}
export default App;
