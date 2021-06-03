<template>
  <div id="app">
    <router-view id="main" />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 !important;
}
#main {
  background-color: #f7f7f7;
  margin-top: 100px;
  font-family: Calibri, "Microsoft YaHei", "黑体", "宋体", sans-serif;
  min-height: 100vh;
  z-index: 3;
}
.el-message {
  top: 80% !important;
  min-width: 250px !important;
  font-family: Calibri !important;
}
</style>
