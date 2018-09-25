<template>
<div class="pui-textarea">
    <div contenteditable="true" 
    :style="`min-height:${this.minHeight};max-height:${this.maxHeight}`" 
    :placeholder="placeholder" class="pui-textarea-input" :class="value?'pui-placeholder_hide':''" @input="input" ref="puiTextArea" @focus="focus=true" @blur="blur">
    </div>
    <div class="pui-textarea-counter" :style="value.length==maxLength?'color:red':''">{{value.length}}/{{maxLength}}</div>
</div>

</template>
<style scoped>
.pui-textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 15px;
  color: #333;
  position: relative;
}
.pui-textarea-input {
  overflow: auto;
}
.pui-textarea-input:before {
  content: attr(placeholder);
  color: #aaa;
}

.pui-placeholder_hide::before {
  display: none;
}
.pui-textarea-counter {
  position: relative;
  bottom: 0;
  text-align: right;
  color: #aaa;
  font-size: 13px;
  line-height: 15px;
  margin-top: 4px;
}
</style>

<script>
export default {
  name: "pui-textarea",
  props: {
    value: {},
    placeholder: {},
    maxLength: {
      default: "infinite"
    },
    counter: {
      default: false
    },
    minHeight: {},
    maxHeight: {},
    lengthCallback:{
        default:function(){}
    }
  },
  data() {
    return {
      focus: false
    };
  },
  methods: {
    input(e) {
      if (
        this.maxLength == "infinite" ||
        e.target.innerText.length <= parseInt(this.maxLength)
      ) {
        this.$emit("input", e.target.innerText);
      } else {
          this.lengthCallback();
        e.target.innerText = e.target.innerText.substr(
          0,
          parseInt(this.maxLength)
        );
      }
    },
    blur() {
      this.focus = false;
      let el = document.getElementsByClassName("pui-textarea-input")[0];
      el.innerText = this.value;
    }
  },
  watch: {
    value() {
      if (!this.focus) {
        let el = document.getElementsByClassName("pui-textarea-input")[0];
        el.innerText = this.value;
      }
      //   if (window.getSelection) {
      //     var range = document.createRange();
      //     range.selectNodeContents(el);
      //     range.collapse(false);
      //     var sel = window.getSelection();
      //     sel.removeAllRanges();
      //     sel.addRange(range);
      //   } else {
      //     var rng;
      //     el.focus();
      //     rng = document.selection.createRange();
      //     rng.moveStart("character", -el.innerText.length);
      //     var text = rng.text;
      //     for (var i = 0; i < el.innerText.length; i++) {
      //       if (
      //         el.innerText.substring(0, i + 1) ==
      //         text.substring(text.length - i - 1, text.length)
      //       ) {
      //         result = i + 1;
      //       }
      //     }
      //   }
      console.log("last:", this.value);
    }
  }
};
</script>