<template>
    <div>
        <pui-button bgcolor="disabled">取消</pui-button>
        <pui-button bgcolor="success" :loading="isLoading" :disabled="isLoading" @click="test">确定</pui-button>
        <pui-textarea counter style="width:200px" :length-callback="show" max-length="100" min-height="50px" max-height="100px" placeholder="请输入..." v-model="value"></pui-textarea>

    </div>
</template>
<script>
import Vue from "vue";
import Button from "@/components/button";
import Textarea from "@/components/textarea";
import Frame from '@/components/frame'


Vue.component(Frame.name,Frame);
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
      this.value = this.value.substr(1,2);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    show(){
        console.log("max")
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
