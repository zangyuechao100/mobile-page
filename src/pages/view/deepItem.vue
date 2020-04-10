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
        :ref="'item-'+initComponentKey(index)"
        v-bind="item.props"
        :is="item.components"
        :key="index"
        class="edit"
        :class="{
          'active': currentIndex === initComponentKey(index)
        }"
        @click.native.stop="getCurrentIndex(initComponentKey(index))"
      >
        <deep-item v-if="item.child" :currentIndex="currentIndex" :selectComponent="selectComponent" :list="item.child" :preKey="initComponentKey(index)"></deep-item>
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
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    preKey: {
      type: String,
      default: () => {
        return ''
      }
    },
    currentIndex: {
      type: String,
      default: () => {
        return ''
      }
    },
    selectComponent: {
      type: Function
    }
  },
  data () {
    return {
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
      this.selectComponent(index)
    },
    initComponentKey (index) {
      return this.preKey ? `${this.preKey}-${index}` : index + ''
    }
  },
  watch: {
    currentIndex (val) {
      console.log(val)
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
