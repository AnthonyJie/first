import { useState } from 'react'
import './index.scss'
import classNames from 'classnames'

// 数据
const defaultTodos = [
  { id: 1, text: '学习react', done: false },
  { id: 2, text: '休息', done: true },
  { id: 3, text: '吃饭', done: false },
]

// 内容组件
const Todo = ({ item, changeFlag }) => {
  return (
    <div className={classNames('todo', { 'todo-done': item.done })}>
      <div onClick={() => changeFlag(item.id, 'change')}>{item.text}</div>
      <button onClick={() => changeFlag(item.id, 'del')}>X</button>
    </div>
  )
}

const App = () => {
  // 数据由父组件来提供
  const [list, setList] = useState(defaultTodos)
  const changeFlag = (id, type) => {
    if (!id) return
    if (type === 'change') {
      setList(
        list.map((item) => {
          if (item.id === id) {
            item.done = !item.done
          }
          return item
        })
      )
    }
    if (type === 'del') {
      setList(list.filter((item) => item.id !== id))
    }
  }
  return (
    <div className="app">
      <h3>代办任务列表:</h3>
      {list.map((item) => {
        return <Todo changeFlag={changeFlag} key={item.id} item={item}></Todo>
      })}
    </div>
  )
}

export default App
