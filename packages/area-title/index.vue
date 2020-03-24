<template>
  <div class="area-title">
    <div class="title-text">
      <div class="line"></div>
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaTitle',
  props: {
    title: {
      type: String,
      default: () => {
        return '标题'
      }
    }
  }
}
</script>

<style scoped>
.area-title {
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}
.line {
  position: absolute;
  width: 2px;
  height: 16px;
  background-color: #e93030;
}
.title-text .title {
  margin-left: 10px;
}
</style>
