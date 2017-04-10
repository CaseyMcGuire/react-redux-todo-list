import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
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
 * 
 * The data lifecycle in any Redux app follow these 4 steps: 
 *  1) You call store.dispatch(action)
 *       - An action is a plain object describing what happened.
 *  2) The Redux store calls the reducer function you gave it.
 *       - The store will pass two arguments to the reducer: the current the current state tree 
 *         and the action.
 *  3) The root reducer may combine the output of multiple reducers into a single state tree
 *  4) The Redux store saves the complete state tree returned by the root reducer.
 *       - This new tree is now the next state of your app! Every listener registered with 
 *         store.subscribe(listener) will now be invoked; listeners may call store.getState() to
 *         get the current state.
 */
let store = createStore(todoApp);

/**
 * All container components need access to the Redux store so they can subscribe to it. One option
 * would be to pass it as a prop to every container component. However, it gets tedious, as you
 * have to wire store even through presentational components just because they happen to render 
 * a container deep in the component tree. 
 * 
 * The option we recommend is to use a special React Redux component called <Provider> to magically
 * make the store available to all container components in the application without passing it 
 * explicitly. You only need to use it once when you render the root component. 
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
