<template>
  <div id="alert-main">
    <div class="alert-body">
      <div class="login-box">
        <button class="cancel" @click="closePage()"></button>
        <div class="alert-title" v-if="joinPage">注册</div>
        <div class="alert-title" v-else>登录</div>
        <div>
          <input
            class="alert-email"
            placeholder="邮箱"
            v-model="email"
            @keyup.enter="submit"
          />
        </div>
        <div>
          <input
            class="alert-pwd"
            type="password"
            placeholder="密码"
            v-model="password"
          />
        </div>
        <div v-if="joinPage">
          <span>
            <input
              class="alert-code"
              placeholder="验证码"
              v-model="code"
            />
            <button class="c-btn" @click="get_code()">获取验证码</button>
          </span>
          <button class="r-btn" @click="register()">注册</button>
          <div style="font-size: 14px">
            <label style="margin-right: 15px">已有账号？</label>
            <label
              style="color: #afb4db; cursor: pointer"
              @click="joinPage = !joinPage"
              >登录</label
            >
          </div>
        </div>
        <div v-else>
          <button class="l-btn" @click="login()">登录</button>
          <div style="font-size: 14px">
            <div style="color: #afb4db; cursor: pointer; margin-bottom: 24px">
              忘记密码？
            </div>
            <div>
              <label style="margin-right: 15px">没有账号？</label>
              <label
                style="color: #afb4db; cursor: pointer"
                @click="joinPage = !joinPage"
                >注册账号</label
              >
            </div>
          </div>
        </div>
        <div style="font-size: 12px; margin-top: 24px; color: #acacac; font-style:oblique">
          <div style="margin-bottom: 6px">
            加入iBlogs, 即代表您同意我们的服务条款和
          </div>
          <div style="margin-bottom: 6px">隐私协议</div>
          <div style="margin-bottom: 24px">以及任何奖励相关的条件</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode, login, register } from "../http/api.js";
export default {
  name: "app",
  data() {
    return {
      email: "",
      code: "",
      password: "",
      //head组件控制打开页面
      joinPage: this.$store.state.PageStatus,
      //当前页面切换
    };
  },
  methods: {
    //登录
    login: function () {
      let param = new URLSearchParams();
      param.append("email", this.email);
      param.append("password", this.password);
      login(param).then((result) => {
        if (result.code === 200) {
          this.$msgs(result.message, "success");
          sessionStorage.setItem("accesstoken", result.Access_token);
          this.$store.commit("setname", result.name);
          setInterval(function () {
            location.reload();
          }, 100);
        } else {
          this.$msgs(result.message, "error");
        }
      });
    },
    //注册
    register: function () {
      let params = new URLSearchParams();
      params.append("email", this.email);
      params.append("code", this.code);
      params.append("password", this.password);
      register(params).then((result) => {
        if (result.code === 200) {
          this.$msgs(result.message, "success");
        } else {
          this.$msgs(result.message, "error");
        }
      });
    },
    //发送验证码
    get_code: function () {
      getCode(this.email).then((result) => {
        if (result.code === 200) {
          this.$msgs(result.message, "success");
        } else {
          this.$msgs(result.message, "error");
        }
      });
    },
    // 取消登录
    closePage: function () {
      let status = false;
      this.$store.commit("changePage", status);
    },
  },
};
</script>

<style>
.alert-title {
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
}
.cancel:hover {
  background-color: #8689a7;
  border-radius: 4px;
  cursor: pointer;
}
.cancel {
  position: absolute;
  right: 24px;
  width: 20px;
  height: 20px;
  border: 0px solid #acacac;
  background: url("../assets/front-img/cancel.png");
  background-size: cover;
}
.r-btn:hover,
.l-btn:hover,
.c-btn:hover {
  background-color: #8689a7;
}
.c-btn {
  cursor: pointer;
  width: 96px;
  height: 44px;
  border: 1px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #afb4db;
  color: #f1f1f1;
  outline: 0;
}
.r-btn,
.l-btn {
  cursor: pointer;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 1px;
  background-color: #afb4db;
  color: #f1f1f1;
  margin-bottom: 24px;
  padding: 0 !important;
  outline: 0;
}
.alert-code {
  width: 180px;
  height: 40px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #eeeeee;
  margin-bottom: 24px;
  padding: 2px 0 0 20px;
  outline: 0;
}
.alert-code::-webkit-input-placeholder,
.alert-pwd::-webkit-input-placeholder,
.alert-email::-webkit-input-placeholder {
  color: #acacac;
}
.alert-email,
.alert-pwd {
  width: 276px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  margin-bottom: 24px;
  padding-left: 20px;
  outline: 0;
}
.alert-body {
  position: relative;
  text-align: center;
  background-color: #ffffff;
  width: 360px;
  height: auto;
  border-radius: 10px;
  margin: auto;
}
#alert-main {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background: rgba(0, 0, 0, 0.7);
}
</style>
