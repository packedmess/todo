import React, { Component } from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {

	constructor() {
		super();

		this.buttons = [
			{
				name: 'all',
				label: 'Все'
			},
			{
				name: 'active',
				label: 'Активные'
			},
			{
				name: 'done',
				label: 'Завершенные'
			}
		]
	};

	render() {
		
			const buttons = this.buttons.map((item) => {

				let ButtonClassNames = 'item-status-filter__button';

				if (this.props.filter === item.name) {
			        ButtonClassNames += ' button--active';
			      };

				return (
      				<button type="button" 
      					className={ ButtonClassNames }
      					key={ item.name }
      					onClick={ () => this.props.onFilterChange(item.name) }
      				>{ item.label }</button>
    			);
			});

		return (
		    <div className="item-status-filter">
		      { buttons }
		    </div>
  );
	}
}

export default ItemStatusFilter;