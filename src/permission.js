import router from './router/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store/store'

const whiteList = ['/login'] // 不重定向白名单
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    if (store.getters.loginFlag) {
      next()
    } else {
      console.log('no permission')
      next({ path: '/login' })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
