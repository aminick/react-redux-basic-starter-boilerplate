import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from '../constants/actionTypes';
import { SHOW_ALL } from '../constants/filterTypes';

const initialState = {
  filter: SHOW_ALL,
  todos: [],
};

function todo(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.filter,
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            todo: action.text,
            completed: false,
          },
        ],
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((v, i) =>
          i === action.index ? { ...v, completed: !v.completed } : v
        ),
      });
    default:
      return state;
  }
}

export default todo;
