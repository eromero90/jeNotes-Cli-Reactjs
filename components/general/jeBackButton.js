import React from 'react';
import {Navigation} from 'react-router';

let jeBackButton = React.createClass({

	mixins: [Navigation],

	render: function() {
		return <section className="back-button" onClick={() => this.transitionTo("/")}>
					BACK
				</section>;
	}
});

export default jeBackButton;