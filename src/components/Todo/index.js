import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

import './todo.scss';

const Todo = () => {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
};

export default Todo;
