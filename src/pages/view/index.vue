<template>
  <div class="view-wrapper">
    <component
      :is="item.components"
      v-for="(item, index) in config"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  name: 'ViewContent',
  components: {
  },
  data () {
    return {
      config: []
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

<style>

</style>