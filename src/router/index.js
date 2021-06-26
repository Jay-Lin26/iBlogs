import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index";
import ArticleDetail from "../views/articleDetail";
import Category from "../views/category"
import About from "../views/about";
import ErrorPage from "../components/error";

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
    path: "/about",
    name: "about",
    component: About,
    meta: { title: "关于我" },
  },
  {
    path: "/articledetail/:id",
    name: "ArticleDetail",
    component: ArticleDetail,
    meta: { title: "文章详情" },
  },
  {
    path: "/category",
    name: "category",
    component: Category,
    meta: { title: "分类" },
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: ErrorPage,
    meta: { title: "页面找不到了！！！" },
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
