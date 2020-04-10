<template>
  <div class="change-props">
    <div class="title">
      <h1>组件配置</h1>
      <div class="button">删除组件</div>
    </div>
    <div v-for="(value, key) in propsObj" :key="key" class="change-props--content">
      <div class="props-title">{{key}}</div>
      <input class="props-input" :value="value" @focus="focusKey(key)" @input="changeInput" type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeProps',
  props: {
    propsObj: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      copyValue: '',
      key: ''
    }
  },
  methods: {
    changeInput (e) {
      this.$emit('changeInput', this.key, e.target.value)
    },
    focusKey (key) {
      this.key = key
    }
  },
  watch: {
    propsObj (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="less">
.change-props {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 18px;
  border-left: 1px solid #f2f2f2;
  // box-shadow: 1px 0 0 0 #f2f2f2;
}
.title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.props-title {
  height: 40px;
  line-height: 40px;
}

.props-input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.button {
  color: #f5222d;
  background-color: #f5f5f5;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  padding: 0 15px;
  border-radius: 4px;
  border-color: #d9d9d9;
  &:hover {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
  }
}

.change-props--content {
  margin-top: 6px;
}
</style>
