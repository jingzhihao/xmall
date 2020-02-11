<template>
  <div>
    <div class="xm-center">
      <div class="hot-title">{{name}}</div>
      <div class="flex">
        <div class="hot-box" v-for="item in hot" :key="item.id">
           <stly class="hot-each" :item="item"></stly>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stly from '../index/Stly'
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
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}
.hot-title {
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
.flex {
  overflow-y: hidden;
}
.hot-box {
  width: 50%;
  flex: 1;
  height: 430px;
  text-align: center;
  
  .hot-each {
    width: 100%;
  }
}
</style>