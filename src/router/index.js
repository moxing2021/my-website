import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

      {
        path: "/",
        name: "home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "了解我们",
        },
      },
      {
        path: "/product",
        name: "product",
        component: () => import("@/views/Product/index.vue"),
        meta: {
          title: "产品介绍",
        },
      },
      {
        path: "/cooperate",
        name: "cooperate",
        component: () => import("@/views/Cooperate/index.vue"),
        meta: {
          title: "商家合作",
        },
      },
      {
        path: "/news",
        name: "news",
        component: () => import("@/views/News/index.vue"),
        meta: {
          title: "新闻动态",
        },
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/Contact/index.vue"),
        meta: {
          title: "联系我们",
        },
      }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'my-active',
  routes,
});

export default router;
