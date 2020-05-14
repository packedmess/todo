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
  
  if (props.todos.length === 0) {
    let label = 'Нет задач';

    switch (props.filter) {
      case 'active':
        label = 'Нет активных задач';
        break;
      case 'done':
        label = 'Нет завершенных задач';
        break;
      };

    return <div className="todo-list--empty">{ label }</div>
  };
  
  return (
    <ul className="todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;