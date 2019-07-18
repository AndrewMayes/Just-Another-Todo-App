import React, { Component } from 'react';


export default class Todo extends Component {

  toggleStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, content } = this.props.todo
    return (
      <div style={this.toggleStyle()}>
        <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>
        {content}
        <button style={btn} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
      </div>
    )
  }
}

const btn = {
  float: 'right'
}
