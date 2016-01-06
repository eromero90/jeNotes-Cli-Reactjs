import React from 'react';
import Jebutton from './jeButton';

let jeLanding = React.createClass({
	render: function() {
		return <section className="jeLanding">
					<Jebutton buttonTitle="NOTES" icon="fa-sticky-note-o" open="/notes"/>
					<Jebutton buttonTitle="TO DO" icon="fa-list-ul" open="/todos"/>
			</section>;
	}
});

export default jeLanding;