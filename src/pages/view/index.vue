<template>
  <div class="view-wrapper">
    <deep-item :currentIndex="currentIndex" :list="config" :selectComponent="selectComponent"></deep-item>
  </div>
</template>

<script>
import DeepItem from './deepItem'
export default {
  name: 'ViewContent',
  data () {
    return {
      config: [],
      currentIndex: ''
    }
  },
  components: {
    DeepItem
  },
  mounted () {
    this.bindIframeMessage()
  },
  methods: {
    bindIframeMessage () {
      window.addEventListener('message', (message) => {
        let { data } = message
        switch (data.type) {
          case 'ADD_COMPONENT':
            this.config.push(data.data)
            this.$nextTick(() => {
              let div1 = document.querySelector('.view-wrapper > div')
              div1.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end'
              })
            })
            break
        }
      })
    },
    selectComponent (index) {
      this.currentIndex = index
      window.parent.postMessage({
        type: 'SELECT_COMPONENT',
        data: {
          index: index
        }
      }, '*')
    }
  }
}
</script>

<style lang="less" scoped>
.edit {
  border: 1px dashed #29b6b0;
  &:not(:last-of-type) {
    border-bottom: none;
  }
}

.view-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.view-wrapper > .dragAreaEdit::after {
  visibility: hidden;
}
</style>
