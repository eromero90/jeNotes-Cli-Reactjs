import React from 'react';
import Jebackbutton from './general/jeBackButton';

let jeNotesHeader = React.createClass({
	render: function() {
		return <header>
				<nav>
					<Jebackbutton></Jebackbutton>
					jeNotes React
					<i className="fa fa-cog"></i>
				</nav>
				<section>
					<div><i className="fa fa-file-text-o"></i></div>
					<div>jeNotes React</div>
					<div>Designed to keep essential notes on-hand</div>
				</section>
			</header>;
	}
});

export default jeNotesHeader;