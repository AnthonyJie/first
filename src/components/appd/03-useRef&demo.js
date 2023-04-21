import { useRef } from 'react'
import './index.scss'

const App = () => {
  const inputRef = useRef(null)
  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <hr />
        <button onClick={() => console.log(inputRef.current.value)}>
          获取文本框的值
        </button>
        <button onClick={() => inputRef.current.focus()}>聚焦文本框</button>
      </div>
    </div>
  )
}

export default App
