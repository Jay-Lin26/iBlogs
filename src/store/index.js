import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //登录成功后的用户名
    UserName: sessionStorage.getItem("username"),
    //控制登录、注册页面的打开和关闭
    PageStatus: "",
  },
  mutations: {
    //获取用户名事件
    setname(state, name) {
      state.username = name;
      sessionStorage.setItem("username", name);
    },
    //获取登录、注册页面开和关事件
    changePage(state, status) {
      state.PageStatus = status;
    },
  },
  actions: {},
  modules: {},
});
