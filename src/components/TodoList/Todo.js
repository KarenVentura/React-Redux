import React, { Component, PropTypes } from "react";

class Todo extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo() {
    this.props.onRemoveTodo(this.props.id);
  }

  render() {
    const { description, id } = this.props;

    return (
      <li className={`item item-${id}`}>
        { description }
        <button onClick={this.removeTodo }>x</button>
      </li>
    );
  }
}

export default Todo;
