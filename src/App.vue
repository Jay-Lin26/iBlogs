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
#app {
  font-family: "STXihei";
}
#main {
  background-color: #f7f7f7;
  margin-top: 100px;
}
.el-message {
  top: 80% !important;
  min-width: 250px !important;
  font-family: Calibri !important;
}
</style>
