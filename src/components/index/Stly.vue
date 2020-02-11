<template>
  <div class="pro-each">
    <img :src="item.picUrl?item.picUrl:item.productImageBig" alt />
    <div class="pro-name">{{item.productName}}</div>
    <div class="pro-sub">{{item.subTitle}}</div>
    <div class="pro-bottom">
      <div class="btn-group">
        <Button class="btn" @click="$go(item.productId)">查看详情</Button>
        <Button class="btn" type="primary" @click="addCart(item.productId)">加入购物车</Button>
      </div>
      <div class="pro-price">￥{{item.salePrice.toFixed(2)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.pro-each {
  float: left;
  background: white;
  width: 25%;
  height: 430px;
  overflow-y: hidden;
  transition: all 0.5s linear;
  text-align: center;
  cursor: pointer;
  img {
    overflow: hidden;
    margin: 50px auto 10px;
    width: 206px;
    height: 206px;
    display: block;
  }
  .pro-name {
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
    padding: 10px 0;
  }
  .pro-sub {
    line-height: 1.2;
    font-size: 12px;
    color: #d0d0d0;
    padding: 16px 0;
  }
  .pro-bottom {
    position: relative;
    width: 210px;
    margin: 0 auto;
    .btn-group {
      position: absolute;
      display: none;
      .btn {
        border-radius: 4px;
        font-size: 12px;
        width: 100px;
        height: 30px;
        line-height: 28px;
        vertical-align: middle;
        &:nth-child(1) {
          margin-right: 10px;
        }
      }
    }
    .pro-price {
      line-height: 30px;
      color: #d44d44;
      font-family: Arial;
      font-size: 18px;
      font-weight: 700;
    }
  }
}
.pro-each:hover {
  transform: translateY(-3px);
  box-shadow: 1px 1px 20px #999;
  .btn-group {
    display: block;
  }
  .pro-price {
    display: none;
  }
}
</style>