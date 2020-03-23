<template>
  <div id="app">
    <router-view />
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
::-webkit-scrollbar-track-piece {
  width: 6px
}

::-webkit-scrollbar {
  width: 6px;
  height: 0
}

::-webkit-scrollbar-thumb {
  height: 50px;
  border-radius: 3px;
  background-color: rgba(0,0,0,.4)
}
</style>
