<template>
  <div class="test">
    <draggable
      :list="myArray"
      @start="drag=true"
      v-bind="dragOptions"
      :group="{ name: 'g1' }"
      @end="drag=false"
    >
      <div v-for="item in myArray" :key="item.id" class="item">
        {{item.name}}
        <draggable
          :group="{ name: 'g1' }"
          :list="item.list"
          @start="drag=true"
          v-bind="dragOptions"
          @end="drag=false"
        >
          <div v-for="child in item.child" :key="child.id" class="item">
            {{child.name}}
          </div>
        </draggable>
      </div>
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  name: 'Test',
  components: {
    Draggable
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
  data () {
    return {
      myArray: [
        {
          id: 1,
          name: '测试1'

        },
        {
          id: 2,
          name: '测试2',
          child: [
            {
              id: 21,
              name: '测试21'
            }, {
              id: 22,
              name: '测试22'
            }
          ]
        },
        {
          id: 3,
          name: '测试3',
          child: [
            {
              id: 31,
              name: '测试31'
            }, {
              id: 32,
              name: '测试32'
            }
          ]
        },
        {
          id: 4,
          name: '测试4',
          child: [
            {
              id: 41,
              name: '测试41'
            }, {
              id: 42,
              name: '测试42'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  padding: 10px;
   border: 1px dashed #29b6b0;
  &:not(:last-of-type) {
    border-bottom: none;
  }
}
</style>
