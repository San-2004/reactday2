import React, { Component } from 'react'

class App3 extends Component {
  state = { name: "Santhosh", age: 20, address: "Hyd" }
  render() {
    const { name, age, address } = this.state;
    return (
      <div>
        <h1>Name:{name} <hr />
          Age:{age}<hr />
          Address:{address}
        </h1>
      </div>
    )
  }
}


export default App3;
