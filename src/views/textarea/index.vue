<template>
    <div>
        <div class="center">
          <h1>多行文本域</h1>
          <h2 class="title">概述</h2>
          <div class="intro">
            高度自适应的多行文本域，渲染为可编辑的div模块，支持对高度、长度限制，可显示计数器。
          </div>
          <pui-frame title="文本显示" class="frame">
            <div class="frame-item">
              <div style="width:20%">双向绑定 v-model(必填)：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value1"></pui-textarea>
                <div v-html="value1" style="padding-left:7px;font-size:15px;white-space:pre"></div>
              </div>
            </div>
            <div class="frame-item">
              <div style="width:20%">占位字符 placeholder：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value5" placeholder="请输入文字..."></pui-textarea>
                <div v-html="value5" style="padding-left:7px;font-size:15px;white-space:pre"></div>
              </div>
            </div>
          </pui-frame>
          <pui-frame title="长度限制" class="frame">
           <div class="frame-item">
              <div style="width:20%">最大长度限制 max-length：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value2" max-length="10"></pui-textarea>
              </div>
            </div>
            <div class="frame-item">
              <div style="width:20%">显示计数器 counter：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value3" max-length="10" counter></pui-textarea>
              </div>
            </div>
            <div class="frame-item">
              <div style="width:20%">长度超出限制回调 lengthCallback：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value4" max-length="10" counter @lengthCallback="showModel=true"></pui-textarea>
              </div>
            </div>
          </pui-frame>
          <pui-frame title="自定义高度" class="frame">
           <div class="frame-item">
              <div style="width:20%">最小高度 min-height：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value6" min-height="50px"></pui-textarea>
              </div>
            </div>
            <div class="frame-item">
              <div style="width:20%">最大高度 max-height：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value7" max-height="80px"></pui-textarea>
              </div>
            </div>
            <div class="frame-item">
              <div style="width:20%">二者合并使用：</div>
              <div style="width:80%;">
                <pui-textarea v-model="value8" min-height="50px" max-height="80px"></pui-textarea>
              </div>
            </div>
          </pui-frame>
        <h2 class="title">API</h2>
          <h3><strong>pui-button</strong>【props】</h3>
          <pui-table :title="title" :rows="rows" class="table"></pui-table>
        </div>
        <pui-modal  v-model="showModel" title="提示">
          <p>字符超出长度限制~</p>
        </pui-modal>
    </div>
</template>
<style lang="scss" scoped>
.center {
  width: 70%;
  padding: 0 20px;
  min-width: 800px;
  margin: 0 auto;

  h1 {
    margin: 10px 0 0px -15px;
    color: #444;
    font-size: 24px;
    font-weight: 400;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #444;
    margin: 30px 0 10px -15px;
  }
  h3 {
    font-size: 15px;
    font-weight: 400;
    color: #444;
    strong {
      font-size: 16px;
    }
  }
}
.intro {
  font-size: 15px;
  color: #555;
}
.frame {
  font-size: 14px;
  color: #666;
  margin: 25px 0;
  .frame-item {
    margin: 10px 0 10px 0;
    display: flex;
  }
}
.table {
  width: 100%;
  margin: 20px 0;
}
</style>

<script>
import Vue from "vue";
import Button from "@/components/button";
import Textarea from "@/components/textarea";
import Frame from "@/components/frame";
import Collapse from "@/components/collapse";
import Table from "@/components/table";
import Modal from "@/components/modal";

Vue.component(Frame.name, Frame);
Vue.component(Textarea.name, Textarea);
Vue.component(Table.name, Table);
Vue.component(Modal.name, Modal);
export default {
  name: "textarea",
  data() {
    return {
      value1: `这是一个高度自适应的文本域~
可以换行~
可   以   空   格   ~`,
      value2: "最多只能输入十个字噢",
      value3: "右下角显示计数器",
      value4: "字符超出长度回调",
      value5: "",
      value6: "初始高度50px",
      value7: "最\n大\n高\n度\n80px",
      value8: "最小50px\n最大80px\n不信你就试试",
      showModel: false,
      title: ["参数", "说明", "可选值", "默认值"],
      rows: [
        [
          "v-model",
          "按钮背景色",
          "primary/success/waring/danger/disabled/颜色String",
          "primary"
        ],
        ["color", "按钮颜色", "颜色String", "#fff"],
        ["height", "按钮高度", "高度String", "30px"],
        ["shape", "按钮形状", "angle", "angle/circle"],
        ["loading", "加载图标", "false", "false/非false"],
        ["loading-color", "加载图标颜色", "#fff", "颜色String"],
        ["disabled", "禁用按钮(带禁用指针图标)", "false", "false/非false"]
      ]
    };
  },
  created() {},
  methods: {},
  watch: {}
};
</script>