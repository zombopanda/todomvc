import {observable} from "mobx"
import uuid from "uuid/v1"

class TodoStore {
  @observable newTodo = '';
  @observable todos = [];

  addTodo(title) {
    this.todos.push({
      id: uuid(),
      title
    });
  }
}

export default new TodoStore();
export {TodoStore};
