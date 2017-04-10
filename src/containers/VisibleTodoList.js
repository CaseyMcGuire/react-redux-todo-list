import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

/**
 * Technically, a container component is just a React component that uses store.subscribe()
 * to read a part of the Redux state tree and supply props to a presentational component it 
 * renders. You could write a container component by hand, but we suggest instead generating
 * container components with the React Redux's library connect() function, which provides
 * many useful optimizations to prevent unnecessary re-renders. 
 * 
 * To use connect(), you need to define a special function called mapStateToProps that tells 
 * how to transform the current Redux store state into the props you want to pass to a
 * presentational component you are wrapping.
 * 
 * For example, VisibleTodoList needs to calculate todos to pass to the TodoList, so we define
 * a function that filters the state.todos according to the state.visibilityFilter, and use it
 * in its mapStateToProps.
 */

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL': 
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

/**
 * In addition to reading the state, container components can dispatch actions. In a similar 
 * fashion, you can define a function called mapDispatchToProps() that receives the dispatch()
 * method and returns callback props that you want to inject into the presentational component.
 * 
 * For example, we want the VisibleTodoList to inject a prop called onTodoClick into the TodoList 
 * component, and we want onTodoClick to dispatch a TOGGLE_TODO action: 
 */

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      console.log(id);
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;