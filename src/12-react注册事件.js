import ReactDom from 'react-dom'
import 'normalize.css'
import { Component } from 'react'
// import { Component } from 'react'

class Person extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'msg778',
    }
  }
  render() {
    return (
      <>
        <i>{this.state.msg}</i>
        <button onClick={this.addCount}>+1</button>
        <a onClick={this.addCount} href="https://www.baidu.com">
          6
        </a>
      </>
    )
  }
  addCount(e) {
    e.preventDefault()
    console.log(e)
  }
}

ReactDom.render(<Person></Person>, document.getElementById('root'))
