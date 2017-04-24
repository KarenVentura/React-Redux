import { connect } from "react-redux";

import Todo from "./Todo";
import { removeTodo } from "./TodoActions";

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveTodo: id => dispatch(removeTodo(id))
  }
}

const TodoContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;
