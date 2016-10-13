import React, { Component } from 'react'

import Button from 'react-bootstrap/lib/Button'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'

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
        <IndexLink to="/"><Button>home</Button></IndexLink>
        <Link to="first"><Button>first</Button></Link>
        <Link to="second"><Button>second</Button></Link>
        <div>
          {this.props.children}
        </div>
      </div>
    );
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


export default App;