import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = (props) => {
  
  const elements = props.todos.map((item) => {
    return (
      <li key={item.id}>
        <TodoListItem 
          label={ item.label } 
          important={ item.important }
          done={ item.done }
          onDeleted={ () => props.onDeleted(item.id) }
          onToggleDone={ () => props.onToggleDone(item.id) }
          onToggleImportant={ () => props.onToggleImportant(item.id) }
        />
      </li>
    );
  });

  return (
    <ul className="todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;