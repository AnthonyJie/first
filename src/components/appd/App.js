import './App.scss'
import classNames from 'classnames'
import { useState, useEffect } from 'react'
import axios from 'axios'

// useEffect 发送请求

// 子组件
const Todo = ({ id, text, done, onToggle }) => {
  return (
    <div className={classNames('todo', done && 'todo-done')}>
      <div onClick={() => onToggle(id, !done)}>{text}</div>
      <button>X</button>
    </div>
  )
}

// 任务列表数据
const defaultTodos = []

const Cc = ({ laqu }) => {
  const [value, setValue] = useState('')
  const addData = async () => {
    if (value.trim() === '') return
    const { data } = await axios.post(`http://localhost:4306/api/addtodos`, {
      text: value.trim(),
    })
    setValue(``)

    console.log(data)
    laqu()
  }
  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <hr />
      <button onClick={() => addData()}>添加</button>
    </>
  )
}

// 父组件
const App = () => {
  const [todos, setTodos] = useState(defaultTodos)

  // 注意：不要直接在 Effect函数 上添加 async ，因为 Effect 函数是同步的
  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios.get(`http://localhost:4306/api/getlist`)
      setTodos(data.data)
    }
    loadData()
  }, [])
  // 切换任务完成状态
  const onToggle = async (id, done) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        }
        return item
      })
    )
    await axios.post(`http://localhost:4306/api/changeflag`, { id })
    // const res = await axios.patch(`http://localhost:8080/todos/${id}`, {
    //   done,
    // })
    // console.log(res)
  }
  const laqu = () => {
    const loadData = async () => {
      const { data } = await axios.get(`http://localhost:4306/api/getlist`)
      setTodos(data.data)
    }
    loadData()
  }
  return (
    <div className="app">
      <h3>待办任务列表：</h3>
      {todos.map((item) => {
        return <Todo key={item.id} {...item} onToggle={onToggle} />
      })}
      <Cc laqu={laqu}></Cc>
    </div>
  )
}

export default App
