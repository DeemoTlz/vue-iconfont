<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
// 导入从 iconfont 下载的 .js 文件，单不方便后期修改替换图标
// import '../assets/iconfont/js/iconfont.js'
// 下载单个 .svg 图标，但图标太多不麻烦吗？
// import '@/assets/iconfont/icons/ok.svg'
// import '@/assets/iconfont/icons/xiaolian.svg'
// import '@/assets/iconfont/icons/fengche.svg'
// 借用 webpack require.context 自动加载后，无需再手动导入

export default {
  name: "icon-svg",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'icon-svg ' + this.className;
      } else {
        return 'icon=svg'
      }
    }
  }
}
</script>

<style scoped>
  .icon-svg {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
