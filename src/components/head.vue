<template>
  <div id="hd">
    <div class="head-box">
      <div class="head-connet">
        <div class="head-logo">iBlogs</div>
        <div>
          <span>
            <input class="input" placeholder="Enter what you want to search" />
            <button class="btn" @click="search()">Search</button>
          </span>
        </div>
        <div class="user" v-if="whetheLogin">
          {{ this.$store.state.UserName }}
          <div class="menu">
            <ul class="menu-nav">
              <li>个人中心</li>
              <li>修改密码</li>
              <li @click="quitLogin()">退出登录</li>
            </ul>
          </div>
        </div>
        <div class="to-login" v-else>
          <div class="sign" style="color: #00b5ad" @click="pageControl()">
            Sign In
          </div>
          <div class="join" @click="pageControl()">Join now</div>
        </div>
      </div>
      <div class="head-button">
        <div class="head-button-1">
          <router-link to="/index">Home</router-link>
          <router-link to="/articledetail" class="sort">Sort</router-link>
          <router-link to="/" class="category">Category</router-link>
          <router-link to="/" class="about">About</router-link>
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
  background-color: rgba(0, 0, 0, 0.7);
}
#hd,
.head-box {
  width: 100%;
  height: 100px;
  /* background-color: #fefefe; */
}
.head-connet {
  width: 1000px;
  height: 80px;
  margin: 0 auto;
  display: flex;
}
.head-logo {
  width: 90px;
  font-size: 35px;
  font-weight: 500;
  color: #00b5ad;
  margin-left: 10px;
  margin-top: 15px;
}
.input {
  width: 360px;
  height: 35px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #eeeeee;
  padding-left: 20px;
  outline: 0;
  margin-left: 200px;
  margin-top: 20px;
}
.btn:hover {
  background-color: #009a94;
}
.btn {
  cursor: pointer;
  width: 40px;
  height: 39px;
  border: 0px solid #eeeeee;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: url("../assets/front-img/search.png") #00b5ad;
  background-size: cover;
  color: rgba(0, 0, 0, 0);
  outline: 0;
}
.user {
  margin-top: 30px;
  font-size: 16px;
  color: #00b5ad;
  margin-left: 150px;
  cursor: pointer;
  position: relative;
}
.user:hover .menu {
  display: block;
  transform: matrix3d();
}
.menu {
  transition: all 1s;
  display: none;
  position: absolute;
  top: 30px;
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
  background-color: #009a94;
  color: #f1f1f1;
}
.menu-nav li {
  line-height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.to-login {
  display: flex;
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
  border: 1px solid #00b5ad;
  color: #00b5ad;
}
.join:hover {
  background-color: #00b5ad;
  color: #f1f1f1;
}
.sign:hover {
  text-decoration: underline;
}
.head-button {
  margin: 0 auto;
}
.head-button-1 {
  height: 20px;
  width: 1000px;
  margin: 0 auto;
  line-height: 5px;
}
.head-button-1 a {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 13px;
  margin-left: 10px;
  margin-right: 52px;
}
.head-button-1 a:hover {
  color: #00b5ad;
}
</style>
