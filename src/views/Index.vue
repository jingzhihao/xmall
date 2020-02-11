<template>
  <div>
    <!--首页的数据展示-->
    <!--轮播图-->
    <slideshow :slideshow="arr[0].panelContents"></slideshow>
    <!--导航1-->
    <navigation :navigation="arr[1].panelContents"></navigation>
    <!--热门-->
    <hot :hot="arr[2].panelContents" :name="arr[2].name"></hot>
    <!--官方-->
    <xhot :hot="arr[3].panelContents" :name="arr[3].name"></xhot>
    <!--精选-->
    <xhot :hot="arr[4].panelContents" :name="arr[4].name"></xhot>
    <!--周边-->
    <xhot :hot="arr[5].panelContents" :name="arr[5].name"></xhot>
    <!--导航2-->
    <navigation :navigation="arr[6].panelContents"></navigation>
  </div>
</template>

<script>
import slideshow from '../components/index/Slideshow'
import navigation from '../components/index/Navigation'
import hot from '../components/index/Hot'
import xhot from '../components/index/Xhot'
export default {
  data() {
    return {
      arr:[]
    };
  },
  components: {
    slideshow,
    navigation,
    hot,
    xhot
  },
  methods: {
    getIndex() {
      this.$api.getApp().then(res => {
        //console.log(res);
        this.arr = res.data
      });
    }
  },
  mounted() {
    this.getIndex();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>