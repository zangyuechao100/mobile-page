<template>
  <div class="areaWrap itemBg">
    <div class="areaTitleWrap">
      <div class="areaTitle lineLightBd textMain">测试</div>
    </div>
    <div class="areaContWrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaWrap',
  components: {
  }
}
</script>

<style lang="less" scoped>
.areaTitleWrap {
  padding: 0 16px;

  .areaTitle {
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid transparent;
    padding-left: 12px;
    font-size: 14px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 13px;
      width: 2px;
      height: 14px;
      background-color: #e93030;
    }
  }
}
.areaContWrap {
  padding: 0 16px;

}
</style>
