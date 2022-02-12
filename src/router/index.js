import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index"),
    meta: { title: "iBlogs" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about"),
    meta: { title: "关于我" },
  },
  {
    path: "/articledetail/:id",
    name: "ArticleDetail",
    component: () => import("@/views/articleDetail"),
    meta: { title: "文章详情" },
  },
  {
    path: "/category",
    name: "category",
    component: () => import("@/views/category"),
    meta: { title: "分类" },
  },
  {
    path: "/search/:name",
    name: "search",
    component: () => import("@/views/search"),
    meta: { title: "搜索" },
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: () => import("@/views/error"),
    meta: { title: "页面找不到了！！！" },
  },
  {
    path: "/bms/",
    name: "bms",
    component: () => import("@/views/bms"),
    meta: { title: "页面找不到了！！！" },
    children: [
      {
        path: 'pageone',
        component: () => import("@/components/bms/table"),
      },
      {
        path: 'pagetwo',
        component: () => import("@/components/bms/tabletwo"),
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0 }
  },
});

export default router;
