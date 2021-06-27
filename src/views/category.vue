<template>
  <div id="CG">
      <Thehead></Thehead>
      <div class="cg">
          <div class="cg-body">
              <div class="body">
                  <div class="body-left">
                      <div class="card-l" v-for="item in tag_list" :key="item[0]">
                        <div class="left-title"> {{ item.type }} </div>
                        <div class="left-cg" v-for="tags in item.tags" :key="tags.tag_id" @click="changeTag(tags.tag_id)">
                            <div class="text"> {{ tags.tag_name }} </div>
                            <div class="number">110</div>
                        </div>
                      </div>
                  </div>
                  <div class="body-right">
                      <div class="main-r">
                        <div class="title-r"> {{ tag_name }} </div>
                        <div class="card-r" v-for="item in article_list" :key="item.id" @click="jumpArticle(item.id)">
                            <div class="card-r-image">
                                <img v-bind:src="item.img_url" />
                            </div>
                            <div class="card-r-text">{{ item.title }}</div>
                            <div class="card-r-from">
                                <div class="cg-avatar"><img v-bind:src="item.avatar" /></div>
                                <div class="cg-writer"> {{ item.writer }} </div>
                                <div class="cg-time"> {{ item.release_time }} </div>
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
import { categoryTagApi, tagDetailApi } from "../http/api.js"
export default {
    name: "CG",
    components: { Thehead },
    data: function(){
      return  {
          tag_list: "",
          article_list: "",
          tag_name: ""
      }
    },
    methods: {
        jumpArticle: function ( show_id ) {
            this.$router.push('/articledetail/' + show_id)
        },
        changeTag: function ( tag_id ) {
            tagDetailApi( tag_id ).then((result) => {
                this.tag_name = result.tag_name
                this.article_list = result.data
            })
        }

    },
    mounted() {
        categoryTagApi().then((result) => {
            this.tag_list = result.data
        }),
        tagDetailApi( 1 ).then((result) => {
            this.tag_name = result.tag_name
            this.article_list = result.data
        })
    }
}
</script>

<style>
.cg-time {
    margin-left: 36px;
}
.cg-writer {
    margin-left: 5px;
}
.cg-avatar img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
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
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    text-overflow:clip;
}
.card-r-image img{
    width: 200px;
    height: 200px;
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
    position: absolute;
    right: 20px;
    color: #00b5ad;
}
.left-cg {
    position: relative;
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
    opacity: 0.7;
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
    float: left;
    width: 700px;
    background-color: #fff;
    border-radius: 10px;
}
</style>