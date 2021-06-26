<template>
  <div id="CG">
      <Thehead></Thehead>
      <div class="cg">
          <div class="cg-body">
              <div class="body">
                  <div class="body-left">
                      <div class="card-l" v-for="a in 3" :key="a">
                        <div class="left-title">分类</div>
                        <div class="left-cg" v-for="i in 5" :key="i">
                            <div class="text">成长记录</div>
                            <div class="number">110</div>
                        </div>
                      </div>
                  </div>
                  <div class="body-right">
                      <div class="main-r">
                        <div class="title-r">成长记录</div>
                        <div class="card-r" v-for="b in 10" :key="b">
                            <div class="card-r-image"></div>
                            <div class="card-r-text">即使没有人为你鼓掌,也要优雅的谢幕,感谢自己的认真付出。</div>
                            <div class="card-r-from">
                                <div class="cg-avatar"></div>
                                <div class="cg-writer">Linse.zhou</div>
                                <div class="cg-time">2021-12-12</div>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Thehead from "../components/head.vue"
export default {
    name: "CG",
    components: { Thehead },
}
</script>

<style>
.cg-time {
    margin-left: 36px;
}
.cg-writer {
    margin-left: 5px;
}
.cg-avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: url("../assets/front-img/avatar.png");
    background-size: cover;
}
.card-r-from {
    display: flex;
    font-size: 12px;
    margin-left: 6px;
    margin-top: 5px;
    height: 30px;
    align-items: center;
}
.card-r-text {
    font-size: 14px;
    letter-spacing: 2px;
    padding: 3px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    text-overflow:clip;
}
.card-r-image {
    width: 200px;
    height: 200px;
    background: url("https://pic.imgdb.cn/item/60d6b25d844ef46bb27986ed.jpg");
    background-size: cover;
}
.card-r {
    width: 200px;
    height: 280px;
    margin-left: 23px;
    margin-bottom: 18px;
    border: 1px solid #eee;
    transition: all 0.5s;
    float: left;
    cursor: pointer;
}
.card-r:hover {
  transform: translateY(-3%);
  box-shadow: 2px 2px 2px 2px #eeeeee;
}
.title-r {
    width: 240px;
    font-size: 20px;
    font-weight: 300;
    margin-left: 23px;
    margin-bottom: 8px;
    border-bottom: 1px solid #00b5ad;
}
.main-r {
    margin-top: 15px;
}
.number {
    margin-left: 110px;
    color: #00b5ad;
}
.left-cg {
    display: flex;
    font-size: 16px;
    margin: 15px;
    letter-spacing: 3px;
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
}
.left-title {
    margin: 15px;
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    border-bottom: 2px solid #00b5ad;
}
.body-left {
    cursor: pointer;
}
.cg {
    background: url("https://pic.imgdb.cn/item/60bb99708355f7f71894f8ba.jpg");
    background-size: cover;
}
.body {
    width: 1000px;
    margin: 0 auto;
    min-height: 100vh;
    opacity: 0.8;
    overflow: hidden;
}
.body-left {
    margin: 100px 20px 20px 0;
    float: left;
    width: 280px;
    background-color: #fff;
    border-radius: 10px;
}
.body-right {
    margin: 100px 0 20px 0;
    min-height: 100vh;
    float: left;
    width: 700px;
    background-color: #fff;
    border-radius: 10px;
}
</style>