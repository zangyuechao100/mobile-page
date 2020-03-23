<template>
  <div class="area-wrap">
    <area-title></area-title>
    <div class="area-wrap--item">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AreaTitle from './../area-title'
export default {
  name: 'AreaWrap',
  components: {
    AreaTitle
  }
}
</script>

<style lang="less" scoped>
</style>
