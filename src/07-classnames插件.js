import './index.css'
import ReactDom from 'react-dom'
// import classnames from 'classnames'
import 'normalize.css'

// const isRed = true

// const isGreen = true

class Person {
  constructor() {
    this.name = '刘伟'
  }
  sayHi() {
    console.log(666)
  }
}

class jicheng extends Person {
  constructor() {
    super()
    this.age = 20
  }
}

const xiaoming = new jicheng()
console.log(xiaoming)
const list = [
  { id: 1, name: '刘德华', content: '给我一杯忘情水' },
  { id: 2, name: '黎明', content: '666' },
  { id: 3, name: '郭富城', content: '我测你的吗' },
  { id: 4, name: '张学友', content: '也是拉尼' },
]

const render = () => {
  if (list.length <= 0) return <h3>暂无数据</h3>
  return list.map((item) => (
    <li key={item.id}>
      <h3 style={{ backgroundColor: 'pink' }}>{item.name}</h3>
      <span>{item.content}</span>
    </li>
  ))
}

// const fn = (obj) =>
//   Object.keys(obj)
//     .filter((item) => obj[item])
//     .join(' ')

const element = (
  <>
    <ul>{render()}</ul>
  </>
)

ReactDom.render(element, document.querySelector('#root'))
