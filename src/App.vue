<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/reset.css'
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}

#app {
  height: 100%;
}
</style>
