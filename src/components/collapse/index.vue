<template>
<div class="pui-collapse">
    <div name="title" class="pui-collapse-title" @click="toggleContent">
        <slot name="title"><pui-card cursor right-arrow :right-arrow-rotate="showContent" :right-arrow-duration="duration">{{title}}</pui-card></slot>
    </div>
    <div class="pui-collapse-content" ref="puiCollapseContent" :style="`transition-duration:${duration}ms`">
        <slot></slot>
    </div>
</div>
</template>
<style scoped lang="scss">
.pui-collapse {
  border: 1px solid #eee;
  border-radius: 4px;
  .pui-collapse-title {
    background-color: #f2f2f2;
    cursor: pointer;
  }
  .pui-collapse-content {
    height: 0;
    overflow: hidden;
    transition-property: height;
  }
}
</style>

<script>
import Card from "@/components/card";

export default {
  name: "pui-collapse",
  components: {
    "pui-card": Card
  },
  props: {
    show: {},
    title: {},
    duration: {
      default: 500
    }
  },
  data() {
    return {
      showContent: false,
      isAnimation: false
    };
  },
  mounted() {
    if(this.show!=undefined){
      this.showContent = !this.show;
      console.log(this.show)
      this.toggleContent(null, true);
    }
  },
  methods: {
    toggleContent(e, mode = false) {
      if (this.show === undefined || mode == true) {
        if (!window.getComputedStyle || this.isAnimation) return;
        this.isAnimation = true;
        this.showContent = !this.showContent;
        let el = this.$refs.puiCollapseContent;
        let startHeight = window.getComputedStyle(el).height;
        if (this.showContent) {
          el.style.height = "auto";
          let endHeight = window.getComputedStyle(el).height;
          el.style.height = startHeight;
          setTimeout(() => {
              el.style.height = endHeight;
              setTimeout(() => {
                el.style.height = "auto";
                this.isAnimation = false;
              }, this.duration);
          },10);
        } else {
          el.style.height = startHeight;
          setTimeout(() => {
            el.style.height = 0;
            setTimeout(() => {
              this.isAnimation = false;
            }, this.duration);
          },10);
        }
        if (mode == false) {
          this.$emit("click", e);
        }
      } else {
        this.$emit("click", e);
      }
    }
  },
  computed: {},
  watch: {
    show() {
      this.showContent = !this.show;
      this.toggleContent(null, true);
    }
  }
};
</script>