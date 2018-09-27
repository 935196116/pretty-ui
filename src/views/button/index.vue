<template>
    <div>
        <pui-frame style="width:80%;margin:10px auto" title="按钮背景色" class="frame">
          <div>
            六种自带bgcolor：          
            <pui-button>primary</pui-button>
            <pui-button bgcolor="success">success</pui-button>
            <pui-button bgcolor="warning">warning</pui-button>
            <pui-button bgcolor="danger">danger</pui-button>
            <pui-button bgcolor="disabled">disabled</pui-button>
          </div>
          <div>
            自定义bgcolor：
            <pui-button bgcolor="#123456">disabled</pui-button>
            <pui-button bgcolor="purple">disabled</pui-button>
          </div>
        </pui-frame>
        <xmp>
                    <div>
            六种自带bgcolor：          
            <pui-button>primary</pui-button>
            <pui-button bgcolor="success">success</pui-button>
            <pui-button bgcolor="warning">warning</pui-button>
            <pui-button bgcolor="danger">danger</pui-button>
            <pui-button bgcolor="disabled">disabled</pui-button>
          </div>
          <div>
            自定义bgcolor：
            <pui-button bgcolor="#123456">disabled</pui-button>
            <pui-button bgcolor="purple">disabled</pui-button>
          </div>
        </xmp>
    </div>
</template>
<style lang="scss" scoped>
.frame{
  font-size: 14px;
  color: #666;
}
</style>

<script>
import Vue from "vue";
import Button from "@/components/button";
import Textarea from "@/components/textarea";
import Frame from "@/components/frame";

Vue.component(Frame.name, Frame);
Vue.component(Button.name, Button);
Vue.component(Textarea.name, Textarea);
export default {
  name: "index",
  data() {
    return {
      bg: "danger",
      height: "20px",
      shape: "circle",
      isLoading: false,
      value: ""
    };
  },
  methods: {
    test() {
      this.bg = "disabled";
      this.shape = "circle";
      this.height = "40px";
      this.isLoading = true;
      this.value = this.value.substr(1, 2);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    show() {
      console.log("max");
    },
    input() {
      //   this.value += "3";
    }
  },
  watch: {
    // value() {
    //   // console.log(this.value)
    //   this.value += '3';
    // }
  }
};
</script>