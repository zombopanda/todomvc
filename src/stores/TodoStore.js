import {observable, computed} from "mobx"
import uuid from "uuid/v1"

class TodoStore {
  @observable newTodo = '';
  @observable todos = [];
  @observable filter = 'all';

  addTodo(title) {
    this.todos.push({
      id: uuid(),
      title,
      completed: false,
      editing: false
    });
  }

  destroyTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  @computed get filteredTodos() {
    return this.todos.filter(todo => {
      let match = true;

      if (this.filter === 'completed') {
        match = todo.completed;
      }

      if (this.filter === 'active') {
        match = !todo.completed;
      }

      if (this.newTodo) {
        match = match && todo.title.match(this.newTodo);
      }

      return match;
    });
  }

  @computed get todosLeft() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}

export default new TodoStore();
export {TodoStore};
