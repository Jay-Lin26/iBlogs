<template>
  <div id="EP">
      <Thehead></Thehead>
      <div class="message">页面找不到了！！！</div>
  </div>
</template>

<script>
import Thehead from "./head.vue"
export default {
    name: 'EP',
    components: { Thehead }
}
</script>

<style>
.message {
    text-align: center;
    font-size: 50px;
    color: #00b5ad;
    min-height: 90vh;
    line-height: 90vh;
}
</style>