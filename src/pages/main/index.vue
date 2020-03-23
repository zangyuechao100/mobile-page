<template>
  <div class="main-wrapper">
    <div class="main-left">
      <component-list @addComponent="addComponent" />
    </div>
    <div class="main-center">
      <view-wrapper ref="viewWrapper" />
    </div>
    <div class="main-right" />
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
  },
  methods: {
    addComponent (item) {
      this.$refs.viewWrapper.pushMsg(item)
    }
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
