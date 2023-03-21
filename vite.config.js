import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createSvg} from './src/components/icons/index' //svg
//import legacy from '@vitejs/plugin-legacy'
//import path from 'path' // 需要引入 path
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvg('./src/assets/svg/'), //svg文件夹目录
  ],
  resolve:{
    alias:{
      '@assets':'/src/assets',
      '@':'/src',
      '@components':'/src/components'
    }
  },
  publicPath: './src'
})
