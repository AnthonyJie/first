import { useRef, useState } from 'react'
import avatar from '../../images/bozai.png'
import { orderBy } from 'lodash'
import classNames from 'classnames'
// import '../../index.css'
import './index.scss'

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar:
        'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/comment/zhoujielun.jpeg',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    // 喜欢数量
    like: 98,
    // 0：未表态 1: 喜欢 2: 不喜欢
    action: 0,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar:
        'https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/comment/xusong.jpeg',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
    action: 2,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
    action: 1,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

const App = () => {
  const [list, setList] = useState(defaultList)
  const [active, setActive] = useState('hot')
  const [value, setValue] = useState('')
  const onLike = (id) => {
    setList(
      list.map((item) => {
        if (item.rpid === id) {
          // item.action = 1
          return {
            ...item,
            action: item.action === 1 ? 0 : 1,
            like: item.action === 1 ? item.like - 1 : item.like + 1,
          }
        }
        return item
      })
    )
  }

  const onDislike = (id) => {
    setList(
      list.map((item) => {
        if (item.rpid === id) {
          return {
            ...item,
            action: item.action === 2 ? 0 : 2,
            like: item.action === 1 ? item.like - 1 : item.like,
          }
        }
        return item
      })
    )
  }

  const onToggle = (type) => {
    if (type === active) return
    setActive(type)
    if (type === 'time') setList(orderBy(list, 'ctime', 'desc'))
    if (type === 'hot') setList(orderBy(list, 'like', 'desc'))
  }
  const btn = useRef(null)
  const textArea = useRef(null)
  const sendMessage = () => {
    if (value.trim() === '') return textArea.current.focus()
    const span = textArea.current.value
    const nowTime = new Date()
    const ctime =
      nowTime.getMonth() +
      '-' +
      nowTime.getDate() +
      ' ' +
      nowTime.getHours() +
      ':' +
      nowTime.getMinutes()
    const content = {
      rpid: list.length + 1,
      user,
      content: span,
      ctime,
      like: 0,
      action: 0,
    }

    if (active === 'hot') {
      setList([...list, content])
    }
    if (active === 'time') {
      setList([content, ...list])
    }
    setValue('')
  }

  const watchText = (e) => {
    setValue(e)
    console.log(e)
  }
  return (
    <>
      <div className="app">
        {/* 导航 Tab */}
        <div className="reply-navigation">
          <ul className="nav-bar">
            <li className="nav-title">
              <span className="nav-title-text">评论</span>
              {/* 评论数量 */}
              <span className="total-reply">{list.length}</span>
            </li>
            <li className="nav-sort">
              {/* 高亮类名： active */}
              {tabs.map((item) => {
                return (
                  <div
                    onClick={() => onToggle(item.type)}
                    key={item.type}
                    className={`nav-item ${classNames({
                      active: active === item.type,
                    })}`}
                  >
                    {item.text}
                  </div>
                )
              })}
            </li>
          </ul>
        </div>

        <div className="reply-wrap">
          {/* 发表评论 */}
          <div className="box-normal">
            {/* 当前用户头像 */}
            <div className="reply-box-avatar">
              <div className="bili-avatar">
                <img className="bili-avatar-img" src={avatar} alt="用户头像" />
              </div>
            </div>
            <div className="reply-box-wrap">
              {/* 评论框 */}
              <textarea
                ref={textArea}
                value={value}
                onChange={(e) => watchText(e.target.value)}
                className="reply-box-textarea"
                placeholder="发一条友善的评论"
              />
              {/* 发布按钮 */}
              <div
                ref={btn}
                onClick={() => sendMessage()}
                className="reply-box-send"
              >
                <div className="send-text">发布</div>
              </div>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="reply-list">
            {/* 评论项 */}
            {list.map((item) => {
              return (
                <div key={item.rpid} className="reply-item">
                  {/* 头像 */}
                  <div className="root-reply-avatar">
                    <div className="bili-avatar">
                      <img
                        className="bili-avatar-img"
                        src={item.user.avatar}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="content-wrap">
                    {/* 用户名 */}
                    <div className="user-info">
                      <div className="user-name">{item.user.uname}</div>
                    </div>
                    {/* 评论内容 */}
                    <div className="root-reply">
                      <span className="reply-content">{item.content}</span>
                      <div className="reply-info">
                        {/* 评论时间 */}
                        <span className="reply-time">{item.ctime}</span>
                        {/* 喜欢 */}
                        <span className="reply-like">
                          {/* 选中类名： liked */}
                          <i
                            className={`icon like-icon ${
                              item.action === 1 && 'liked'
                            }`}
                            onClick={() => onLike(item.rpid)}
                          />
                          <span>{item.like}</span>
                        </span>
                        {/* 不喜欢 */}
                        <span className="reply-dislike">
                          {/* 选中类名： disliked */}
                          <i
                            className={`icon dislike-icon ${
                              item.action === 2 && 'disliked'
                            }`}
                            onClick={() => onDislike(item.rpid)}
                          />
                        </span>
                        {item.user.uid === user.uid && (
                          <span
                            onClick={() =>
                              setList(
                                [...list].filter(
                                  (key) => key.rpid !== item.rpid
                                )
                              )
                            }
                            className="delete-btn"
                          >
                            删除
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className={`reply-none ${list.length ? 'disp' : ''}`}>
            暂无评论
          </div>
        </div>
      </div>
    </>
  )
}

export default App
