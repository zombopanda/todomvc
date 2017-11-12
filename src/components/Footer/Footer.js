import React, {Component} from 'react';
import todoStore from '../../stores/TodoStore'
import {observer} from "mobx-react";
import cn from "classnames"


@observer
export default class Footer extends Component {
  setFilter(e, filter) {
    e.preventDefault();
    todoStore.filter = filter;
  }

  render() {
    return (
      <footer className="footer" >
        <span className="todo-count">
          <strong>{todoStore.todosLeft}</strong>
          <span> items left</span>
        </span>
        <ul className="filters" >
          <li><a href="#" className={cn({"selected": todoStore.filter === 'all'})} onClick={e => this.setFilter(e, 'all')}>All</a></li>
          <span> </span>
          <li><a href="#" className={cn({"selected": todoStore.filter === 'active'})} onClick={e => this.setFilter(e, 'active')}>Active</a></li>
          <span> </span>
          <li><a href="#" className={cn({"selected": todoStore.filter === 'completed'})} onClick={e => this.setFilter(e, 'completed')}>Completed</a></li>
        </ul>
      </footer>
    );
  }
}
