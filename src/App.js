import React, { Component } from 'react';
import MyForm from './localCompoments/MyForm';
import ResizableImg from './localCompoments/ResizableImg';

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
