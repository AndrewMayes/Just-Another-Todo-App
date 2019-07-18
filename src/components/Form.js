import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    content: ''
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: ''
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="content" placeholder="Add Todo..." value={this.state.content} onChange={this.onChange}/>
          <input className="btn" type="submit" value="Submit!"/>
        </form>
      </div>
    )
  }
}
