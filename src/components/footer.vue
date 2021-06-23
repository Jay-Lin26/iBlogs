<template>
  <div id="ft">
    <div class="ft-box">
      <div class="ft-main">
        <div class="ft-image"><div></div></div>
        <div class="ft-image"><div></div></div>
        <div class="ft-des">
          <p>用户故事</p>
          <p>&</p>
          <p>选择比努力更重要</p>
        </div>
        <div class="ft-des">
          <p>关于我们</p>
          <p>隐私协议</p>
          <p>常见问题</p>
        </div>
      </div>
      <div class="beian">
        <div class="ba-icon"></div>
        <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2021011096号-1</a>
      </div>
      <div class="ft-copy">Copyright @ 2020-2021 Designed by Linse</div>
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
  background-color: rgba(0, 0, 0, 0.9);
  border-top: 1px solid #eee;
  font-family: "STXihei";
}
.ft-box {
  font-size: 10px;
  width: 1000px;
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
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.beian {
  position: relative;
  height: 30px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 1px;
}
.ba-icon {
  position: absolute;
  left: 400px;
  width: 30px;
  height: 30px;
  background: url("../assets/front-icon/备案.png");
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center;
}
.beian a {
  text-decoration: none;
  color: #d5a13d;
}
</style>
