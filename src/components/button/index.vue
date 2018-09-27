<template>
    <button :disabled="!(disabled===false)" @click="$emit('click')" class="pui-button" :style="buttonStyleString"><svg v-if="!(loading===false)" class="pui-loading-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     width="32" height="32"
     viewBox="0 0 252 252"
     style="fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,252v-252h252v252z" fill="none"></path><g><g id="surface1"><path d="M53.55,119.7c0,12.18164 -9.86836,22.05 -22.05,22.05c-12.18164,0 -22.05,-9.86836 -22.05,-22.05c0,-12.18164 9.86836,-22.05 22.05,-22.05c12.18164,0 22.05,9.86836 22.05,22.05z" :fill="loadingColor"></path><path d="M31.5,100.8c10.40977,0 18.9,8.49023 18.9,18.9c0,10.40977 -8.49023,18.9 -18.9,18.9c-10.40977,0 -18.9,-8.49023 -18.9,-18.9c0,-10.40977 8.49023,-18.9 18.9,-18.9M31.5,94.5c-13.9289,0 -25.2,11.2711 -25.2,25.2c0,13.92891 11.2711,25.2 25.2,25.2c13.92891,0 25.2,-11.27109 25.2,-25.2c0,-13.9289 -11.27109,-25.2 -25.2,-25.2z" :fill="loadingColor"></path><path d="M242.55,119.7c0,6.96445 -5.63555,12.6 -12.6,12.6c-6.96445,0 -12.6,-5.63555 -12.6,-12.6c0,-6.96445 5.63555,-12.6 12.6,-12.6c6.96445,0 12.6,5.63555 12.6,12.6z" :fill="loadingColor"></path><path d="M229.95,110.25c5.21719,0 9.45,4.23281 9.45,9.45c0,5.21719 -4.23281,9.45 -9.45,9.45c-5.21719,0 -9.45,-4.23281 -9.45,-9.45c0,-5.21719 4.23281,-9.45 9.45,-9.45M229.95,103.95c-8.71172,0 -15.75,7.03828 -15.75,15.75c0,8.71172 7.03828,15.75 15.75,15.75c8.71172,0 15.75,-7.03828 15.75,-15.75c0,-8.71172 -7.03828,-15.75 -15.75,-15.75z" :fill="loadingColor"></path><path d="M135.45,22.05c0,3.46992 -2.83008,6.3 -6.3,6.3c-3.46992,0 -6.3,-2.83008 -6.3,-6.3c0,-3.46992 2.83008,-6.3 6.3,-6.3c3.46992,0 6.3,2.83008 6.3,6.3z" fill="#ffffff"></path><path d="M129.15,18.9c1.74727,0 3.15,1.40273 3.15,3.15c0,1.74727 -1.40273,3.15 -3.15,3.15c-1.74727,0 -3.15,-1.40273 -3.15,-3.15c0,-1.74727 1.40273,-3.15 3.15,-3.15M129.15,12.6c-5.21719,0 -9.45,4.23281 -9.45,9.45c0,5.21719 4.23281,9.45 9.45,9.45c5.21719,0 9.45,-4.23281 9.45,-9.45c0,-5.21719 -4.23281,-9.45 -9.45,-9.45z" :fill="loadingColor"></path><path d="M148.05,217.35c0,10.43437 -8.46562,18.9 -18.9,18.9c-10.43438,0 -18.9,-8.46563 -18.9,-18.9c0,-10.43437 8.46563,-18.9 18.9,-18.9c10.43437,0 18.9,8.46563 18.9,18.9z" :fill="loadingColor"></path><path d="M129.15,201.6c8.68711,0 15.75,7.06289 15.75,15.75c0,8.68711 -7.06289,15.75 -15.75,15.75c-8.68711,0 -15.75,-7.06289 -15.75,-15.75c0,-8.68711 7.06289,-15.75 15.75,-15.75M129.15,195.3c-12.18164,0 -22.05,9.86836 -22.05,22.05c0,12.18164 9.86836,22.05 22.05,22.05c12.18164,0 22.05,-9.86836 22.05,-22.05c0,-12.18164 -9.86836,-22.05 -22.05,-22.05z" :fill="loadingColor"></path><path d="M66.15,44.1c0,1.74727 -1.40273,3.15 -3.15,3.15c-1.74727,0 -3.15,-1.40273 -3.15,-3.15c0,-1.74727 1.40273,-3.15 3.15,-3.15c1.74727,0 3.15,1.40273 3.15,3.15z" :fill="loadingColor"></path><path d="M63,37.8c-3.46992,0 -6.3,2.83008 -6.3,6.3c0,3.46992 2.83008,6.3 6.3,6.3c3.46992,0 6.3,-2.83008 6.3,-6.3c0,-3.46992 -2.83008,-6.3 -6.3,-6.3z" :fill="loadingColor"></path><path d="M217.35,189c0,8.68711 -7.06289,15.75 -15.75,15.75c-8.68711,0 -15.75,-7.06289 -15.75,-15.75c0,-8.68711 7.06289,-15.75 15.75,-15.75c8.68711,0 15.75,7.06289 15.75,15.75z" :fill="loadingColor"></path><path d="M201.6,176.4c6.93985,0 12.6,5.66016 12.6,12.6c0,6.93985 -5.66015,12.6 -12.6,12.6c-6.93984,0 -12.6,-5.66015 -12.6,-12.6c0,-6.93984 5.66016,-12.6 12.6,-12.6M201.6,170.1c-10.43437,0 -18.9,8.46562 -18.9,18.9c0,10.43437 8.46563,18.9 18.9,18.9c10.43437,0 18.9,-8.46563 18.9,-18.9c0,-10.43438 -8.46563,-18.9 -18.9,-18.9z" :fill="loadingColor"></path><path d="M211.05,50.4c0,5.21719 -4.23281,9.45 -9.45,9.45c-5.21719,0 -9.45,-4.23281 -9.45,-9.45c0,-5.21719 4.23281,-9.45 9.45,-9.45c5.21719,0 9.45,4.23281 9.45,9.45z" :fill="loadingColor"></path><path d="M201.6,44.1c3.46992,0 6.3,2.83008 6.3,6.3c0,3.46992 -2.83008,6.3 -6.3,6.3c-3.46992,0 -6.3,-2.83008 -6.3,-6.3c0,-3.46992 2.83008,-6.3 6.3,-6.3M201.6,37.8c-6.96445,0 -12.6,5.63555 -12.6,12.6c0,6.96445 5.63555,12.6 12.6,12.6c6.96445,0 12.6,-5.63555 12.6,-12.6c0,-6.96445 -5.63555,-12.6 -12.6,-12.6z" :fill="loadingColor"></path><path d="M85.05,189c0,12.18164 -9.86836,22.05 -22.05,22.05c-12.18164,0 -22.05,-9.86836 -22.05,-22.05c0,-12.18164 9.86836,-22.05 22.05,-22.05c12.18164,0 22.05,9.86836 22.05,22.05z" :fill="loadingColor"></path><path d="M63,170.1c10.40977,0 18.9,8.49023 18.9,18.9c0,10.40977 -8.49023,18.9 -18.9,18.9c-10.40977,0 -18.9,-8.49023 -18.9,-18.9c0,-10.40977 8.49023,-18.9 18.9,-18.9M63,163.8c-13.9289,0 -25.2,11.2711 -25.2,25.2c0,13.92891 11.2711,25.2 25.2,25.2c13.92891,0 25.2,-11.27109 25.2,-25.2c0,-13.9289 -11.27109,-25.2 -25.2,-25.2z" :fill="loadingColor"></path></g></g></g></svg>
     <slot></slot></button>
