<template>
  <div class="button-wrapper">
    <div>
      <a-button
        type="primary"
        class="item"
        loading
      >Primary</a-button>
      <a-button class="item">Default</a-button>
      <a-button
        type="dashed"
        class="item"
      >Dashed</a-button>
      <a-button
        type="danger"
        class="item"
      >Danger</a-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.item
  margin 8px
</style>
