import Index from './views/index'
import Login from './views/login'
import Layout from './views/layout'
// 引入首页
import Overview from './pages/overview'
// 引入课程管理页面
import CompleteClass from './pages/class/index'
import TeachClass from './pages/class/teach'
import ReviewClass from './pages/class/review'
import RejectClass from './pages/class/reject'
import ClassDetail from './pages/class/detail'
// 引入用户管理页面
import UserList from './pages/user/userList'
import UserReview from './pages/user/userReview'
import UserDetail from './pages/user/userDetail'
// 引入 tags 管理页面
import TagList from './pages/tag/tagList'
import AddTag from './pages/tag/addTag'
// 引入评论管理页面
import CommentReview from './pages/comment/commentReview'

import UpdatePwd from './pages/updatePwd'

const routers = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {path: '', component: Overview},
      {path: '/class/complete', component: CompleteClass},
      {path: '/class/teach', component: TeachClass},
      {path: '/class/review', component: ReviewClass},
      {path: '/class/reject', component: RejectClass},
      {path: '/class/detail', component: ClassDetail},

      {path: '/user/list', component: UserList},
      {path: '/user/review', component: UserReview},
      {path: '/user/detail', component: UserDetail},

      {path: '/tag/list', component: TagList},
      {path: '/tag/add', component: AddTag},

      {path: '/comment/review', component: CommentReview},
      {path: '/updatepwd', component: UpdatePwd}
    ]
  }
]
export default routers;
