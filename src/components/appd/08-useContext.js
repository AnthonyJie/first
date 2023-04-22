import { createContext, useContext, useState } from 'react'
import './App.scss'

// 跨组件通讯 - Context
// 1. 创建 Context 对象
const ThemeContext = createContext()

// 2. 划定范围，提供共享数据
// 3. 范围内的组件，获取共享数据

// -------------------------侧边栏-----------------------
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Menu />
    </div>
  )
}
const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <MenuItem />
        <MenuItem />
      </ul>
    </div>
  )
}
const MenuItem = () => {
  const { theme } = useContext(ThemeContext)
  console.log(theme)
  // console.log(obj)
  // 3. 范围内的组件，获取共享数据
  return <li style={{ color: theme }}>菜单</li>
}

// -------------------------右侧内容-----------------------
const Content = () => {
  const { theme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className="content">
      <div style={{ color: theme }} className="main">
        Context 跨组件通讯
      </div>
      <Footer />
    </div>
  )
}
const Footer = () => {
  const { resetColor } = useContext(ThemeContext)
  return (
    <div className="footer">
      <button onClick={() => resetColor()}>重置主题</button>
    </div>
  )
}

// 父组件
const App = () => {
  const [theme, setTheme] = useState('#1677FF')
  const resetColor = () => {
    setTheme('#1677FF')
  }
  return (
    <div className="app">
      <ThemeContext.Provider
        value={{
          theme,
          resetColor: resetColor,
          // 通过对象的方式传过来
        }}
      >
        {/* 2. 划定范围，提供共享数据 */}

        {/* 默认颜色： #1677FF */}
        <input
          value={theme}
          className="theme-selector"
          type="color"
          onChange={(e) => setTheme(e.target.value)}
        />

        <div className="main">
          {/* 侧边栏 */}
          <Sidebar />
          {/* 右侧内容 */}
          <Content />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
