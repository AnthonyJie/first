import avatar from '../../images/bozai.png'
// import '../../index.css'
import './index.scss'

const App = () => {
  return (
    <>
      <div className="app">
        {/* 导航 Tab */}
        <div className="reply-navigation">
          <ul className="nav-bar">
            <li className="nav-title">
              <span className="nav-title-text">评论</span>
              {/* 评论数量 */}
              <span className="total-reply">9</span>
            </li>
            <li className="nav-sort">
              {/* 高亮类名： active */}
              <div className="nav-item active">最热</div>
              <div className="nav-item">最新</div>
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
                className="reply-box-textarea"
                placeholder="发一条友善的评论"
              />
              {/* 发布按钮 */}
              <div className="reply-box-send">
                <div className="send-text">发布</div>
              </div>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="reply-list">
            {/* 评论项 */}
            <div className="reply-item">
              {/* 头像 */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/comment/zhoujielun.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="user-info">
                  <div className="user-name">周杰伦</div>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">哎呦，不错哦~</span>
                  <div className="reply-info">
                    {/* 评论时间 */}
                    <span className="reply-time">11-13 11:29</span>
                    {/* 喜欢 */}
                    <span className="reply-like">
                      {/* 选中类名： liked */}
                      <i className="icon like-icon" />
                      <span>66</span>
                    </span>
                    {/* 不喜欢 */}
                    <span className="reply-dislike">
                      {/* 选中类名： disliked */}
                      <i className="icon dislike-icon" />
                    </span>
                    <span className="delete-btn">删除</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reply-none">暂无评论</div>
        </div>
      </div>
    </>
  )
}

export default App
