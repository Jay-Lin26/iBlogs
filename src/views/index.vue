<template>
  <div id="index">
    <Thehead></Thehead>
    <div class="index-all">
      <div class="rotation-chart">
        <div
					id="pic"
					@mouseover="mouseOver()"
					@mouseout="mouseLeave()"
				>
          <li
						v-for="(item) in bannerList"
						:key="item.id"
            @click="showDetail(item.track_id)"
					>
            <img :src="item.url">
          </li>
        </div>
        <div
          id="indicator"
          @mouseover="mouseOver()"
					@mouseout="mouseLeave()"
        >
          <div
						v-for="(item, idx) in bannerList"
						:key="idx"
						@click="indClick(idx)"
            :class="{active: idx == index-1}"
					>
					</div>
        </div>
        <div
					class="rcbtn-left"
					@click="movePic('left')"
          @mouseover="mouseOver()"
					@mouseout="mouseLeave()"
				>
					{{ left }}
				</div>
        <div
					class="rcbtn-right"
					@click="movePic('right')"
          @mouseover="mouseOver()"
					@mouseout="mouseLeave()"
				>
					>
				</div>
      </div>
      <div class="all-title"> {{ title }} </div>
      <div class="index-body">
        <div class="index-content">
            <div
							class="show-card"
							v-for="item in leftList"
							v-bind:key="item.id"
							@click="showDetail( item.id )"
						>
              <div class="card-in">
                <div class="image">
                  <img :src="item.img_url" />
                </div>
                <div class="detail">
                  <div class="title"> {{ item.title }} </div>
                  <div class="description"> {{ item.desc }} </div>
                  <div class="writer">
                    <div class="w-avatar">
                      <img v-bind:src="item.avatar" />
                    </div>
                    <div class="w-name"> {{ item.writer }} </div>
                    <div class="w-time"> 发布时间：{{ item.release_time }} </div>
                    <div class="w-look"> 浏览数：{{ item.view }} </div>
                    <div class="w-tag"> 博客系统开发 </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="index-content-right">
          <div class="right-title">{{rightTitle}}</div>
          <div
            class="index-content-right-card"
            v-for="item in otherList"
            :key="item.id"
            @click="otherDetail(item.id)"
          >
            <li>{{item.title}}</li>
            <li>{{ item.desc }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Thehead from "../components/head.vue";
import { indexApi } from "../http/api.js";
export default {
  name: "index",
  components: { Thehead },
  data: function () {
    return {
      leftList: {},
      bannerList: {},
      otherList: {},
      index: 1,
			timer: null,
			left: "<",
      title: "—— 推荐 ——",
      rightTitle: "—— 每日趣闻"
    };
  },
  computed: {

  },
  methods: {
    // 进入文章详情
    showDetail: function (show_id) {
      this.$router.push('/articledetail/' + show_id)
    },
    //进入趣闻详情
    otherDetail: function (other_id) {
      this.$router.push('/articledetail/' + other_id)
    },
    // 图片轮播方法
    movePic: function ( direction ) {
      let img = document.getElementById('pic');
      let pic = document.getElementById('pic').getElementsByTagName('li');

      if (direction == "left") {
        this.index --;
      }if (direction == "right") {
        this.index ++;
      }

      if (this.index > pic.length) {
        img.style.transform = `translateX(0px)`;
        this.index = 1;
      }if (this.index <= 0) {
        img.style.transform = `translateX(${-1000*(pic.length - 1)}px)`;
        this.index = pic.length;
      }

      img.style.transform = `translateX(${-1000*(this.index - 1)}px)`;
    },
    // 指示器点击跳转对应图片
    indClick: function ( index ) {
			let img = document.getElementById('pic');
      img.style.transform = `translateX(${-1000*index}px)`;
			this.index = index+1;
    },
		//启动定时器轮播
		timeFun: function() {
			this.timer = setInterval(() => {
				this.movePic("right");
			}, 3000)
		},
		//鼠标移入清除定时器
		mouseOver: function() {
			clearInterval(this.timer)
		},
    // 鼠标移出开启定时器
		mouseLeave: function() {
			this.timeFun()
		}
  },
  mounted() {
    //获取首页数据
    indexApi().then((result) => {
      this.leftList = result.article;
      this.bannerList = result.banner;
      this.otherList = result.otherArticle;
    });
		//加载启动定时器
		this.timeFun()
  },
	beforeDestroy() {
		//清除定时器轮播
		clearInterval(this.timer)
	}
};
</script>

<style>
.index-content-right-card li {
  list-style: none;
  margin: 10px;
  display: -webkit-box;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 300;
  font-family: "mircroft yahei";
  overflow: hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
  text-overflow:clip;
}
.right-title {
  margin: 20px 0 20px 20px;
  font-size: 18px;
  font-weight: 600;
  font-family: "kaiti";
  color: #0FB4A9;
}
.all-title {
  width: 200px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 3px;
}
.rcbtn-left,.rcbtn-right {
  font-size: 30px;
  font-weight: 200;
  cursor: pointer;
  opacity: 0.5;
  line-height: 60px;
  color: #fff;
  transform: scale(1,2);
  -webkit-transform: scale(1,2);
}
.rcbtn-left {
  position: absolute;
  top: 40%;
  left: 20px;
  display: inline;
  width: 20px;
  height: 60px;
}
.rcbtn-right {
  position: absolute;
  top: 40%;
  right: 20px;
  display: inline;
  width: 20px;
  height: 60px;
}
.active {
  background-color: #0FB4A9 !important;
}
#indicator div:hover{
  background-color: #AAAEB2;
}
#indicator div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #F1F1F1;
  opacity: 0.9;
  margin: 10px;
  cursor: pointer;
}
#indicator {
  width: auto;
  height: 20px;
  position: absolute;
  top: 210px;
  right: 45%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color:#AAAEB2;
  opacity: 0.5;
}
#pic li img {
  width: 1000px;
  height: 240px;
  background-size: cover;
}
#pic li{
  list-style: none;
  width: 1000px;
  height: 240px;
}
#pic {
  width: auto;
  height: 240px;
  position: relative;
  display: flex;
  transition: all 0.5s;
}
.rotation-chart:hover .rcbtn-right{
  color: #0FB4A9;
}
.rotation-chart:hover .rcbtn-left{
  color: #0FB4A9;
}
.rotation-chart {
  width: 1000px;
  height: 240px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
}
.w-tag { margin-left: 90px; border: 1px solid #0FB4A9; border-radius: 5px; color: #0FB4A9; font-family: "楷体";}
.w-name, .w-time, .w-look { margin-right: 20px; }
.w-avatar img{
  width: 24px;
  height: 24px;
  margin-right: 5px;
  border-radius: 50%;
  background-size: cover;
}
.writer {
  height: 20%;
  width: 500px;
  bottom: 0px;
  font-size: 12px;
  align-items: center;
  position: absolute;
  display: flex;
}
.description {
  height: auto;
  width: 500px;
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
  width: 160px;
  border-radius: 10px;
  background-size: cover;
}
.detail {
  margin-left: 10px;
  width: 500px;
  height: 160px;
}
.card-in {
  width: 660px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 20px;
  left: 20px;
}
.show-card:hover {
  transform: translateY(-3%);
  box-shadow: 2px 2px 2px 2px #504c4c;
}
.show-card {
  width: 700px;
  height: 200px;
  background-color: #FFFFFF;
  opacity: 0.8;
  transition: all 0.5s;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}
.index-content-right-card {
  width: 240px;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #0FB4A9;
}
.index-content-right {
  width: 280px;
  height: auto;
  float: right;
  border-radius: 10px;
  background-color: #FFFFFF;
  opacity: 0.8;
}
.index-content {
  width: 700px;
  height: 100%;
  float: left;
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
