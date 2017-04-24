import _ from "lodash";
import {
  ADD_TODO,
  REMOVE_TODO,
} from "./TodoActions";
const DEFAULT_STATE = {
  todos: []
}

export default (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      const last = _.findLast(state.todos);
      const id = last ? last.id + 1 : 0;
      const todo = { id, description: action.description, completed: false };
      return { ...state, todos: [...state.todos, todo ] };

    case REMOVE_TODO:
      let todos = _.filter(state.todos, todo => todo.id !== action.id );
      return { ...state, todos };
    default:
      return state;
  }
}
