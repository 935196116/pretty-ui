<template>
<div class="pui-frame">
    <div class="pui-frame-title"></div>
    <div class="pui-frame-content">
        <slot> </slot>
    </div>
</div>
</template>
<style scoped lang="scss">
.pui-frame {
  background-color: #fff;
}
.pui-frame-title {
  background-color: #fff;
}
.pui-frame-content {
  border: 1px solid #ccc;
  border-radius: 2px;
}
</style>

<script>
export default {
  name: "pui-frame",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>