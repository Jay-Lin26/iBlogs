<template>
  <div id="app">
      <router-view id="main"/>
  </div>
</template>

<script>
export default {
	name: "app",
}
</script>

<style>
html, body {
	width: 100%;
	height: 100%;
	margin: 0 !important;
}
#app {
  font-family: "Avenir Next", Calibri, "SF Pro Text", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "Helvetica Neue", Helvetica, Arial, sans-serif, "楷体"}
#main {
	background-color: #f7f7f7;
  margin-top: 100px;
}
.el-message{
  top: 80% !important;
  min-width: 250px !important;
  font-family: Calibri !important;
}
</style>
