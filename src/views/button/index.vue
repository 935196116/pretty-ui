<template>
    <div>
        <pui-frame title="按钮颜色" class="frame">
          <div class="frame-item">
            六种自带bgcolor：          
            <pui-button>primary</pui-button>
            <pui-button bgcolor="success">success</pui-button>
            <pui-button bgcolor="warning">warning</pui-button>
            <pui-button bgcolor="danger">danger</pui-button>
            <pui-button bgcolor="disabled">disabled</pui-button>
          </div>
          <div class="frame-item">
            自定义bgcolor：
            <pui-button bgcolor="#123456">#123456</pui-button>
            <pui-button bgcolor="purple">purple</pui-button>
            <pui-button bgcolor="pink">pink</pui-button>
          </div>
          <div class="frame-item">
            自定义文字颜色：
            <pui-button color="yellow">yellow</pui-button>
            <pui-button color="#000" bgcolor="#f0f0f0">#000</pui-button>
            <pui-button color="red" bgcolor="green">red</pui-button>
          </div>
        </pui-frame>
        <pui-frame title="按钮形状/大小" class="frame">
          <div class="frame-item">
            自定义高度：
            <pui-button height="40px">40px</pui-button>
            <pui-button height="60px" bgcolor="danger">有点大的60px</pui-button>
            <pui-button height="20px" bgcolor="success">细细的20px</pui-button>
          </div>
        </pui-frame>
    </div>
</template>
<style lang="scss" scoped>
.frame {
  font-size: 14px;
  color: #666;
  width: 80%;
  margin: 20px auto;
  .frame-item {
    margin: 10px 0 10px 0;
  }
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
    return {};
  },
  methods: {},
  watch: {
    // value() {
    //   // console.log(this.value)
    //   this.value += '3';
    // }
  }
};
</script>