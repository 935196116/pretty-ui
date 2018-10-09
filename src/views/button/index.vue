<template>
    <div>

        <div class="center">
          <h1>按钮</h1>
          <h2 class="title">概述</h2>
          <div class="intro">
            按钮样式组件，提供5种颜色和2种形状，支持自定义颜色，自定义大小，可显示阴影和加载图标。
          </div>
        <h2 class="title">代码示例</h2>
          <pui-frame title="按钮颜色" class="frame">
            <div class="frame-item">
              六种自带 bgcolor：          
              <pui-button>primary</pui-button>
              <pui-button bgcolor="success">success</pui-button>
              <pui-button bgcolor="warning">warning</pui-button>
              <pui-button bgcolor="danger">danger</pui-button>
              <pui-button bgcolor="disabled">disabled</pui-button>
            </div>
            <div class="frame-item">
              自定义 bgcolor：
              <pui-button bgcolor="#123456">#123456</pui-button>
              <pui-button bgcolor="purple">purple</pui-button>
              <pui-button bgcolor="pink">pink</pui-button>
            </div>
            <div class="frame-item">
              自定义文字 color：
              <pui-button color="yellow">yellow</pui-button>
              <pui-button color="#000" bgcolor="#f0f0f0">#000</pui-button>
              <pui-button color="red" bgcolor="green">red</pui-button>
            </div>
            <div class="frame-item">
              阴影效果 shadow：
              <pui-button bgcolor="pink" shadow>shadow</pui-button>
              <pui-button bgcolor="success" shadow>shadow</pui-button>
            </div>
          </pui-frame>
          <pui-frame title="按钮形状/大小" class="frame">
            <div class="frame-item">
              自定义高度 height：
              <pui-button height="40px">40px</pui-button>
              <pui-button height="60px" bgcolor="danger">有点大的60px</pui-button>
              <pui-button height="20px" bgcolor="success">细细的20px</pui-button>
            </div>
            <div class="frame-item">
              按钮形状 shape：
              <pui-button shape="angle" bgcolor="success">angle</pui-button>
              <pui-button shape="circle" bgcolor="pink">circle</pui-button>
              <pui-button shape="circle" height="40px">高度圆角一起变~</pui-button>
            </div>
          </pui-frame>
          <pui-frame title="按钮状态" class="frame">
            <div class="frame-item">
              显示加载图标 loading：
              <pui-button loading bgcolor="warning">确定</pui-button>
              <pui-button loading>加载中</pui-button>
            </div>
            <div class="frame-item">
              加载图标颜色 loading-color：
              <pui-button loading loading-color="yellow" color="yellow">yellow</pui-button>
              <pui-button loading loading-color="black" color="black" bgcolor="disabled">black</pui-button>
            </div>
            <div class="frame-item">
              禁用按钮 disabled：
              <pui-button disabled bgcolor="danger">禁用按钮</pui-button>
            </div>
            <div class="frame-item">
              loading&disabled配合使用：
              <pui-button :disabled="loading_first" :loading="loading_first" @click="clickDisabled_first">保存</pui-button>
              <pui-button :disabled="loading_second" bgcolor="success" :loading="loading_second" @click="clickDisabled_second">{{loading_second?'加载中':'确定'}}</pui-button>
            </div>
          </pui-frame>
          <h2 class="title">API</h2>
          <h3><strong>pui-button</strong>【props】</h3>
          <pui-table :title="title" :rows="rows" class="table"></pui-table>
        </div>
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
import Frame from "@/components/frame";
import Collapse from "@/components/collapse";
import Table from "@/components/table";

Vue.component(Frame.name, Frame);
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
export default {
  name: "button",
  data() {
    return {
      loading_first: false,
      loading_second: false,
      show: false,
      title: ["参数", "说明", "可选值", "默认值"],
      rows: [
        [
          "bgcolor",
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
  methods: {
    test() {
      this.show = !this.show;
    },
    clickDisabled_first() {
      this.loading_first = true;
      setTimeout(() => {
        this.loading_first = false;
      }, 1000);
    },
    clickDisabled_second() {
      this.loading_second = true;
      setTimeout(() => {
        this.loading_second = false;
      }, 1000);
    }
  },
  watch: {}
};
</script>