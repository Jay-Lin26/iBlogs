<template>
  <div id="frontpage">
    <div class="main">
      <div class="avatar"></div>
      <div class="name"></div>
      <div class="inturduce"></div>
      <div class="callme"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "frontpage",
};
</script>

<style>
.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  background: url("../assets/bgimg/avatar.jpg");
  background-size: cover;
}
.main {
  min-height: 100vh;
  width: auto;
  background: url("../assets/bgimg/front.jpg");
  background-size: cover;
}
</style>
