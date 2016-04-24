import React from 'react';
import TodoItemComponent from './component/todo-item/TodoItem.Component';
import TodoItem from './domain/TodoItem';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        new TodoItem(1, 'one'),
        new TodoItem(2, 'two'),
        new TodoItem(3, 'three')
      ]
    };
  }

  toggle(todoItem) {
    console.log(todoItem);
  }

  render() {
    return (
        <div>
          <h1>To do</h1>
          <ul>
            {this.state.todoItems.map((todoItem) =>
                    <li key={todoItem.id}>
                      <TodoItemComponent todoItem={todoItem} toggle={this.toggle.bind(this, todoItem)}/>
                    </li>
            )}
          </ul>
        </div>
    );
  }
}
