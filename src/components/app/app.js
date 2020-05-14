import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';

class App extends Component {

  constructor() {
    super();

    //Создание элемента

    this.maxId = 1;

    this.createItem = (label) => {
      return {
        label: label,
        done: false,
        important: false,
        id: this.maxId ++
      };
    };

    //Удаление элемента

    this.deleteItem = (id) => {
      this.setState((state) => {
        const newTodoData = state.todoData.filter((item) => item.id !== id);

        return {
          todoData: newTodoData
        };
      });
    };

    //Добавление элемента

    this.addItem = (text) => {

      const newItem = this.createItem(text);

      this.setState((state) => {
        const newArray = [
          ...state.todoData,
          newItem
        ];
        
        return {
          todoData: newArray
        };
      });
    };

    //Отображение статуса элемента

    this.onToggleImportant = (id) => {
      this.setState((state) => {
        const idx = state.todoData.findIndex((item) => item.id === id);

        const oldItem = state.todoData[idx];

        const newItem = {...oldItem, important: !oldItem.important};

        const newArray = [
          ...this.state.todoData.slice(0, idx),
          newItem,
          ...this.state.todoData.slice(idx + 1)
        ];
        
        return {
          todoData: newArray
        };
      });  
    };

    this.onToggleDone = (id) => {

      this.setState((state) => {
        const idx = state.todoData.findIndex((item) => item.id === id);

        const oldItem = state.todoData[idx];

        const newItem = {...oldItem, done: !oldItem.done};

        const newArray = [
          ...this.state.todoData.slice(0, idx),
          newItem,
          ...this.state.todoData.slice(idx + 1)
        ];
        
        return {
          todoData: newArray
        };
      }); 
    };

    //Данные

    this.state = {
      todoData: [
        this.createItem('Записаться к врачу'),
        this.createItem('Приготовить ужин'),
        this.createItem('Назначить встречу')
      ],
      term: '',
      filter: 'all'
    };

    //Поиск

    this.onSearchChange = (term) => {
      this.setState({
        term: term
      });
    };

    this.search = (items, term) => {
      if (term.length === 0) {
        return items;
      };

      return (
          items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
          })
        );
    };

    //Фильтр

    this.onFilterChange = (filter) => {
      this.setState({
        filter: filter
      });
    };

    this.filter = (items, filter) => {
      switch (filter) {
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => item.done === false);
        case 'done':
          return items.filter((item) => item.done === true);
        default:
          return items;
      }
    };
  }

  render() {
    const visibleItems = this.filter(this.search(this.state.todoData, this.state.term), this.state.filter);
    const doneCount = this.state.todoData.filter((item) => item.done === true).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">

        <AppHeader toDo={ todoCount } done={ doneCount } />

        <div className="top-panel">
          <SearchPanel 
            onSearchChange={ this.onSearchChange}
          />
          <ItemStatusFilter 
            filter={ this.state.filter }
            onFilterChange={ this.onFilterChange }
          />
        </div>

        <TodoList 
          filter={ this.state.filter }
          todos={ visibleItems }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone } 
        />

        <ItemAddForm 
          onItemAdded={ this.addItem } 
        />

      </div>
    );
  };

  
};

export default App;