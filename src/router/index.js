import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
};

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/main.vue"),
  meta: {title: "iBlogs"}
  },
  {
    path: "/articledetail",
    name: "ArticleDetail",
    component: () => import("../views/articleDetail.vue"),
  meta: {title: "文章详情"}
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/main.vue"),
    meta: {title: "iBlogs"}
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
