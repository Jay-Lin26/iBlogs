import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index";
import ArticleDetail from "../views/articleDetail";
import Register from "../components/register";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: { title: "iBlogs" },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { title: "登录/注册" },
  },
  {
    path: "/articledetail",
    name: "ArticleDetail",
    component: ArticleDetail,
    meta: { title: "文章详情" },
  },
  {
    path: "/main",
    name: "Main",
    component: Index,
    meta: { title: "iBlogs" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
