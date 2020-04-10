<template>
  <div class="area-text">
    {{content}}
  </div>
</template>

<script>
export default {
  name: 'AreaText',
  props: {
    content: {
      type: String,
      default: '编辑文本内容，您可以对文字进行修改。'
    }
  },
  methods: {
    getConfig () {
      return {
        content: this.content
      }
    }
  }
}
</script>

<style lang="less" scoped>
.area-text {
  padding: 10px;
}
</style>
