<template>
  <div id="home">
    <thehead></thehead>
    <div class="body-box">
      <div class="body-content">
        <div class="usershow">
          <div class="show-title">
            <h3 style="text-align: center">{{ show_title }}</h3>
            <h4 style="text-align: center">{{ show_from }}</h4>
            <div class="content" v-html="show_content">{{ show_content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { articleDetailApi } from "../http/api.js";
import Thehead from "../components/head.vue";
export default {
  name: "articledetail",
  components: { Thehead },
  data: function () {
    return {
      show_id: this.$route.params.id,
      show_title: "",
      show_from: "",
      show_content: "",
    };
  },
  methods: {
    isLogin: function () {
      let token = sessionStorage.getItem("accesstoken");
      if (token == null) {
        this.$router.push("/register");
      }
    },
  },
  mounted() {
    //获取博客内容
    articleDetailApi( this.show_id ).then((result) => {
      if (result.code == '201') {
        this.$router.push('/error');
      }else {
        this.show_title = result.title;
        this.show_from = "阅读次数："+ result.views + " | 发表于" + result.time;
        this.show_content = result.content;
      };
    });
  },
};
</script>

<style>
.body-box {
  width: 100%;
  overflow: hidden;
  background: url("https://pic.imgdb.cn/item/60bb9bbd8355f7f7189ab84d.jpg");
  background-size: cover;
}
.body-content {
  width: 900px;
  height: 100%;
  margin: 0 auto;
  margin-top: 100px;
}
.usershow {
  width: 100%;
  height: 100%;
  float: right;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 25px;
}
.usershow h3 {
  font-size: 18px;
}
.usershow h4 {
  font-size: 13px;
  color: #afb4db;
}
.usershow p {
  font-size: 10px;
}
.content {
  color: #65686d;
  padding-left: 50px;
  padding-right: 30px;
  min-height: 100vh;
  font-size: 16px !important;
  font-family: "微软雅黑";
  letter-spacing: 2px;
  line-height: 30px;
}
</style>
