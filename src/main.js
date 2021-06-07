import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import message from "./utils/common";
import { Backtop, Icon } from "element-ui";

Vue.use(Backtop);
Vue.use(Icon);
Vue.prototype.$msgs = message.msgBox;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted () {
    window.Vue = this;
  }
}).$mount("#app");
