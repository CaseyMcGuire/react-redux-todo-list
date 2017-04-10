
/**
 * Actions are payloads of information that send data from your application to your store. They are
 * the *only* source of information for the store. You send them to the store using store.dispatch().
 * 
 * Actions are plain JavaScript objects. Actions must have a type property that indicates the type of 
 * action being performed. Types should typically be defined as string constants. 
 * 
 * Other than type, the structure of an action object is really up to you.
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL : 'SHOW_ALL',
  SHOW_COMPLETED : 'SHOW_COMPLETED',
  SHOW_ACTIVE : 'SHOW_ACTIVE'
}

/**
 * Action creators are exactly that -- functions that create actions.
 * 
 * In Redux action creators simply return an action:
 */
let nextTodoId = 0;
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleTodo(index) {
  return { 
    type: TOGGLE_TODO, 
    index
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER, 
    filter
  }
}