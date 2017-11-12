import React, {Component} from 'react';
import todoStore from '../../stores/TodoStore'
import cn from "classnames"
import {observer} from "mobx-react"


@observer
export default class TodoItem extends Component {
  onKeyDown(e, todo) {
    if (e.keyCode === 13) {
      todo.editing = false
    }
  }

  onChange(e, todo) {
    todo.title = e.target.value;
  }

  destroy(todo) {
    todoStore.destroyTodo(todo);
  }

  complete(todo) {
    todo.completed = !todo.completed;
  }

  onDoubleClick(todo) {
    todo.editing = true;
  }

  render() {
    const {todo} = this.props;

    return (
      <li className={cn({'completed': todo.completed, 'editing': todo.editing})}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => this.complete(todo)}/>
          <label onDoubleClick={() => this.onDoubleClick(todo)}>{todo.title}</label>
          <button className="destroy" onClick={() => this.destroy(todo)}/>
        </div>
        <input className="edit"
               onChange={e => this.onChange(e, todo)}
               onKeyDown={e => this.onKeyDown(e, todo)}
               value={todo.title}/>
      </li>
    );
  }
}
