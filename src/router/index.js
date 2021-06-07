import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index";
import ArticleDetail from "../views/articleDetail";
import FrontPage from "../views/frontPage";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "frontPage",
    component: FrontPage,
    meta: { title: "iBlogs" },
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    meta: { title: "首页" },
  },
  {
    path: "/articledetail/:id",
    name: "ArticleDetail",
    component: ArticleDetail,
    meta: { title: "文章详情" },
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
