<template>
  <div class="view-wrapper">
    <div class="phone">
      <div class="header" />
      <div class="title">
        可视化拖动
      </div>
      <div class="content">
        <iframe
          ref="iFrame"
          class="content-iframe"
          :src="src"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import AreaTitle from "./../../../packages/area-title";
// import AreaImage from "./../../../packages/area-image";
export default {
  name: "ViewWrapper",
  components: {
 
  },
  data() {
    return {};
  },
  computed: {
    src () {
      return `//${window.location.hostname}:${window.location.port}/view`
    }
  },
  methods: {
    pushMsg (data) {
      this.$refs.iFrame.contentWindow.postMessage({
        type: 'ADD_COMPONENT',
        data
      }, '*')
    }
  }
};
</script>

<style scoped>
.view-wrapper {
  height: 100%;
  padding-left: 230px;
  box-sizing: border-box;
}
.phone {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  width: 375px;
  height: 670px;
  margin: 120px 0 0;
}
.phone .header {
  width: 100%;
  height: 20px;
  background: url("./../../assets/phone_status_bar.png") no-repeat;
}

.title {
  background: #f5f5f5;
  height: 44px;
  width: 100%;
  text-align: center;
  line-height: 44px;
  border-bottom: 1px solid #d6d6d6;
}
.content {
  width: 100%;
  height: calc(100% - 64px);
}
.content-iframe {
  width: 100%;
  height: 100%;
}
</style>