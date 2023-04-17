import ReactDom from 'react-dom'

const car = '玛莎'
const person = {
  age: 17,
}
const element = (
  <>
    <div contentEditable>123</div>
    <ul>
      <li>{car}</li>
      <li>{person.age >= 18 ? car : '婴儿车'}</li>
      <li>666</li>
      <li>666</li>
    </ul>
  </>
)

ReactDom.render(element, document.querySelector('#root'))
