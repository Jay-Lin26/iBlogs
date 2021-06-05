<template>
  <div id="myhome">
    <Thehead></Thehead>
    <div class="index-all">
      <div class="index-body">
        <div class="index-content">
          <div class="c-left">
            <div
              class="show-card"
              v-for="item in leftList"
              v-bind:key="item.id"
            >
              <div class="card-in">
                <div class="image">
                  <img v-bind:src="item.img_url" />
                </div>
                <div class="detail">
                  <div class="title">{{ item.title }}</div>
                  <div class="description">{{ item.desc }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-right">
            <div class="book-title">书籍推荐:</div>
            <div class="card-right" v-for="books in bookList" :key="books.id">
              <div class="cr-title">{{ books.name }}</div>
              <div class="cr-desc">{{ books.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Thefoot></Thefoot>
  </div>
</template>

<script>
import Thehead from "../components/head.vue";
import Thefoot from "../components/footer.vue";
import { index } from "../http/api.js";
export default {
  name: "myhome",
  components: { Thehead, Thefoot },
  data: function () {
    return {
      leftList: {},
      bookList: [
        {
          id: 1,
          name: "《程序员修炼之道：从小工到专家》",
          desc: "由一系列独立的部分组成，涵盖的主题从个人责任、职业发展，知道用于使代码保持灵活、并且易于改编和复用的各种架构技术，利用许多富有娱乐性的奇闻轶事、有思想性的例子及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。",
        },
        {
          id: 2,
          name: "《简明Python教程》",
          desc: "入门Python的绝佳Tutorial，从书的目录便可以了解到作者Swaroop C H清晰的行文思路，以及对Python高超的驾驭能力。",
        },
        {
          id: 3,
          name: "《集体智慧编程》",
          desc: "以具体实例的方式来展示Python的编程技巧，受益良多。作者用非常直观的方式向读者展示了人工智能和机器学习中的大量经典的算法。更可贵的是，作者在展示算法时所使用的例子都是网络中非常有代表性的场景，并且很多情况下还会结合一些实际运营的 Web 站点的数据作更进步阐释。",
        },
        {
          id: 4,
          name: "《Python Cookbook中文版第3版》",
          desc: "这本书可谓Python版《代码大全》。有人说《代码大全》这类书是字典，其实不尽然《代码大全》是高手过招。",
        },
      ],
    };
  },
  methods: {
    slideshow: function () {
      let banner = document.getElementsByClassName("index-banner");
      let num = 0;
      setInterval(() => {
        num++;
        if (num > 2) {
          num = 0;
        }
        banner[num].className == "banner-image";
      }, 2000);
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
.description {
  width: 450px;
  font-size: 13px;
  color: #909399;
  margin-top: 50px;
  /* 超过多少行自动隐藏 */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.title {
  color: #00b5ad;
  font-size: 22px;
  height: 30px;
  width: 400px;
  /* 超过多少行自动隐藏 */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.image,
.image img {
  margin-left: 12px;
  height: 120px;
  width: 120px;
  border-radius: 10px;
  background-size: cover;
}
.detail {
  margin-left: 30px;
  height: 160px;
}
.card-in {
  width: 680px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
}
.show-card:hover {
  transform: translateY(-3%);
  box-shadow: 3px 3px 3px 3px #836972;
}
.show-card {
  width: 680px;
  height: 160px;
  background-color: #ffffff;
  transition: all 0.7s;
  margin-bottom: 20px;
  border-radius: 10px;
}
.cr-title {
  color: #00b5ad;
  font-size: 16px;
  font-weight: 300;
}
.cr-desc {
  color: #909399;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.card-right {
  margin: 18px 12px 18px 12px;
  font-size: 14px;
  text-align: center;
}
.book-title {
  font-size: 18px;
  margin: 18px 12px;
}
.c-right {
  float: right;
  width: 280px;
  min-height: 400px;
  border-radius: 10px;
  background-color: #ffffff;
}
.c-left {
  float: left;
  height: auto;
}
.index-body {
  padding: 20px 0 20px 0;
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
}
.index-all {
  min-height: 100vh;
  overflow: hidden;
  background: url("https://pic.imgdb.cn/item/60bb99708355f7f71894f8ba.jpg");
  background-size: cover;
}
</style>
