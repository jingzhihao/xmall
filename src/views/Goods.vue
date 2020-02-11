<template>
  <div class="xm-center goods-container">
    <div class="goods-top">
      <div :class="selected==='1'?'active':''" @click=" GetallGoodsData('1')">综合排序</div>
      <div :class="selected==='2'?'active':''" @click=" GetallGoodsData('2')">价格从低到高</div>
      <div :class="selected==='3'?'active':''" @click=" GetallGoodsData('3')">价格从高到低</div>
      <input type="text" v-model="priceGt" placeholder="价格"/>
      <div>-</div>
      <input type="text" v-model="priceLte" placeholder="价格"/>
      <Button type="primary" class="btn-true" @click=" GetallGoodsData('1')">确定</Button>
    </div>
    <div class="goods-box">
      <stly class="goods-each" v-for="item in goodsList" :key="item.id" :item="item" />
    </div>
    <Page
      class="page"
      :total="total"
      size="small"
      :page-size="pageSize"
      :page-size-opts="[ 12, 20 , 28 , 32 ]"
      show-elevator
      show-sizer
      @on-change="changePage"
      @on-page-size-change="changePageSize"
    />
  </div>
</template>

<script>
import stly from "../components/index/Stly";
export default {
  props: {},
  data() {
    return {
      goodsList: [],
      priceGt: null,
      priceLte: null,
      selected: "1",
      page: "1",
      total: null,
      pageSize: 20
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.GetallGoodsData("1");
  },
  watch: {},
  methods: {
    GetallGoodsData(selected) {
      let sort, priceGt, priceLte;
      this.selected = selected;
      selected === "2" ? (sort = 1) : selected === "3" ? (sort = -1) : "";
      if (this.priceGt && this.priceLte) {
        priceGt = this.priceGt;
        priceLte = this.priceLte;
      }
      this.$api
        .Allgoods(this.page, this.pageSize, sort, priceGt, priceLte)
        .then(res => {
          if (res.code === 200) {
            console.log(res);
            this.goodsList = res.data;
            this.total = res.total;
          }
        });
    },
    changePage(page) {
      this.page = page;
      this.GetallGoodsData("1");
    },
    changePageSize(pageSize) {
      this.pageSize = pageSize;
      this.GetallGoodsData("1");
    }
  },
  components: {
    stly
  }
};
</script>

<style scoped lang="scss">
.goods-container {
  .goods-top {
    display: flex;
    height: 60px;
    div {
      line-height: 30px;
      margin: 15px;
      height: 30px;
      font-size: 12px;
      cursor: pointer;
    }
    .active {
      color: #5683ea !important;
    }
    input {
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      border-radius: 5px;
      width: 80px;
      height: 30px;
      margin-top: 15px;
    }
    .btn-true {
      height: 30px;
      margin: 15px;
    }
  }
  .goods-box {
    overflow: hidden;
  }
  .goods-each {
    height: 430px;
    border: 0.1px solid #ccc;
  }
  .page {
    text-align: right;
    margin: 10px 0 50px;
  }
}
</style>
