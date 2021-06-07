<template>
  <div id="frontpage">
    <div class="main">
      <div class="box">
        <div class="avatar"></div>
        <div class="name">{{ myName }}</div>
        <div class="callme">
          <div class="icon-w"></div>
          <div class="icon-q"></div>
          <div class="icon-g"></div>
          <div class="icon-e"></div>
        </div>
        <div class="inturduce">{{ inturduce }}</div>
        <div class="info">
          <p>“世界很小，”</p>
          <p>“城市很大，”</p>
          <p>“欠缺缘分的人也许....”</p>
          <p>“终生也不会再见了。”</p>
          <p style="margin-left: 100px">————闲人有闲</p>
        </div>
        <div class="nav-bar">
          <div class="nav-index" @click="indexclick(1)">首页</div>
          <div class="nav-category" @click="indexclick(2)">分类</div>
          <div class="nav-music" @click="indexclick(3)">音乐盒</div>
          <div class="nav-about" @click="indexclick(4)">关于我</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "frontpage",
  data: function () {
    return {
      myName: "Linse Zhou",
      inturduce: "想要做到不可替代，你就必须与众不同！"
    }
  },
  methods: {
    indexclick: function ( page ) {
      switch (page) {
        case 1:
          this.$router.push('/index')
          break;
        case 2:
          this.$router.push('/articledetail/1')
          break;
        case 3:
          this.$router.push('/')
          break;
        case 4:
          this.$router.push('/')
          break;
      }
    },
  }
};
</script>

<style>
.nav-index:hover, .nav-category:hover, .nav-music:hover, .nav-about:hover{ color: peachpuff; }
.nav-index, .nav-category, .nav-music, .nav-about {
  width: 70px;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  font-weight: 500;
  font-family: "楷体";
  margin-right: 20px;
  border-radius: 15px;
  border: 1px solid;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.nav-bar {
  width: 360px;
  height: auto;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
}
.info {
  color: #ffffff;
  font-size: 22px;
  font-family: "楷体";
}
.inturduce {
  width: 520px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding-bottom: 5px;
  border-bottom: 1px solid;
  color: white;
  font-size: 25px;
  font-weight: 350;
  font-family: "楷体";
}
.icon-e {background: url("../assets/front-icon/email.png") #ffffff;}
.icon-q {background: url("../assets/front-icon/QQ.png") #ffffff;}
.icon-g {background: url("../assets/front-icon/github.png") #ffffff;}
.icon-w {background: url("../assets/front-icon/weixin.png") #ffffff;}
.icon-w, .icon-g, .icon-q, .icon-e{
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-left: 50px;
}
.callme {
  display: flex;
  height: auto;
  width: 370px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.name {
  color: white;
  font-size: 30px;
  font-weight: 700;
  font-family: "楷体";
  border-bottom: 1px;
  margin-bottom: 20px;
}
.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 50%;
  background: url("../assets/front-img/avatar.png");
  background-size: cover;
}
.box {
  width: 600px;
  height: 600px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: #111846;
  background: url("https://pic.imgdb.cn/item/60bb95b68355f7f7188c56f2.jpg");
  background-size: cover;
}
</style>
