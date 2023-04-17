import 'normalize.css'
import ReactDom from 'react-dom'

// function Home() {
//   return <h1>这是home组件</h1>
// }

const Home = () => <h1>这是home组件</h1>

export const hooks = () => {
  let count = 1
  const addCount = () => {
    count += 1
    console.log(count)
  }

  return { count, addCount }
}

const { addCount, count } = hooks()

const element = (
  <>
    <Home></Home>
    <span>{count}</span>
    <button onClick={addCount}>加加</button>
  </>
)

ReactDom.render(element, document.querySelector('#root'))
