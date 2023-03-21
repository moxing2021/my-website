<template>
      <div class="fixed w-full px-4 md:px-8 mx-auto z-50">
        <!-- 导航-start -->
        <header class="flex justify-between items-center">
          <!-- 左边-logo -->
          <a href="#" class="py-3">
            <svg-icon
              style="width: 65.1px; height: 25.2px"
              name="logo"
            ></svg-icon>
          </a>
          <!-- 右边-导航菜单 -->
          <nav class="hidden lg:flex">
            <a
              href="#"
              v-for="a in datas.nav.navList"
              :key="a.id"
              class="text-white pl-10 hover:text-red-600 text-lg font-semibold transition duration-100"
            >
              <router-link :to="a.path">{{ a.title }}</router-link>
            </a>
          </nav>
          <!-- Menu - start -->
          <button
            type="button"
            class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
  
            菜单
          </button>
        </header>
        <!-- 导航-start -->
      </div>
  </template>
  
  <script setup>
  import { onBeforeMount, ref } from "vue";
  import { getNav } from "@/api/login.js";
  // 数据
  const datas = ref({
    nav: {},
  });
  onBeforeMount(() => {
    getNavList();
  });
  const getNavList = async () => {
    const res = await getNav();
    datas.value.nav = res;
    console.log(res);
  };
  </script>
  <style lang="scss" scoped>
  .my-active {
    color: #dc2626;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
  }
  </style> 