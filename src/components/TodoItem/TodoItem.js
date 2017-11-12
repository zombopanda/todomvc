import React, {Component} from 'react';
import todoStore from '../../stores/TodoStore'
import cn from "classnames"
import {observer} from "mobx-react"


@observer
export default class TodoItem extends Component {
  onChange(e) {

  }

  destroy(todo) {
    todoStore.destroyTodo(todo);
  }

  complete(todo) {
    todo.completed = !todo.completed;
  }

  render() {
    const {todo} = this.props;

    return (
      <li className={cn({'completed': todo.completed})}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => this.complete(todo)}/>
          <label>{todo.title}</label>
          <button className="destroy" onClick={() => this.destroy(todo)}/>
        </div>
        <input className="edit" onChange={e => this.onChange(e)} value={todo.title}/>
      </li>
    );
  }
}
