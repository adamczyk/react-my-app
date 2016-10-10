import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var TABLE_CONTENT = [
     {title: "Audi", subTitle: "A6"},
     {title: 'VW', subTitle: "Passat"},
     {title: 'Ferrari', subTitle: "456 Italia"}
    ]

    return (
      <div>
        <h1>Hello, World!</h1>
        <ListOfItems tableContent={TABLE_CONTENT} />
        <MyForm />
        <ResizableImg />
      </div>
    );
  }
}

export default App;

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
      <div>
        <Button bsStyle="danger" onClick={this.handleClick.bind(this, -20)}>-</Button>
        <Button bsStyle="success" onClick={this.handleClick.bind(this, 20)}>+</Button>
        <br />
        <img src={logo} height={height}/>
      </div>
    )
  }
}

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

class ListOfItems extends Component {
  render() {
    return (
      <ul>
          {this.props.tableContent.map((result, i) => (
            <Item key={i} title={result.title} subTitle={result.subTitle} />
          ))}
      </ul>
    )
  }
}
ListOfItems.propTypes = {
  tableContent: React.PropTypes.array
}

class Item extends Component {
  render() {
    return (
      <li>
        <h2>{this.props.title}</h2>
        <h4>{this.props.subTitle}</h4>
      </li>
    )
  }
}
Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired
}
Item.defaultProps = {
  title: "Title",
  subTitle: "SubTitle"
}
