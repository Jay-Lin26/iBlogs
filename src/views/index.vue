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
						v-for="item in bannerList"
						:key="item.id"
					>
            <img :src="item.url">
          </li>
        </div>
        <div id="indicator">
          <div
						:class="{active: idx == index-1}"
						v-for="(item, idx) in bannerList"
						:key="idx"
						@click="indClick(idx)"
					>
					</div>
        </div>
        <div
					class="rcbtn-left"
					@click="movePic('left')"
				>
					{{ left }}
				</div>
        <div
					class="rcbtn-right"
					@click="movePic('right')"
				>
					>
				</div>
      </div>
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
                <div class="image">
                  <img :src="item.img_url" />
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
import { indexApi } from "../http/api.js";
export default {
  name: "index",
  components: { Thehead },
  data: function () {
    return {
      leftList: {},
      bannerList: {},
      index: 1,
			timer: null,
			left: "<"
    };
  },
  computed: {

  },
  methods: {
    // 进入详情
    showdetail: function (show_id) {
      this.$router.push('/articledetail/' + show_id)
    },
    // 图片轮播方法
    movePic: function ( direction ) {
      let img = document.getElementById('pic');
      let pic = document.getElementById('pic').getElementsByTagName('li');
      if (direction == "left") {
        this.index --;
      }if (direction == "right") {
        this.index ++;
      }else { }
      if (this.index > pic.length) {
        img.style.transition = `transform 0.2s`;
        img.style.transform = `translateX(0px)`;
        this.index = 1;
      }if (this.index <= 0) {
        img.style.transition = `transform 0.2s`;
        img.style.transform = `translateX(${-1000*(pic.length - 1)}px)`
        this.index = pic.length;
      }
      img.style.transition = `transform 1s`;
      img.style.transform = `translateX(${-1000*(this.index - 1)}px)`;
    },
    // 指示器点击跳转对应图片
    indClick: function ( index ) {
			let img = document.getElementById('pic');
			img.style.transition = `transform 1s`;
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
		mouseLeave: function() {
			this.timeFun()
		}
  },
  mounted() {
    //获取首页数据
    indexApi().then((result) => {
      this.leftList = result.data;
      this.bannerList = result.banner
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
.rcbtn-left,.rcbtn-right {
  font-size: 30px;
  font-weight: 200;
  cursor: pointer;
  opacity: 0.3;
  line-height: 60px;
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
  background-color: #fff !important;
}
#indicator div:hover{
  background-color: #fff;
}
#indicator div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #FFBBFF;
  opacity: 0.9;
  margin: 10px;
  cursor: pointer;
}
#indicator {
  width: auto;
  height: 20px;
  position: absolute;
  top: 215px;
  right: 38%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color:#aaaeb2;
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
}
.rotation-chart {
  width: 1000px;
  height: 240px;
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
}
.w-tag { margin-left: 230px; border: 1px solid #00b5ad; border-radius: 5px; color: #00b5ad; font-family: "楷体";}
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
  box-shadow: 2px 2px 2px 2px #eeeeee;
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