</template>
<style scoped lang="scss">
.pui-button {
  text-align: center;
  padding: 0 10px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: none;
}
.pui-button:hover {
  opacity: 0.9;
}
.pui-loading-img {
  width: 15px;
  height: 15px;
  vertical-align: -2px;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<script>
export default {
  name: "pui-button",
  props: {
    bgcolor: {
      default: "primary"
    },
    color: {
      default: "#fff"
    },
    shape: {
      default: "angle"
    },
    height: {
      default: "30px"
    },
    loading: {
      default: false
    },
    loadingColor: {
      default: "#fff"
    },
    disabled: {
      default: false
    }
  },
  data() {
    return {
      borderRadius: "",
      backgroundColor: ""
    };
  },
  created() {},
  methods: {
    /**
     * 设置背景颜色
     */
    setBgColor() {
      if (this.bgcolor === "primary") return "#00aaf0";
      else if (this.bgcolor === "success") return "#04be02";
      else if (this.bgcolor === "warning") return "#ffb400";
      else if (this.bgcolor === "danger") return "#ef4f4f";
      else if (this.bgcolor === "disabled") return "#ccc";
      else return this.bgcolor;
    },
    /**
     * 设置圆角
     */
    setBorderRadius() {
      if (this.shape === "angle") return "4px";
      if (this.shape === "circle") return parseInt(this.height) / 2 + "px";
    }
  },
  computed: {
    buttonStyleString() {
      return `background-color:${this.setBgColor()};color:${
        this.color
      };border-radius:${this.setBorderRadius()};
      height:${this.height};cursor:${
        !(this.disabled === false) ? "not-allowed" : "pointer"
      }`;
    }
  }
};
</script> 