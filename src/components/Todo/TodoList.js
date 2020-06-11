import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions/todos';
import { SHOW_TODO, SHOW_COMPLETED } from '../../redux/constants/filterTypes';

export const TodoList = (props) => {
  const { todos, filter } = props;
  const { toggleTodo } = props;

  const filterByType = (filterType) => (v) => {
    switch (filterType) {
      case SHOW_TODO:
        return !v.completed;
      case SHOW_COMPLETED:
        return v.completed;
      default:
        return true;
    }
  };

  return (
    <ul>
      {todos.filter(filterByType(filter)).map((v, i) => {
        return (
          <li
            className={v.completed ? 'todo-completed' : ''}
            key={v.todo}
            onClick={() => toggleTodo(i)}
          >
            {v.todo}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
});

const mapDisaptchToProps = {
  toggleTodo,
};

export default connect(mapStateToProps, mapDisaptchToProps)(TodoList);
