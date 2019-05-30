<template>
  <a-breadcrumb :routes="routes">
    <template
      slot="itemRender"
      slot-scope="{route, params, routes, paths}"
    >
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{route.name}}
      </span>
      <router-link
        v-else
        :to="`${basePath}/${paths.join('/')}`"
      >
        {{route.name}}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      basePath: '',
      routes: []
    }
  },
  watch: {
    $route () {
      this.routes = []
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })
      const first = matched[0]
      if (first && first.name !== 'index') {
        matched = [{ path: '/index', meta: { title: '首页' } }].concat(matched)
      }
      matched.forEach(item => {
        let obj = Object.create(null)
        obj.name = item.meta.title
        obj.path = item.path
        this.routes.push(obj)
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
