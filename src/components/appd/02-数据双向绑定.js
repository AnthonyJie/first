import { useState } from 'react'
import './index.scss'

const App = () => {
  const [value, setValue] = useState('')
  const [checkboxFlag, setFlag] = useState(false)
  const getValue = () => {
    console.log(value)
  }
  return (
    <>
      <div>
        <input
          onInput={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <button onClick={() => getValue()}>获取</button>
        <button onClick={() => setValue('heima')}>修改</button>
      </div>
      <hr />
      <input
        type="checkbox"
        onChange={() => setFlag(!checkboxFlag)}
        checked={checkboxFlag}
      />
      <span>{checkboxFlag ? '选中了' : '未选中'}</span>
    </>
  )
}

export default App
