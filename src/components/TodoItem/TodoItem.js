import React, {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    const {todo} = this.props;

    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{todo.title}</label>
          <button className="destroy"/>
        </div>
        <input className="edit" onChange={e => this.onChange(e)} value={todo.title}/>
      </li>
    );
  }
}
