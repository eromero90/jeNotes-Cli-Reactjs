import React from 'react';
import {Navigation} from 'react-router';

let jeButton = React.createClass({

	mixins: [Navigation],

	render: function() {
		var newClass = `fa ${this.props.icon}`;
		return <article>
					<section onClick={() => this.transitionTo(this.props.open)}>
						<i className={newClass} ></i>
						<div>{this.props.buttonTitle}</div>
					</section>
			</article>;
	}
});

export default jeButton;