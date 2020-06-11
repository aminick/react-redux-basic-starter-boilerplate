import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from '../constants/actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index,
});

export const toggleFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
