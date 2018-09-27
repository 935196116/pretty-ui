<template>
<div class="pui-frame">
    <div class="pui-frame-title" :style="`font-size:${this.titleSize}`">{{title}}</div>
    <div class="pui-frame-content">
        <slot></slot>
    </div>
</div>
</template>
<style scoped lang="scss">
.pui-frame {
  background-color: #fff;
  padding-top: 0.1px;
  position: relative;
  .pui-frame-title {
    background-color: #fff;
    position: absolute;
    display: inline-block;
    color: #34add1;
    transform: translate(0, -15px);
    padding: 0 9px;
    left: 25px;
    height: 30px;
    line-height: 30px;
  }
  .pui-frame-content {
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 15px;
  }
}
</style>

<script>
export default {
  name: "pui-frame",
  props: {
    titleSize: {
      default: "15px"
    },
    title: {}
  },
  data() {
    return {};
  },
  methods: {}
};
</script>