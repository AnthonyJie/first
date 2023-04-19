import 'normalize.css'
import { Component } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'

let active = 0

class Person extends Component {
  constructor() {
    super()
    this.state = {
      msg: 0,
    }
    this.arr = [
      { id: 1, name: '推荐' },
      { id: 2, name: '一人套餐' },
      { id: 3, name: '西贝凉菜' },
      { id: 4, name: '西贝热菜' },
      { id: 5, name: '杂粮主食' },
    ]
  }

  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        <button onClick={this.addCount}>访问msg</button>
        <ul>
          {this.arr.map((item, index) => (
            <li
              onClick={() => this.handleClick(index)}
              className={`${index === 0 ? 'first' : ''} ${
                active === index ? 'active' : ''
              } children`}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </>
    )
  }
  handleClick(i) {
    active = i
    console.log(i, active)
    const before = document.querySelector('.active')
    before.classList.remove('active')
    const selection = document.querySelectorAll('.children')[i]
    selection.classList.add('active')
  }

  addCount = () => {
    // this.state.msg += 1
    console.log(this.state.msg)
  }
}

const root = createRoot(document.querySelector('#root'))

root.render(<Person></Person>)
