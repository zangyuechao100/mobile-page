<template>
  <div class="main-wrapper">
    <div class="main-left">
      <component-list @addComponent="addComponent" />
    </div>
    <div class="main-center">
      <view-wrapper ref="viewWrapper" />
    </div>
    <div class="main-right">
      <change-props :propsObj="propsObj" @changeInput="changeInput"></change-props>
    </div>
  </div>
</template>

<script>
import ViewWrapper from './../viewWrapper'
import ComponentList from './../componentList'
import ChangeProps from './../changeProps'
export default {
  name: 'Main',
  components: {
    ComponentList,
    ViewWrapper,
    ChangeProps
  },
  data () {
    return {
      currentIndex: '',
      propsObj: {}
    }
  },
  methods: {
    changeInput (key, value) {
      this.propsObj[key] = value
      this.$refs.viewWrapper.updateProp(this.propsObj)
    },
    addComponent (item) {
      this.$refs.viewWrapper.pushMsg(item)
    },
    bindIframeMessage () {
      window.addEventListener('message', ({ data }) => {
        switch (data.type) {
          case 'SELECT_COMPONENT':
            this.currentIndex = data.data.index
            this.propsObj = data.data.props
        }
      })
    }
  },
  mounted () {
    this.bindIframeMessage()
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
