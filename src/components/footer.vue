<template>
  <div id="ft">
    <div class="ft-box">
      <div class="ft-main">
        <div class="ft-image"><div></div></div>
        <div class="ft-image"><div></div></div>
        <div class="ft-des">
          <p>User Story Choice</p>
          <p>is more important than effort</p>
        </div>
        <div class="ft-des">
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Common Problems</p>
        </div>
      </div>
      <div class="ft-copy">Copyright @ 2020-2021 Linse Designed by Linse</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ft",
};
</script>

<style>
#ft {
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "STXihei";
}
.ft-box {
  font-size: 14px;
  width: 1000px;
  /* height: 150px; */
  margin: 0 auto;
}
.ft-main {
  display: flex;
  height: 120px;
  padding-top: 10px;
}
.ft-des {
  width: 25%;
  color: #f1f1f1;
  text-align: center;
  line-height: 25px;
  word-break: break-word;
}
.ft-image div {
  width: 110px;
  height: 110px;
  margin: auto;
  border-radius: 4px;
  background: url("https://pic.imgdb.cn/item/60abc01a2a0bae8e0ce9b225.png");
  background-size: cover;
}
.ft-image {
  width: 25%;
  height: 110px;
}
.ft-copy {
  color: #f1f1f1;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
