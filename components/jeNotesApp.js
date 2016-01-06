import React from 'react';
import Jenotesheader from './jeNotesHeader';
import Jelanding from './landing/jeLanding';
import Jenotes from './notes/jeNotes';
import Jetodos from './todos/jeTodos';
import {default as Router, Route } from 'react-router';

let RouteHandler = Router.RouteHandler;


let jeNotesApp = React.createClass({
	render: function() {
		let myClass = `jeNotesApp ${this.props.myroute.substr(1,this.props.myroute.length-1)}`;
		return <div className={myClass}>
			<Jenotesheader />
			<RouteHandler />
		</div>
	}
});

export let routes = <Route handler={jeNotesApp}>
				<Route path="/" handler={Jelanding} />
				<Route path="notes" handler={Jenotes} />
				<Route path="todos" handler={Jetodos} />
			</Route>;

export default jeNotesApp;