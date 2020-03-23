<template>
  <div class="view-wrapper">
    <deep-item :config="config"></deep-item>
  </div>
</template>

<script>
import DeepItem from './deepItem'
export default {
  name: 'ViewContent',
  data () {
    return {
      config: []
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
</style>
