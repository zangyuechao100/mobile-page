<template>
  <draggable
    :list="list"
    class="dragAreaEdit"
    v-bind="dragOptions"
    :group="{ name: 'g1' }"
    @start="drag=true"
    @end="drag=false"
    @newIndex="handleItemEnd"
  >
    <template
      v-for="(item, index) in list"
    >
      <component
        v-bind="item.props"
        :is="item.components"
        :key="index"
        class="edit"
        @click.native.stop="getCurrentIndex(index)"
        :class="{
          'active': currentIndex === index
        }"
      >
        <deep-item v-if="item.child" :list="item.child"></deep-item>
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
  props: ['list'],
  data () {
    return {
      currentIndex: ''
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        ghostClass: 'ghost'
      }
    }
  },
  mounted () {
  },
  methods: {
    handleItemEnd (e) {
    },
    getCurrentIndex (index) {
      this.currentIndex = index
    }
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>

.edit {
  border: 1px dashed #29b6b0;
  &:not(:last-of-type) {
    border-bottom: none;
  }
  &.active {
    border: 1px dashed #e93030;
  }
}

.deep-item {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.dragAreaEdit {
  &:after {
    content: '可拖入组件';
    display: block;
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    box-sizing: border-box;
    border: 1px dashed #ddd;
    flex: 0 0 100%;
  }
}
</style>
