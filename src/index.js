import ReactDom from 'react-dom'

import { Component } from 'react'

// 类组件必须继承component构造函数

// 必须要写render方法 且一定要有返回值

class Hello extends Component {
  render() {
    return <h1>hello world</h1>
  }
}

const element = (
  <>
    <div>
      <Hello></Hello>
    </div>
  </>
)

ReactDom.render(element, document.querySelector('#root'))
