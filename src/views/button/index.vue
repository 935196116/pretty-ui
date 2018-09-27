<template>
    <div>
        <pui-frame title="按钮背景色" class="frame">
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
        <pui-frame title="按钮背景色" class="frame">

        </pui-frame>
    </div>
</template>
<style lang="scss" scoped>
.frame {
  font-size: 14px;
  color: red;
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