/**
 * In Redux, all the application state is stored as a single object. 
 * 
 * The reducer is a pure function that takes the previous state and an action, and returns the next state.
 * (previousState, action) => newState
 * 
 * It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue).
 * Note: it's very important that the reducer stays pure. Things you should never do inside a reducer: 
 *  - Mutate its arguments,
 *  - Perform side effects like API calls and routing transitions
 *  - Call non-pure functions e.g. Date.now() or Math.random().
 * 
 * More succintly, give the same arguments, it should calculate the next state and return it. No surprises. No side effects. 
 * No API calls. No mutations. Just a calculation.
 */

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FITLER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;
import { combineReducers } from 'redux';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

/**
 * Creating reducer functions that know how to update a slice of the app state is called 
 * 'reducer composition' and it's a fundamental pattern of building Redux apps.
 * 
 * Note that each of these reducers is managing its own part of the global state. The state 
 * paramter is differnet for every reducer, and corresponds to the part of the state it manages.
 */

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO: 
      return [
       ...state,
      {
        text: action.text,
        completed: false
      }
    ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      })
    default:
      return state;  
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FITLER:
      return action.filter;
    default: 
      return state;  
  }
}



/*
The function below is the same as: 

function todoApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

All combine reducers does is generate a function that calls your reducers with the slices of state 
selected according to their keys, and combining their results into a single object again.
*/

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;