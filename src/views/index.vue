<template>
  <div id="index">
    <Thehead></Thehead>
    <div class="index-all">
      <div class="index-body">
        <div class="index-content">
            <div
              class="show-card"
              v-for="item in leftList"
              v-bind:key="item.id"
              @click="showdetail( item.id )"
            >
              <div class="card-in">
                <div class="detail">
                  <div class="title">{{ item.title }}</div>
                  <div class="description">{{ item.desc }}</div>
                  <div class="writer">
                    <div class="w-avatar">
                      <img src="../assets/front-img/avatar.png" />
                    </div>
                    <div class="w-name">{{ item.writer }}</div>
                    <div class="w-time">发布时间：{{ item.release_time }}</div>
                    <div class="w-look">浏览数：{{ item.view }}</div>
                    <div class="w-tag">博客系统开发</div>
                  </div>
                </div>
                <div class="image">
                  <img v-bind:src="item.img_url" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Thehead from "../components/head.vue";
import { index } from "../http/api.js";
export default {
  name: "index",
  components: { Thehead },
  data: function () {
    return {
      leftList: {},
    };
  },
  methods: {
    showdetail: function (show_id) {
      this.$router.push('/articledetail/' + show_id)
    },
  },
  mounted() {
    //获取首页数据
    index().then((result) => {
      this.leftList = result.data;
    });
    // this.slideshow();
  },
};
</script>

<style>
.w-tag { margin-left: 230px; border: 1px solid #00b5ad; border-radius: 5px; color: #00b5ad; font-family: "楷体";}
.w-name, .w-time, .w-look { margin-right: 20px; }
.w-avatar, .w-avatar img{
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 20px;
  background-size: cover;
}
.writer {
  height: 20%;
  bottom: 0px;
  font-size: 12px;
  align-items: center;
  position: absolute;
  display: flex;
}
.description {
  height: auto;
  width: 660px;
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 3px;
  margin-top: 25px;
  /* 超过多少行自动隐藏 */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
  text-overflow:clip;
}
.title {
  font-size: 22px;
  height: 20%;
  /* 超过多少行自动隐藏 */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.image,
.image img {
  height: 160px;
  width: 280px;
  border-radius: 10px;
  background-size: cover;
}
.detail {
  width: 680px;
  height: 160px;
}
.card-in {
  width: 960px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 20px;
  left: 20px;
}
.show-card:hover {
  transform: translateY(-3%);
  box-shadow: 2px 2px 2px 2px #ae8e83;
}
.show-card {
  width: 1000px;
  height: 200px;
  background-color: #fff;
  opacity: 0.8;
  transition: all 0.5s;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}
.index-content {
  width: 100%;
  height: 100%;
}
.index-body {
  padding: 20px 0 0 0;
  width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
}
.index-all {
  overflow: hidden;
  background: url("https://pic.imgdb.cn/item/60bb99708355f7f71894f8ba.jpg");
  background-size: cover;
}
</style>
