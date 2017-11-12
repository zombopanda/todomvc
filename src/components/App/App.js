import React, {Component} from 'react';
import './App.css';
import todoStore from '../../stores/TodoStore'
import {observer} from "mobx-react"
import TodoItem from "../TodoItem/TodoItem";


@observer
export default class App extends Component {
  onKeyDown(e) {
    if (e.keyCode === 13) {
      todoStore.addTodo(todoStore.newTodo);
      todoStore.newTodo = '';
    }
  }

  onChange(e) {
    todoStore.newTodo = e.target.value;
  }

  render() {
    return (
      <section className="todoapp">
        <div>
          <header className="header"><h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?"
                   onKeyDown={this.onKeyDown}
                   onChange={this.onChange}
                   value={todoStore.newTodo}
            />
          </header>
          <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul className="todo-list">
              {todoStore.todos.map(todo =>
                <TodoItem key={todo.id} todo={todo}/>
              )}
            </ul>
          </section>
        </div>
      </section>
    );
  }
}
