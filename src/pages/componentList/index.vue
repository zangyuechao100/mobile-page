<template>
  <div class="component-list">
    <ul class="component-show">
      <li
        v-for="item in componentsList"
        :key="item.name"
        class="component-item"
        @click="addComponent(item)"
      >
        <div class="image">
          <img :src="item.image">
        </div>
        <div class="name">
          {{ item.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import list from "./../../../packages/index";
export default {
  name: "ComponentList",
  data() {
    return {
      componentsList: list
    };
  },
  methods: {
    addComponent ({ name, components }) {
      let component = {
        name,
        components
      }
      this.$emit('addComponent', component)
    }
  }
};
</script>

<style scoped lang="less">
.component-list {
  box-shadow: 1px 0 0 0 #f2f2f2;
  height: 100%;
}
.component-show {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.component-item {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .name {
    margin-top: 30px;
    font-size: 12px;
  }
  .image {
    width: 24px;
  }
}

.component-item:hover {
  background: #f5fbfb;
  cursor: pointer;
}


</style>