import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import './common/styles/index.styl'
import 'ant-design-vue/dist/antd.css'
import { Button, Input, Icon, Layout, Menu, Breadcrumb } from 'ant-design-vue'

import './permission'

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
