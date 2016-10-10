import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: "hello"
    }
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    var { inputValue } = this.state
    return (
      <div>
        <input type="text" value={inputValue} onChange={this.handleChange.bind(this)}/>
        <h4>{inputValue}</h4>
      </div>
    )
  }
}

export default MyForm