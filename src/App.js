import React, { Component } from 'react';
import Form from './Form';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        res.length = 20;

        this.setState(state => ({
          todos: this.state.todos.concat(res)
        }))
      })
      .catch(e => {
        console.warn(`Errors with API: ${e.code} ${e.message}`);
      });
  }

  removeItem = index => {
    const todos = this.state.todos.filter((todo, i) => {
      return i !== index;
    });

    this.setState({
      todos: todos
    });
  }

  addItem = item => {
    this.setState(state => ({
      todos: [...state.todos, item]
    }));
  }

  checkItem = index => {
    const todos = this.state.todos.slice();

    todos[index].isChecked = !todos[index].isChecked;
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div>
        <Form 
          addItem={this.addItem}
        />
        <ToDoList 
          todos={this.state.todos}
          removeItem={this.removeItem}
          checkItem={this.checkItem}
        />
      </div>
    );
  }
}

export default App;
