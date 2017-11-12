import React, {Component} from 'react';
import todoStore from '../../stores/TodoStore'
import {observer} from "mobx-react"


@observer
export default class Header extends Component {
  onKeyDown(e) {
    if (todoStore.newTodo && e.keyCode === 13) {
      todoStore.addTodo(todoStore.newTodo);
      todoStore.newTodo = '';
    }
  }

  onChange(e) {
    todoStore.newTodo = e.target.value;
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?"
               onKeyDown={this.onKeyDown}
               onChange={this.onChange}
               value={todoStore.newTodo}
        />
      </header>
    );
  }
}
