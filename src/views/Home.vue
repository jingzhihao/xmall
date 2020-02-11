<template>
  <div>
    <!--头部-->
    <top></top>
    <!--变化的部分-->
    <router-view></router-view>
    <!--底部-->
    <font></font>
  </div>
</template>

<script>
import top from '../components/home/Top'
import font from '../components/home/Font'
export default {
  data() {
    return {};
  },
  components: {
    font,
    top
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>