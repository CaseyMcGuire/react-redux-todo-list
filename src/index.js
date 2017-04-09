import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

/**
 * The Store is the object that brings them together. The store has the following
 * responsibilities: 
 *  -Holds application state;
 *  -Allows access to state via getState();
 *  -Allows state to be updated via dispatch(action);
 *  -Registers listeners via subscribe(listener);
 *  -Handles unregistering of listeners via the function returned by subscribe(listener)
 * 
 * It's important to note that you'll only have a single store in a Redux application. When
 * you want to split your data handling logic, you'll use reducer composition instead of many 
 * stores.
 */
let store = createStore(todoApp);

console.log(store.getState())

let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about resources'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
