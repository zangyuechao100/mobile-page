<template>
  <draggable
    v-model="copyConfig"
    v-bind="dragOptions"
    :group="{ name: 'g1' }"
    @start="drag=true"
    @end="drag=false"
  >
    <template
      v-for="(item, index) in copyConfig"
    >
      <component
        :is="item.components"
        :key="index"
        class="edit"
      >
        <deep-item v-if="item.child" :config="item.child"></deep-item>
      </component>
    </template>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  name: 'deepItem',
  components: {
    Draggable
  },
  props: ['config'],
  data () {
    return {
      copyConfig: []
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
  },
  methods: {
  },
  watch: {
    config: {
      handler: function (val) {
        console.log(val)
        this.copyConfig = val.slice()
      },
      immediate: true,
      deep: true
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

.deep-item {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
