<template>
  <div class="component-list">
    <ul class="component-show">
      <li class="component-item">1</li>
      <li class="component-item">1</li>
      <li class="component-item">1</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentList'
}
</script>

<style scoped>
.component-list {
  box-shadow: 1px 0 0 0 #f2f2f2;
  height: 100%;
}
.component-show {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.component-item {
  width: 100px;
  height: 100px;
}

.component-item:hover {
  background: #f5fbfb;
  cursor: pointer;
}
</style>