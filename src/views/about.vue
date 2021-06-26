<template>
  <div id="frontpage">
    <div class="main">
      <div class="box">
        <div class="avatar"></div>
        <div class="name">{{ myName }}</div>
        <div class="callme">
          <div class="icon-w"><div class="weixin"></div></div>
          <div class="icon-q" @click="jumpClick(1)"></div>
          <div class="icon-g" @click="jumpClick(2)"></div>
          <div class="icon-e"><div class="email">z64666760@163.com</div></div>
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
    indexclick: function ( pageNum ) {
      switch (pageNum) {
        case 1:
          this.$router.push('/')
          break;
        case 2:
          this.$router.push('/category')
          break;
        case 3:
          this.$router.push('/')
          break;
        case 4:
          this.$router.push('/about')
          break;
      }
    },
    jumpClick: function ( pageNum ) {
      switch ( pageNum ) {
        case 1:
          window.open("tencent://message/?uin=1922206771&Site=iBlogs&Menu=yes");
          break;
        case 2:
          window.open("https://github.com/Jay-Lin26");
          break;
      }

    },
  }
};
</script>

<style>
.nav-index:hover, .nav-category:hover, .nav-music:hover, .nav-about:hover{ color: #afb4db; transform: translateY(-3%); }
.nav-index, .nav-category, .nav-music, .nav-about {
  width: 150px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
  font-family: "楷体";
  margin-right: 20px;
  border-radius: 15px;
  border: 1px solid;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.5s;
}
.nav-bar {
  width: 500px;
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
.weixin {
  position: absolute;
  display: none;
  width: 110px;
  height: 110px;
  top: 38px;
  left: -38px;
  border-radius: 8px;
  background: url("https://pic.imgdb.cn/item/60abc01a2a0bae8e0ce9b225.png");
  background-size: cover;
}
.email {
  position: absolute;
  display: none;
  width: 140px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  top: 38px;
  left: -38px;
  border-radius: 8px;
  background-color: #fff;
}
.icon-e:hover .email { display: block; }
.icon-w:hover .weixin { display: block; }
.icon-e {background: url("../assets/front-icon/email.png") #ffffff;}
.icon-q {background: url("../assets/front-icon/QQ.png") #ffffff;}
.icon-g {background: url("../assets/front-icon/github.png") #ffffff;}
.icon-w {background: url("../assets/front-icon/weixin.png") #ffffff;}
.icon-w, .icon-g, .icon-q, .icon-e{
  position: relative;
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
  cursor: pointer;
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
  background: url("https://pic.imgdb.cn/item/60bb95b68355f7f7188c56f2.jpg");
  background-size: cover;
}
</style>
