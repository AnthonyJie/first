import ReactDom from 'react-dom'

const isLogin = true

const element = (
  <>
    <h1>{isLogin ? '欢迎你' : '未登录'}</h1>
  </>
)

ReactDom.render(element, document.querySelector('#root'))
