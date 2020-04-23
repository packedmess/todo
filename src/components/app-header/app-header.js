import React from 'react';

import './app-header.css';

const AppHeader = (props) => {
  return (
    <div className="app-header">
      <h1 className="app-header__title">Tasker</h1>
      <p className="app-header__counter">В очереди: {props.toDo} Выполнено: {props.done}</p>
    </div>
  );
};

export default AppHeader;