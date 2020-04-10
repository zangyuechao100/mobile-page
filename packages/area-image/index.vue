<template>
  <div class="area-image">
    <img :src="src" alt="">
  </div>
</template>

<script>
const defaultSrc = require('./../../src/assets/emty_img.png')
export default {
  name: 'AreaImage',
  props: {
    src: {
      type: String,
      default: defaultSrc
    }
  },
  methods: {
    getConfig () {
      return {
        src: this.src
      }
    }
  }
}
</script>

<style scoped lang="less">
.area-image {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
