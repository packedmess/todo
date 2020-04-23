import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
	constructor() {
		super();

		this.state = {
			term: ''
		};

		this.onSearchChange = (event) => {
			this.setState({
				term: event.target.value
			});
			this.props.onSearchChange(event.target.value);
		};
	};

	render() {
	  return (
	  	<div className="search-panel">
	    	<input className="search-panel__input" type="text" name="search" placeholder="" 
	    		onChange={ this.onSearchChange }
	    		value={ this.state.term }
	    	/>
	    	<label className="search-panel__label" htmlFor="search"><i className="material-icons">search</i></label>
	    </div>
	  );
	};
};

export default SearchPanel;