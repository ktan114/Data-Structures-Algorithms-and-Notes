import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: "", 
    }
  }

  handleClear = (e) => {
    this.setState({ input: "" });
  }

  inputText = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value })
  }

  render() { 
    return ( 
      <div>
        <h1> User Input </h1>
        <input 
        type = "text" 
        name = "input" 
        value = { this.state.input }
        placeholder = "Render Some Text"
        onChange = {this.inputText}
        />
        <button onClick = { this.handleClear }>Clear</button>
        <p> { this.state.input } </p>
      </div>
    )
  }
}

export default Input;