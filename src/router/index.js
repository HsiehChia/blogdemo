import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminHome from '../views/AdminHome.vue'
import Cate from '../views/Cate.vue'
import Msg from '../views/Msg.vue'
import Login from '../components/Login.vue'
import Welcome from '../components/admin/Welcome.vue'
import UserList from '../components/admin/UserList.vue'
import ArticleList from '../components/admin/ArticleList.vue'
import AddArticle from '../components/admin/AddArticle.vue'
import CategoryList from '../components/admin/CategoryList.vue'
import RoleList from '../components/admin/RoleList.vue'
import AuthList from '../components/admin/AuthList.vue'
import Account from '../components/admin/Account.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cate',
    name: 'Cate',
    component: Cate
  },
  {
    path: '/msg',
    name: 'Msg',
    component: Msg
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/welcome',
    component: AdminHome,
    children: [{
      path: '/admin/welcome',
      name: 'Welcom',
      component: Welcome
    }, {
      path: '/admin/user',
      name: 'UserList',
      component: UserList
    }, {
      path: '/admin/article',
      name: 'ArticleList',
      component: ArticleList
    }, {
      path: '/admin/addArticle',
      name: 'AddArticle',
      component: AddArticle
    }, {
      path: '/admin/cate',
      name: 'CategoryList',
      component: CategoryList
    }, {
      path: '/admin/role',
      name: 'Role',
      component: RoleList
    }, {
      path: '/admin/auth',
      name: 'AuthList',
      component: AuthList
    }, {
      path: '/admin/account',
      name: 'Account',
      component: Account
    }]
  }]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to:将要访问路径
  // from: 从哪个路径跳转来
  // next: 放行 next('/login') 强制跳转
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/login') {
    if (tokenStr) {
      return next('/home')
    } else {
      return next()
    }
  } else {
    if (tokenStr) {
      return next()
    } else {
      return next('/login')
    }
  }
})

export default router