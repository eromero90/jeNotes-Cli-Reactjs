import React from 'react';
import {default as Jenotesapp, routes} from './jeNotesApp';
import Router from 'react-router';

Router.run(routes, Router.HashLocation, (Root, state) => {
	React.render(<Root myroute={state.path}/>,
	document.getElementById('app'));
});