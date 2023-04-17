import ReactDom from 'react-dom'
import './index.css'

const isRed = true

const isGreen = true

const arr = ['box']
if (isRed) arr.unshift('red')

const element = (
  <>
    <h1 className={arr.join(' ')}>666</h1>
    <h1 className={isGreen ? 'green' : ''}>999</h1>
  </>
)

ReactDom.render(element, document.getElementById('root'))
