import React, { Component, PropTypes } from "react";
import TodoContainer from "./TodoContainer";
import _ from "lodash";

class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    onAddTodo: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
  }

  addTodo() {
    const description = this.refs.todoDecription.value;
    if (description) this.props.onAddTodo(description);
    this.refs.todoDecription.value = '';
  }

  renderTodos() {
    const { todos } = this.props;
    return todos.map(todo => {
      return <TodoContainer key={todo.id } {...todo }/>
    });
  }

  render() {
    return (
      <div>
        <input type="text" ref="todoDecription"/>
        <button onClick={this.addTodo}> Add Todo</button>
        <ul>
          { this.renderTodos() }
        </ul>
      </div>
    );
  }

}

export default TodoList;
