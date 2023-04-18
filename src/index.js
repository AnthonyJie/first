import ReactDom from 'react-dom'
import 'normalize.css'

import Hello from './components/Hello'

import Demo from './components/Demo'
// 类组件必须继承component构造函数

// 必须要写render方法 且一定要有返回值

const element = (
  <>
    <div>
      <Hello></Hello>
      <Demo></Demo>
    </div>
  </>
)

ReactDom.render(element, document.querySelector('#root'))
