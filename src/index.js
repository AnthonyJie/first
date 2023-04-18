import ReactDom from 'react-dom'

import 'normalize.css'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div>
        <h1>我是跟组件</h1>
        <h2>count: {this.state.count}</h2>
      </div>
    )
  }
}

const element = (
  <>
    <App></App>
  </>
)

ReactDom.render(element, document.querySelector('#root'))
