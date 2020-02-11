<template>
  <div class="xm-center">
    <div class="title">{{name}}</div>
    <div class="box">
      <div v-for="(item,index) in hot" :key="item.id">
        <div v-if="index===0" class="pro-first" @click="$go(item.productId)">
          <div class="first-shadow"></div>
          <img :src="item.picUrl" alt />
        </div>
        <stly v-else :item="item"></stly>
      </div>
    </div>
  </div>
</template>

<script>
import stly from "../index/Stly";
export default {
  data() {
    return {};
  },
  props: {
    hot: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ""
    }
  },
  components: {
    stly
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.xm-center {
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px auto;
}

.title {
  width: 100%;
  height: 60px;
  background: linear-gradient(#fbfbfb, #ececec);
  border-bottom: 1px solid #d4d4d4;
  font-size: 18px;
  font-weight: 400;
  color: #626262;
  line-height: 60px;
  padding: 0 20px;
}
.box {
  overflow-x: hidden;
}
.pro-first {
  float: left;
  width: 50%;
  height: 430px;
  position: relative;
  img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: block;
  }
  .first-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.15s ease-out;
  }
  .first-shadow:hover {
    background: rgba(0, 0, 0, 0.04);
  }
}
</style>