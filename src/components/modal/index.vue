<template>
  <div class="pui-wrap">
    <transition name="ease">
      <div v-if="mask" v-show="visible" class="pui-mask" :style="{zIndex:zIndex-1}" @click="onCancel"></div>
    </transition>
    <transition name="fade" @after-leave="animationFinish">
      <div v-show="visible" v-transfer-dom class="pui-modal" :style="wrapStyles" :data-transfer="transfer">
        <div>
          <slot name="header">
            <div class="pui-header" v-if="title">
              <span>{{ title }}</span><span class="cancel" @click="onCancel">×</span>
            </div>
          </slot>

        </div>
        <div class="pui-content">
          <slot></slot>
        </div>
        <div>
          <slot name="footer">
            <div class="pui-footer">
              <pui-button v-if="typeof onCancel === 'function'" style="margin-right:5px;" @click="onCancel">{{ CancelText }}</pui-button>
              <pui-button @click="onOk">{{ OkText }}</pui-button>
            </div>

          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Vue from "vue";
  import TransferDom from '../../directives/transfer-dom';
  import Button from '@/components/button'
  import PuiButton from "../button/index";

  Vue.component(Button.name, Button);
  export default {
    name: "pui-modal",
    components: {PuiButton},
    directives: {TransferDom},
    props: {
      value: {
        type: Boolean,
      },
      OkText: {
        type: String,
        default: "好的"
      },
      CancelText: {
        type: String,
        default: "取消"
      },
      title: {
        type: String
      },
      okText: {
        type: String
      },
      cancelText: {
        type: String
      },
      transfer: {
        type: Boolean,
        default: true
      },
      width: {
        type: [Number, String],
        default: 520
      },
      styles: {
        type: Object
      },
      mask: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: Number,
        default: 1000
      },
      isVisible: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // console.log(this.value)
    },
    data() {
      return {
        visible: this.value,
      }
    },
    methods: {
      onOk() {
        this.hide();
        this.$emit("on-ok")
      },
      onCancel() {
        this.hide();
        this.$emit("on-cancel")
      },
      hide() {
        // console.log(this.value);
        this.$emit('input', false);
      },
      animationFinish() {
        this.$emit('on-hidden');
      },
    },

    computed: {

      wrapStyles() {
        return Object.assign({
          zIndex: this.zIndex,

          width: this.width + "px"
        }, this.style);
      },
      // wrapClasses () {
      //   return [
      //     // `${prefixCls}-wrap`,
      //     // {
      //     //   [`${prefixCls}-hidden`]: !this.wrapShow,
      //     //   [`${this.className}`]: !!this.className,
      //     //   [`${prefixCls}-no-mask`]: !this.showMask
      //     // }
      //   ];
      // },
    },
    watch: {
      value(val) {
        this.visible = val;
      },
    }
  }
</script>

<style scoped>
  .cancel{
    font-size: 20px;
    cursor: pointer;
  }


  .pui-modal {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    background-color: #fff;

    border-radius: 6px;
    background-clip: padding-box;
    box-shadow: 0 4px 12px rgba(0,0,0,.15);
  }

  .pui-header {
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
    border-bottom: 1px solid #ddd;
    align-items: center;
  }

  .pui-footer {
    margin: 5px 10px;
    padding-top: 5px;
    display: flex;
    justify-content: flex-end;
    /*height: 20px;*/
    border-top: 1px solid #ddd;
  }

  .pui-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55, 55, 55, .6);
    height: 100%;
  }

  .pui-content {
    padding: 10px 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
