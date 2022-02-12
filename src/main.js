import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import message from "./utils/common";
import { Backtop, Icon, Container, Button, Table, TableColumn, Aside, Menu, Submenu, MenuItemGroup, MenuItem, DropdownItem, Header, Main, Dropdown, DropdownMenu,
         Input,
        } from "element-ui"; 

Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Container)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(DropdownItem)
Vue.use(Header)
Vue.use(Main)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(Input)
Vue.prototype.$msgs = message.msgBox
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted () {
    window.Vue = this;
  }
}).$mount("#app");
