import Vue from 'vue'
import IconSvg from "@/components/IconSvg"

Vue.component('icon-svg', IconSvg)

// webpack require.context 自动加载
// https://webpack.js.org/guides/dependency-management/#require-context
// 参数：目录、递归子文件夹、匹配模式
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
