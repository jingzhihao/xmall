<template>
  <div class="box">
    <div
      @mouseover="Over($refs.carousel)"
      @mousemove="Move($refs.carousel,$event)"
      @mouseout="Out($refs.carousel)"
      ref="carousel"
      class="carousel"
    >
      <Carousel autoplay v-model="value" :height="500" loop radius-dot @on-click="godetail">
        <CarouselItem v-for="item in slideshow" :key="item.id">
          <img class="picUrl" :src="item.picUrl" alt />
          <img class="picUrl2" :src="item.picUrl2" alt />
          <img class="picUrl3" :src="item.picUrl3" alt />
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      option: {
        offsetLeft: 0,
        offsetTop: 0,
        offsetWidth: 0,
        offsetHeight: 0
      }
    };
  },
  props: {
    slideshow: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {
    //鼠标移入获取当前dom的状态
    Over(dom) {
      this.option = {
        offsetLeft: dom.offsetLeft,
        offsetTop: dom.offsetTop,
        offsetWidth: dom.offsetWidth,
        offsetHeight: dom.offsetHeight
      };
    },
    //操作dom元素
    Move(dom, eve) {
      let mouseX = eve.pageX - this.option.offsetLeft;
      let mouseY = eve.pageY - this.option.offsetTop;
      let X = mouseX - this.option.offsetWidth / 2;
      let Y = this.option.offsetHeight / 2 - mouseY;
      dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`;
    },
    //鼠标移出还原dom元素状态
    Out(dom) {
      dom.style.transform = "rotateY(0deg) rotateX(0deg)";
    },
    godetail(index) {
      let id = this.slideshow[index].productId;
      this.$router.push({ name: "detail", params: { id: id } });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  perspective: 3000px;
}
.carousel {
  position: relative;
  width: 1220px;
  height: 500px;
  margin: 20px auto;
  background-size: 100% 100%;
  border-radius: 10px;
  transform-origin: 50% 50%;
  transform: rotateY(0deg) rotateX(0deg);
  transition: all 0.5s linear;
}
.ivu-carousel {
  margin: 20px auto;
  width: 1220px;
  height: 500px;
  border-radius: 10px;
}
/deep/.ivu-carousel-arrow,
/deep/.ivu-carousel-arrow:hover {
  display: none !important;
}
/deep/.ivu-carousel-dots {
  .radius {
    width: 15px !important;
    height: 15px !important;
    margin-top: -20px;
  }
}
.ivu-carousel-item {
  z-index: 999;
  position: relative;
  .picUrl {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 490px;
    bottom: 0;
  }
  .picUrl2 {
    position: absolute;
    width: 100%;
    height: 98%;
    transform: translateZ(40px);
  }
  .picUrl3 {
    position: absolute;
    width: 100%;
    transform: translateZ(30px);
  }
}
</style>