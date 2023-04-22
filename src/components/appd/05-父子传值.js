const Avatar = (props) => {
  return (
    <div>
      <span>{props.imgUrl}</span>
      <hr />
      <span>{props.list}</span>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Avatar list={[1, 2, 10, 8, 7, 9]} imgUrl="cenima"></Avatar>
    </div>
  )
}

export default App
