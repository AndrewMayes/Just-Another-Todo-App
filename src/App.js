import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';

export default class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        content: 'Go shopping',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        content: 'Buy new shoes',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        content: 'Make dinner',
        isCompleted: false
      }
    ]
  }

  addTodo = content => {
    const newTodo = {
      id: uuid.v4(),
      content,
      isCompleted: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} toggleComplete={this.toggleComplete}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}

