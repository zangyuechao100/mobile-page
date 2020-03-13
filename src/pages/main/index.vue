<template>
  <div class="main-wrapper">
    <div class="main-left">
      <component-list></component-list>
    </div>
    <div class="main-center">
      <view-wrapper></view-wrapper>
    </div>
    <div class="main-right">

    </div>
  </div>
</template>

<script>
import ViewWrapper from './../viewWrapper'
import ComponentList from './../componentList'
export default {
  name: 'Main',
  components: {
    ComponentList,
    ViewWrapper
  }
}
</script>

<style>
.main-wrapper {
  display: flex;
  height: 100%;
  flex-direction: row;
}
.main-left {
  flex: 0 0 300px;
  height: 100%;
}

.main-center {
  flex: 1 0;
  height: calc(100% - 120px);
}

.main-right {
  flex: 0 0 350px;
}
</style>