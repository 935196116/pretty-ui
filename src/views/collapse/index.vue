<template>
    <div>
        <div class="center">
          <h1>展开折叠组件</h1>
          <h2 class="title">概述</h2>
          <div class="intro">
            点击标题可展开/折叠内容，可自定义标题，自定义动画时间，自定义点击事件。
          </div>
          <pui-frame title="基本使用" class="frame">
            <div class="frame-item">
              <div style="width:20%">
                  <div>默认样式标题 title：</div>
              </div>
              <div style="width:80%;">
                <pui-collapse title="测试">
                    <div style="padding:10px">
                        <div>哈哈</div>
                        <div>哈哈</div>
                        <div>哈哈</div>
                        <div>哈哈</div>
                        <div>哈哈</div>
                        <div>哈哈</div>
                    </div>
                </pui-collapse>
              </div>
            </div>
          </pui-frame>
          <pui-frame title="自定义样式" class="frame">
           <div class="frame-item">
              <div style="width:20%">标题【slot】title：</div>
              <div style="width:80%;">
                <pui-collapse>
                    <div slot="title" style="background-color:#cceaf7;padding:10px">自定义标题</div>
                    <div>
                        <div style="white-space:pre-line;padding:10px;background-color:#eaf8fb">这是一段
                            很长很长
                            很高很高
                            的
                            内容
                            ~~
                            ~~
                        </div>
                    </div>
                </pui-collapse>
              </div>
            </div>
            <div class="frame-item">
              <div style="width:20%">动画时间 duration：</div>
              <div style="width:80%;">
                <pui-collapse title="缓慢地展开" duration="1200">
                    <div style="white-space:pre-line;padding:10px;">
                        <img src="http://oss.tan8.com/resource/data/attachment/20161103154535.jpg">
                    </div>
                </pui-collapse>
              </div>
            </div>
          </pui-frame>
          <pui-frame title="树形结构" class="frame">
           <div class="frame-item">
              <div style="width:20%">可用做多级标题，直接嵌套使用：</div>
              <div style="width:80%;">
                <pui-collapse title="一级标题">
                    <div style="padding:10px">
                        <pui-collapse title="二级标题">
                            <div style="padding:10px">
                                <pui-collapse title="三级标题">
                                    <div style="padding:10px">
                                        <div>商品名1</div>
                                        <div>商品名2</div>
                                        <div>商品名3</div>
                                    </div>
                                </pui-collapse>
                            </div>
                        </pui-collapse>
                    </div>
                </pui-collapse>
              </div>
            </div>
          </pui-frame>
           <pui-frame title="手动控制展开" class="frame">
           <div class="frame-item">
              <div style="width:20%;padding-right:5px">传入绑定变量 show，组件将不再自动展开折叠，而由父组件监听click事件改变展开状态</div>
              <div style="width:80%;">
                <pui-collapse :title="'监听click，改变show变量状态，由父组件操作可制作手风琴效果'" :show="item" v-for="(item,index) in show" :key="index" @click="clickCollapse(index)">
                    <div style="padding:10px">
                        <img src="http://oss.tan8.com/resource/data/attachment/20161103154535.jpg">
                    </div>
                </pui-collapse>
              </div> 
            </div>
          </pui-frame>
        <h2 class="title">API</h2>
          <h3><strong>pui-button</strong>【props】</h3>
          <pui-table :title="title1" :rows="rows1" class="table"></pui-table>
          <h3><strong>pui-button</strong>【slot】</h3>
          <pui-table :title="title2" :rows="rows2" class="table"></pui-table>
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

Vue.component(Frame.name, Frame);
Vue.component(Table.name, Table);
Vue.component(Collapse.name, Collapse);
export default {
  name: "textarea",
  data() {
    return {
      show: [true, false, false, false, false],
      title1: ["参数", "说明", "可选值", "默认值"],
      rows1: [
        ["title", "默认样式标题", "String", "-"],
        ["duration", "动画时间", "Number(单位毫秒)", "500"],
        [
          "show",
          "无该属性则组件自动展开折叠，有绑定值则由父元素控制",
          "-/true/false",
          "-"
        ]
      ],
      title2: ["name", "描述"],
      rows2: [
          ["title","自定义标题"],
          ["-","内容"]
      ]
    };
  },
  created() {},
  methods: {
    clickCollapse(index) {
      if (this.show[index] == false) {
        for (let i in this.show) {
          this.show[i] = false;
        }
        this.show[index] = true;
      } else {
        this.show[index] = false;
      }
      this.show.push();
    }
  },
  watch: {}
};
</script>