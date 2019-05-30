<template>
  <div class="login-wrapper">
    <div class="login-form">
      <label>欢迎使用 Ant-Design</label>
      <div class="username">
        <a-input
          placeholder="用户名"
          v-model="username"
          ref="userNameInput"
          class="input"
          size="large"
        >
          <a-icon
            slot="prefix"
            type="user"
          />
          <a-icon
            v-if="username"
            slot="suffix"
            type="close-circle"
            @click="emitEmpty"
          />
        </a-input>
      </div>
      <div class="password">
        <a-input
          placeholder="密码"
          v-model="password"
          ref="userNameInput"
          class="input"
          size="large"
        >
          <a-icon
            slot="prefix"
            type="lock"
          />
          <a-icon
            v-if="password"
            slot="suffix"
            type="close-circle"
            @click="emitEmpty"
          />
        </a-input>
      </div>
      <a-button
        size="large"
        :ghost=true
        style="width:320px;margin-top:30px"
        @click="handleLogin"
      >登录</a-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      if (this.username === 'admin' && this.password === '123') {
        this.setLoginFlag(true)
        this.$router.push('/index')
      }
    },
    emitEmpty () {
      this.username = ''
      this.password = ''
    },
    ...mapMutations({
      setLoginFlag: 'SET_LOGIN_FLAG'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login-wrapper
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000046 /* fallback for old browsers */
  background -webkit-linear-gradient(to bottom, #1CB5E0, #000046) /* Chrome 10-25, Safari 5.1-6 */
  background linear-gradient(to top, #1CB5E0, #000046) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .login-form
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    display flex
    flex-direction column
    align-items center
    label
      color #ffffff
      font-size 26px
      margin-bottom 60px
    .input
      width 320px
    .username
      margin-bottom 30px
</style>
