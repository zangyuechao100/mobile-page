<template>
  <div class="view-wrapper">
    <draggable
      v-model="config"
      group="people"
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
        />
      </template>
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
export default {
  name: 'ViewContent',
  components: {
    Draggable
  },
  data () {
    return {
      config: [],
      myArray: [
        {
          id: 1,
          name: '测试1'
        },
        {
          id: 2,
          name: '测试2'
        },
        {
          id: 3,
          name: '测试3'
        },
        {
          id: 4,
          name: '测试4'
        }
      ]
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200
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
            console.log(this.config)
            break
        }
      })
    }
  }
}
</script>

<style scoped>
.edit {
  
}
</style>