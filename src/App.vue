<template>
  <div id="app">
    <router-view id="main" :key='$route.fullPath'/>
    <el-backtop></el-backtop>
    <Register v-show="this.$store.state.PageStatus"></Register>
  </div>
</template>

<script>
import Register from "./components/register.vue";
export default {
  name: "app",
  components: { Register }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  margin: 0 !important;
}
/* 滚动条样式 */
body::-webkit-scrollbar{
	width: 6px;
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0,0,0,0.2);
}
/* 主题色 #0FB4A9
   悬浮色 #13DBCE
*/
#main {
  width: 100%;
  height: 100%;
  font-family: Arial, "Microsoft YaHei", "黑体", "宋体", sans-serif !important;
  z-index: 0;
  /* user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; */
}
.el-message {
  top: 80% !important;
  min-width: 250px !important;
  font-family: Calibri !important;
}
.el-backtop {
  color: #0FB4A9;
}
</style>
