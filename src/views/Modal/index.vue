<template>
  <div>
    <pui-modal :mask="true" v-model="isVisible1" title="欢迎"

               @on-ok="ok" @on-cancel="cancel" @on-hidden="hidden">
      <!--<p slot="header" style="color:#f60;text-align:center">-->
      <!--<span>Delete confirmation</span>-->
      <!--</p>-->
      <p>欢迎你 pui</p>
      <!--<div slot="footer">-->
      <!--你管不了我-->
      <!--</div>-->
    </pui-modal>
    <pui-button @click="()=>show(1)">基本使用</pui-button>

    <pui-modal :mask="true" v-model="isVisible2" title="欢迎"

               @on-ok="ok" @on-cancel="cancel" @on-hidden="cancel">
      <p slot="header" >
      <span style="color:#f60;text-align:left;margin-left: 10px;">Delete confirmation?</span>
      </p>
      <p>自定义的header</p>
      <!--<div slot="footer">-->
      <!--你管不了我-->
      <!--</div>-->
    </pui-modal>
    <pui-button @click="()=>show(2)">自定义header</pui-button>



    <pui-modal :mask="true" v-model="isVisible3" title="欢迎"

               @on-ok="ok"  @on-hidden="cancel">

      <p>自定义的footer</p>
      <div slot="footer" style="padding: 5px ;color:#f60;text-align:left;margin-left: 10px;">
        我是底部 <pui-button @click="()=>show(3,false)">隐藏</pui-button>
      </div>
    </pui-modal>
    <pui-button @click="()=>show(3)">自定义footer</pui-button>



    <pui-modal  v-model="isVisible4" title="欢迎"

               @on-ok="ok">

      <p>没有mask</p>

    </pui-modal>
    <pui-button @click="()=>show(4)">无mask</pui-button>
  </div>

</template>

<script>
  import Vue from 'vue';
  import Button from "@/components/button";
  import Modal from "@/components/modal";

  Vue.component(Modal.name,Modal);
  Vue.component(Button.name, Button);
  export default {
    name: "pui-Modal",
    data() {
      return {
        isVisible1: false,
        isVisible2: false,
        isVisible3: false,
        isVisible4:false,
      }
    },
    methods: {
      ok() {
        console.log("ok")
      },
      cancel() {
        console.log("cancel")
      },
      show(num,show=true) {
        this["isVisible"+num] = show;
      },
      hidden(){
        console.log("隐藏")
      }
    }
  }
</script>

<style scoped>
  button{
    margin: 10px;
  }
</style>
