import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <div>
          <header className="header"><h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" value="" />
          </header>
          <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul className="todo-list"></ul>
          </section>
        </div>
      </section>
    );
  }
}
