import React, { Component } from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {

	constructor() {
		super();

		this.state = {
			label: ''
		};

		this.onLabelChange = (event) => {
			this.setState({
				label: event.target.value
			});
		};

		this.onSubmit = (event) => {
			event.preventDefault();
			this.props.onItemAdded(this.state.label);
			this.setState({
				label: ''
			});
		};
	};

	render() {
	  return (
	    <form className="item-add-form"
	    	onSubmit={ this.onSubmit }
	    >
	    	<input className="item-add-form__input" type="text" placeholder="Новая задача" 
	    		onChange={ this.onLabelChange }
	    		value={ this.state.label }
	    	/>
			<button className="item-add-form__button" type="submit">
			Добавить
			</button>
	    </form>
	  );
	};
};

export default ItemAddForm;