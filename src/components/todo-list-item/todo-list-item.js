import React from 'react';

import './todo-list-item.css';

const TodoListItem = (props) => {

    let itemClassNames = 'todo-list-item';
    let ButtonClassNames = 'todo-list-item__button';

    if (props.done === true) {
        itemClassNames += ' todo-list-item--done';
      };

    if (props.important === true) {
        itemClassNames += ' todo-list-item--important';
        ButtonClassNames += ' button--important';
      };

    return (
      <span className={ itemClassNames }>
        <span
          className="todo-list-item__label"
          onClick={ props.onToggleDone }
        >
          {props.label}
        </span>

        <button type="button" title="Приоритет"
          className={ ButtonClassNames } 
          onClick={ props.onToggleImportant }
        >
          <i className="todo-list-item__icon material-icons">info</i>
        </button>

        <button type="button" title="Удалить"
          className="todo-list-item__button button--delete"  
          onClick={ props.onDeleted }
        >
          <i className="todo-list-item__icon material-icons">delete</i>
        </button>
      </span>
    );
};

export default TodoListItem;