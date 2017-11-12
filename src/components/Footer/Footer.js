import React, {Component} from 'react';
import todoStore from '../../stores/TodoStore'
import {observer} from "mobx-react";


@observer
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" >
        <span className="todo-count">
          <strong>{todoStore.todosLeft}</strong>
          <span> items left</span>
        </span>
        <ul className="filters" >
        </ul>
      </footer>
    );
  }
}
