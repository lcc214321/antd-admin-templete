<template>
  <a-layout class="layout-wrapper">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['1']"
        @click="handleMenuClick"
      >
        <a-menu-item key="1">
          <a-icon type="download" />
          <span>
            Button
          </span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="form" />
          <span>Form</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-wrapper">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <breadcrumb></breadcrumb>
      </a-layout-header>
      <a-layout-content
        class="content-wrapper"
        :style="{margin: '24px 16px', padding: '24px',background: '#fff',minHeight: '90vh'}"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script type="text/ecmascript-6">
import Breadcrumb from '@/components/Breadcrumb/index'

export default {
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    handleMenuClick ({ item, key, keyPath }) {
      switch (key) {
        case '1':
          this.$router.push({ path: '/index/button' })
          break
        case '2':
          this.$router.push({ path: '/index/form' })
          break
        default:
          break
      }
    }
  },
  components: {
    Breadcrumb
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.layout-wrapper
  .trigger
    font-size 18px
    line-height 64px
    padding 0 24px
    cursor pointer
    transition color 0.3s
    &:hover
      color #1890ff
  .logo
    height 32px
    background rgba(255, 255, 255, 0.2)
    margin 16px
  .header-wrapper
    display flex
    background #fff
    padding 0
    align-items center
</style>
