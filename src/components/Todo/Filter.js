import React from 'react';
import { toggleFilter } from '../../redux/actions/todos';
import {
  SHOW_ALL,
  SHOW_TODO,
  SHOW_COMPLETED,
} from '../../redux/constants/filterTypes';
import { connect } from 'react-redux';

const Filter = (props) => {
  const { toggleFilter } = props;
  const handleClick = (type) => {
    toggleFilter(type);
  };

  return (
    <div>
      <button type="button" onClick={() => handleClick(SHOW_ALL)}>
        all
      </button>
      <button type="button" onClick={() => handleClick(SHOW_TODO)}>
        todo
      </button>
      <button type="button" onClick={() => handleClick(SHOW_COMPLETED)}>
        completed
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  toggleFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
