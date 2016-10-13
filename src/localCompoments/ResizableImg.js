import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';
import logo from '../logo.svg';

class ResizableImg extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: 100
    }
  }

  handleClick(delta) {
    if((this.state.height+delta) >= 20) {
      this.setState({
        height: this.state.height + delta
      })
    }
  }

  render() {
    var { height } = this.state
    var localStyle = {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'red'
    }
    return (
      //<div style={localStyle}>
      <div  >
        <Button bsStyle="danger" onClick={this.handleClick.bind(this, -20)}>-</Button>
        <Button bsStyle="success" onClick={this.handleClick.bind(this, 20)}>+</Button>
        <br />
        <img src={logo} height={height}/>
      </div>
    )
  }
}

export default ResizableImg