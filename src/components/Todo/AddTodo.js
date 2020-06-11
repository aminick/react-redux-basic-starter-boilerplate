import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/todos';

export const AddTodo = (props) => {
  const [todo, setTodo] = useState('');
  const { addTodo } = props;

  const handleClick = () => {
    setTodo('');
    addTodo(todo);
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="button" onClick={handleClick}>
        add
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDisaptchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDisaptchToProps)(AddTodo);
