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
    <Thefoot></Thefoot>
  </div>
</template>
<script>
import { blog_detail } from "../http/api.js";
import Thehead from "../components/head.vue";
import Thefoot from "../components/footer.vue";
export default {
  name: "articledetail",
  components: { Thehead, Thefoot },
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
    blog_detail( this.show_id ).then((result) => {
      if (result.code == '201') {
        this.show_title = result.message;
      }else {
        this.show_title = result.title;
        this.show_from = '发表于 2021-04-30 | 阅读次数： 20';
        this.show_content = result.content;
      };
    });
  },
};
</script>

<style>
.body-box {
  width: 100%;
  overflow-x: hidden;
  background: url("https://pic.imgdb.cn/item/60bb9bbd8355f7f7189ab84d.jpg");
  background-size: cover;
}
.body-content {
  width: 1000px;
  overflow-x: hidden;
  height: 100%;
  margin: 0 auto;
  margin-top: 25px;
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
  color: #00b5ad;
}
.usershow p {
  font-size: 10px;
}
.content {
  color: #909399;
  padding-left: 50px;
  padding-right: 30px;
  min-height: 100vh;
  font-size: 16px !important;
  font-family: "微软雅黑";
  letter-spacing: 2px;
  line-height: 30px;
}
.body-content {
  margin-top: 105px;
}
</style>
