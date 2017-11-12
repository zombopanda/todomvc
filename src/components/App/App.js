import React, {Component} from 'react';
import './App.css';
import todoStore from '../../stores/TodoStore'
import {observer} from "mobx-react"
import TodoItem from "../TodoItem/TodoItem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


@observer
export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <div>
          <Header/>
          <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul className="todo-list">
              {todoStore.filteredTodos.map(todo =>
                <TodoItem key={todo.id} todo={todo}/>
              )}
            </ul>
          </section>
          {todoStore.todos.length > 0 && <Footer/>}
        </div>
      </section>
    );
  }
}
