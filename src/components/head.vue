<template>
  <div id="hd">
    <div class="head-box">
      <div class="head-connet">
        <div class="head-logo">iBlogs</div>
        <div class="head-button">
          <div class="head-button-1">
            <router-link to="/index">首页</router-link>
            <router-link to="/articledetail/1" class="sort">文章</router-link>
            <router-link to="/" class="about">关于我</router-link>
          </div>
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
          <div class="sign" @click="pageControl()">登录</div>
          <div class="join" @click="pageControl()">注册</div>
        </div>
      </div>
      <Register v-show="this.$store.state.PageStatus"></Register>
    </div>
  </div>
</template>

<script>
import Register from "../components/register.vue";
export default {
  name: "hd",
  components: { Register },
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
    search: function () {
      this.$msgs("暂未开放", "warning");
    },
  },
  mounted() {
    this.judgeUser();
  },
};
</script>

<style>
#hd {
  z-index: 2;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 100px;
  font-size: 35px;
  font-weight: 500;
  color: #afb4db;
  margin-left: 10px;
  margin-top: 15px;
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
.sign {
  margin-left: 50px;
  margin-top: 30px;
  font-size: 15px;
  cursor: pointer;
}
.join {
  height: 30px;
  width: 98px;
  text-align: center;
  cursor: pointer;
  line-height: 30px;
  margin-left: 50px;
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
  margin-left: 30px;
}
.head-button-1 {
  height: 20px;
  width: 300px;
  margin: 0 auto;
  line-height: 78px;
}
.head-button-1 a {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 13px;
  margin-left: 40px;
}
.head-button-1 a:hover {
  color: #afb4db;
}
</style>
