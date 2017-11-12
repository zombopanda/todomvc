import {observable, computed} from "mobx"
import uuid from "uuid/v1"

class TodoStore {
  @observable newTodo = '';
  @observable todos = [];

  addTodo(title) {
    this.todos.push({
      id: uuid(),
      title,
      completed: false
    });
  }

  destroyTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  @computed get todosLeft() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}

export default new TodoStore();
export {TodoStore};
