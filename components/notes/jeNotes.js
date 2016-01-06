import React from 'react';

let jeNotes = React.createClass({
	render: function() {
		if(this.state){
			return <section className="jeNotes">Notes</section>;
		} else {
			return <section className="jeNotes">
				<div><i className="fa fa-sticky-note-o"></i></div>
				<span>There are no notes</span>
			</section>;
		}
	}
});

export default jeNotes;