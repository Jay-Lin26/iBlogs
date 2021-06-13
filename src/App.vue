<template>
  <div id="app">
    <el-backtop></el-backtop>
    <router-view id="main" />
    <Thefoot></Thefoot>
  </div>
</template>

<script>
import Thefoot from "./components/footer.vue";
export default {
  name: "app",
  components: { Thefoot }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  margin: 0 !important;
}
#main {
  width: 100%;
  height: 100%;
  font-family: Arial, "Microsoft YaHei", "黑体", "宋体", sans-serif !important;
  z-index: 3;
}
.el-message {
  top: 80% !important;
  min-width: 250px !important;
  font-family: Calibri !important;
}
</style>
