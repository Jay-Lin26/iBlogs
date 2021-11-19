<template>
  <div id="Sh">
      <Thehead></Thehead>
      <div class="sh-main">
          <div class="sh-box">
              <div class="sh-content">
                  <div class="ct-text">搜索内容：{{ content }}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Thehead from "../components/head.vue"
export default {
    name: 'Sh',
    components: { Thehead },
    data: function () {
        return {
            content: this.$route.params.name
        }
    }
}
</script>

<style>
.ct-text {
    font-size: 20px;
    font-weight: 300;
    padding: 15px 0 0 20px;
    color: #00b5ad;
}
.sh-content {
    margin: 100px 0 20px 0;
    min-height: 90vh;
    background-color: #fff;
    border-radius: 10px;
}
.sh-box {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
}
.sh-main {
    min-height: 90vh;
    background: url("https://pic.imgdb.cn/item/60bb99708355f7f71894f8ba.jpg");
    background-size: cover;
}
</style>