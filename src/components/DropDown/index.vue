<template>
  <div class="drop-down-wrap" v-click-outside="onClickoutside">
    <slot></slot>
    <div class="drop-down" :style="{visibility:isContentShow}">
      <slot name="dropdown"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "drop-down",
    props:{
      onCloseCallback:{
        type:Function
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    computed: {
      isContentShow() {
        return this.isShow ? "visible" : "hidden";
      }
    },
    methods: {
      onClickoutside() {
        this.onClose();
      },
      onClose() {
        this.isShow = false;
        this.onCloseCallback && this.onCloseCallback();
      },
      onShow() {
        this.isShow = true;
      }
    }
  }
</script>

<style scoped>
  .drop-down-wrap {
    position: relative;
  }

  .drop-down {
    position: absolute;
    left: 0;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
  }
</style>
