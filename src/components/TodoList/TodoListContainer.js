import { connect } from "react-redux";

import TodoList from './TodoList';
import { addTodo } from './TodoActions';

const mapStateToProps = (state) => {
  return {
    todos: state.TodoReducer.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: description => dispatch(addTodo(description))
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
