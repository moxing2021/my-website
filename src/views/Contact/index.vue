<template>
    <!-- 联系我们 -->
    <div class="bg-cover">
        <img :src="homeImg" loading="lazy" alt="首页背景图片" />
        <div :class="modulecss">modulescss</div>
        <div @click="changeColor">删除</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import homeImg from '@/assets/img/home_bg.png'
import classes from '@assets/.test.module.css'
const {moduleCalss,modulcFont} = classes
const modulecss = ref([
moduleCalss,
modulcFont
])
const changeColor = ()=>{
    modulecss.value.shift(moduleCalss)
    console.log(modulecss);
}

</script>

<style scoped>
/* .read-the-docs {
  color: #888;
  font-size: ;
} */
</style>