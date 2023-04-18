import 'normalize.css'
import { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.addCount()}>+1</button>
      </>
    )
  }

  addCount() {
    console.log(this.state.count)
  }
}

// const element = (
//   <>
//     <App></App>
//   </>
// )

ReactDom.render(<App></App>, document.querySelector('#root'))
