<template>
  <div id="hd">
    <div class="head-box">
      <div class="head-connet">
        <div class="head-logo" @click="logoClick()">
          <svg width="150" height="60" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>background</title>
              <rect fill="rgba(0,0,0,0)" id="canvas_background" height="50" width="157" y="-1" x="-1"/>
              <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
              <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
              </g>
            </g>
            <g>
              <title>Layer 1</title>
              <text font-style="italic" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="'Palatino Linotype', 'Book Antiqua', Palatino, serif" font-size="162" id="svg_1" y="235.5" x="60.523438" stroke-width="0" stroke="#000" fill="#afb4db">iBlogs</text>
              <text stroke="#000" transform="matrix(1,0,0,1.0285714864730835,0,-0.9174125734716654) " xml:space="preserve" text-anchor="start" font-family="'Palatino Linotype', 'Book Antiqua', Palatino, serif" font-size="26" id="svg_2" y="24.109375" x="61" stroke-width="0" fill="#afb4db"/>
              <text font-style="italic" font-weight="bold" stroke="#000" transform="matrix(0.9181492679094418,0,0,1.063895586343823,0.14804763657391762,20.564003545175524) " xml:space="preserve" text-anchor="start" font-family="Georgia, Times, 'Times New Roman', serif" font-size="40" id="svg_3" y="23.995114" x="14.396078" fill-opacity="null" stroke-opacity="null" stroke-width="0" fill="#afb4db">iBlogs</text>
            </g>
          </svg>
        </div>
        <div class="head-button">
          <router-link to="/">首页</router-link>
          <router-link to="/category" class="sort">分类</router-link>
          <router-link to="/about" class="about">关于我</router-link>
        </div>
        <div class="search">
          <input class="input" placeholder="输入您想查看的内容。。。" />
          <button class="btn" @click="search()"></button>
        </div>
        <div class="user" v-if="whetheLogin">
          {{ this.$store.state.UserName }}
          <i class="el-icon-arrow-down"></i>
          <div class="menu">
            <ul class="menu-nav">
              <li>个人中心</li>
              <li>修改密码</li>
              <li @click="quitLogin()">退出登录</li>
            </ul>
          </div>
        </div>
        <div class="to-login" v-else>
          <div class="join" @click="pageControl()">登录 & 注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hd",
  data: function () {
    return {
      //是否展示用户名的状态
      whetheLogin: false,
    };
  },
  methods: {
    //判断用户是否登录
    judgeUser: function () {
      let name = this.$store.state.UserName;
      if (name != null) {
        this.whetheLogin = true;
      }
    },
    //打开或关闭登录、注册页面
    pageControl: function () {
      let status = true;
      this.$store.commit("changePage", status);
    },
    //退出登录
    quitLogin: function () {
      this.$msgs("您已退出登录", "success");
      sessionStorage.clear("username", "accesstoken");
      location.reload();
    },
    //搜索
    search: function () {
      this.$msgs("暂未开放", "warning");
    },
    //logo跳转
    logoClick: function () {
      this.$router.push('/');
    },
  },
  mounted() {
    this.judgeUser();
  },
};
</script>

<style>
#hd {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 998;
}
#hd,
.head-box {
  width: 100%;
  height: 80px;
}
.head-connet {
  width: 1000px;
  height: 80px;
  margin: 0 auto;
  display: flex;
}
.head-logo {
  cursor: pointer;
}
.head-logo svg{
  margin-top: 6px;
}
.input {
  position: absolute;
  width: 240px;
  height: 35px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #eeeeee;
  padding-left: 20px;
  outline: 0;
  top: 20px;
}
.btn:hover {
  background-color: #8689a7;
}
.btn {
  position: absolute;
  cursor: pointer;
  width: 40px;
  height: 39px;
  top: 20px;
  right: 0px;
  border: 0 solid #afb4db;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: url("../assets/front-img/search.png") #afb4db;
  background-size: cover;
  color: rgba(0, 0, 0, 0);
  outline: 0;
}
.search {
  position: relative;
  width: 300px;
}
.user {
  margin-top: 30px;
  font-size: 16px;
  color: #afb4db;
  margin-left: 110px;
  cursor: pointer;
  position: relative;
}
.user:hover .menu {
  color: #8689a7;
  display: block;
}
.menu {
  display: none;
  position: absolute;
  top: 30px;
  left: -10px;
  background-color: #ffffff;
  border: 1px solid #f5f5f9;
  border-radius: 5px;
}
.menu-nav {
  padding: 0px;
  font-size: 14px;
  width: 100px;
  text-align: center;
  color: #000;
  list-style: none;
}
.menu-nav li:hover {
  background-color: #8689a7;
  color: #000;
}
.menu-nav li {
  line-height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.to-login {
  display: flex;
  color: #afb4db;
}
.join {
  height: 30px;
  width: 98px;
  text-align: center;
  cursor: pointer;
  line-height: 30px;
  margin-left: 100px;
  margin-top: 25px;
  font-size: 15px;
  border: 1px solid #afb4db;
}
.join:hover {
  background-color: #8689a7;
  color: #f1f1f1;
}
.sign:hover {
  text-decoration: underline;
}
.head-button {
  width: 340px;
  margin: 0;
  line-height: 80px;
}
.head-button a {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 13px;
  margin-left: 40px;
}
.head-button a:hover {
  color: #afb4db;
}
</style>
