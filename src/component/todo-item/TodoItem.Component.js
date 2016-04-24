import React from 'react';
require('./TodoItem.Component.scss');

export default class TodoItemComponent extends React.Component {
  render() {
    let doneClass = this.props.todoItem.done ? 'todo-item--is-done' : '';
    return (
        <div className="todo-item">
          <span className={doneClass}>{this.props.todoItem.text}</span>

          <button onClick={this.props.toggle}>Toggle</button>
        </div>
    )
  }
}

TodoItemComponent.propTypes = {
  todoItem: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.func.isRequired
};