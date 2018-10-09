<template>
<div class="pui-textarea" :style="`border-color:${this.focus?'#a0ccfb':''}`">
    <div contenteditable="true" 
    :style="`min-height:${this.minHeight};max-height:${this.maxHeight};`" 
    :placeholder="placeholder" class="pui-textarea-input" ref="puiTextareaInput" :class="value?'pui-placeholder_hide':''" @input="input" @focus="focus=true" @blur="blur">
    </div>
    <div v-if="!(counter===false)" class="pui-textarea-counter" :style="value.length==maxLength?'color:red':''">{{value.length}}/{{maxLength}}</div>
</div>

</template>
<style scoped>
.pui-textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 15px;
  position: relative;
  width: 100%;
}
.pui-textarea-input {
  overflow: auto;
  white-space: pre;
}
.pui-textarea-input:before {
  content: attr(placeholder);
  color: #aaa;
  font-size: 15px;
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
    minHeight: {
      default:"unset"
    },
    maxHeight: {
      default:"unset"
    }
  },
  data() {
    return {
      focus: false
    };
  },
  mounted() {
    let el = this.$refs.puiTextareaInput;
    el.innerText = this.value;
  },
  methods: {
    input(e) {
      if (
        this.maxLength == "infinite" ||
        e.target.innerText.length <= parseInt(this.maxLength)
      ) {
        this.$emit("input", e.target.innerText);
      } else {
        this.$emit("lengthCallback",e.target.innerText);
        e.target.innerText = this.value;
      }
    },
    blur() {
      this.focus = false;
      let el = this.$refs.puiTextareaInput;
      el.innerText = this.value;
    }
  },
  watch: {
    value() {
      if (!this.focus) {
        let el = this.$refs.puiTextareaInput;
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
    }
  }
};
</script>