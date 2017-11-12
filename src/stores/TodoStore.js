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
    if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }

    if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    }

    return this.todos;
  }

  @computed get todosLeft() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}

export default new TodoStore();
export {TodoStore};
