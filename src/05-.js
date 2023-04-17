import ReactDom from 'react-dom'

const list = [
  { id: 1, name: '杭州', gender: 3000 },
  { id: 2, name: '上海', gender: 3300 },
  { id: 3, name: '北京', gender: 3200 },
]

// const renderLi = () => {
//   return list.map((item) => <li>{item.name}</li>)
// }

const element = (
  <>
    <h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <div>{item.gender}</div>
          </li>
        ))}
      </ul>
    </h1>
  </>
)

ReactDom.render(element, document.getElementById('root'))
