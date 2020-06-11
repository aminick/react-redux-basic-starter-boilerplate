import { createStore, compose } from 'redux';
import todos from '../reducers/todos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todos, undefined, composeEnhancers());

export default store;
