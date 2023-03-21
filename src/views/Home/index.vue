<template>
  <!-- 了解歆动 -->
  <video
    class="bg-black z-40"
    autoplay="autoplay"
    poster="https://msecfs.opposhop.cn/commons-media-picture/GOODS/20230309/60da4e9b9a478b7f7c164d4230c89f741316597789.jpg?_w_=1080&amp;_h_=1080"
    controlslist="nodownload noremoteplayback"
    disablepictureinpicture="true"
    src="https://dsfs.oppo.com/omp/1656590523220-_-64127fffedb84ba28bc27e49f6cb75b9.mp4"
    muted="muted"
    data-v-190339bb=""
    loop
  ></video>
  <div class="bg-cover">
    <img :src="homeImg" loading="lazy" alt="首页背景图片" />
  </div>
</template>

<script setup>
import homeImg from "@/assets/img/home_bg.png";

</script>