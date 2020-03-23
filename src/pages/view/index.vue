<template>
  <div class="view-wrapper" ref="viewWrapper">
    <draggable
      v-model="config"
      v-bind="dragOptions"
      @start="drag=true"
      @end="drag=false"
    >
      <template
        v-for="(item, index) in config"
      >
        <component
          :is="item.components"
          :key="index"
          class="edit"
        >
          <view-content v-if="item.child" :config="item.child"></view-content>
        </component>
      </template>
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  name: 'ViewContent',
  components: {
    Draggable
  },
  data () {
    return {
      config: []
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'component'
      }
    }
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
