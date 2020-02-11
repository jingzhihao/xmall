<template>
  <div class="header-container">
    <div class="header-top">
      <div ref="headerTop" class="xm-center header-top-box flex">
        <div>
          <a href="/" title="XMall商城官网">
            <i class="logo"></i>
          </a>
        </div>
        <div class="header-search">
          <Input
            suffix="ios-search"
            v-model="keyword"
            @on-change="search(keyword)"
            @on-blur="onBlur"
            @on-focus="showResult=true"
            placeholder="请输入商品信息"
            style="width: auto"
          />
          <div class="search-result" v-if="searchList.length>0&&showResult">
            <div
              v-for="item in searchList"
              :key="item.id"
              @click="godetail(item.productId)"
            >{{ item.productName }}</div>
          </div>
        </div>
        <div class="header-link-box">
          <div class="top-link" @click="jump('/goods')">全部商品</div>
          <div class="top-link" @click="jump('')">捐赠</div>
          <div>|</div>
        </div>
        <div ref="control" class="header-control flex">
          <div class="icon">
            <i class="iconfont icon-yonghu" @click="getUser"></i>
            <div v-if="username!==''" class="header-userinfo">
              <div class="userinfo-img">
                <img src="../../assets/logo.png" alt />
              </div>
              <div class="userinfo-name">{{username}}</div>
              <ul>
                <li
                  class="userinfo-menu"
                  v-for="item in usercontorl"
                  :key="item.id"
                  @click="contorl(item.path)"
                >{{item.title}}</li>
              </ul>
            </div>
          </div>
          <div
            class="icon"
            @click="goCart"
            @mouseenter="showCart(true)"
            @mouseleave="showCart(false)"
          >
            <i class="iconfont icon-gouwuche"></i>
            <div class="cart-num" :class="cartNum>0?'cart-num-red':''">{{cartNum}}</div>
            <shopCart v-show="show" class="header-cart" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="!($route.path==='/shopCart'||$route.path==='/payMent')&&flag" style="height:60px;"></div>
    <div
      v-if="!($route.path==='/shopCart'||$route.path==='/payMent')"
      :class="flag?'inFixed':'inTop'"
      class="header-bottom"
    >
      <div ref="headerBottom" class="header-bottom-box flex xm-center">
        <ul class="header-nav flex">
          <li
            class="nav-each"
            v-for="item in nav"
            :key="item.id"
            :class="item.path===$route.path?'nav-weight':''"
            @click="jump(item.path)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import shopCart from "./ShopCart";
export default {
  
  props: {},
  data() {
    return {
      nav: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "全部",
          path: "/goods"
        },
        {
          name: "品牌周边",
          path: ""
        },
        {
          name: "捐赠名单",
          path: ""
        },
        {
          name: "后台管理系统",
          path: ""
        },
        {
          name: "XPay支付系统",
          path: ""
        },
        {
          name: "XBoot开发平台",
          path: ""
        },
        {
          name: "宣传视频",
          path: ""
        },
        {
          name: "Github",
          path: ""
        },
        {
          name: "商用授权",
          path: ""
        }
      ],
      usercontorl: [
        {
          title: "我的订单",
          path: "orderList"
        },
        {
          title: "账号资料",
          path: "information"
        },
        {
          title: "收货地址",
          path: "addressList"
        },
        {
          title: "售后服务",
          path: "support"
        },
        {
          title: "我的优惠",
          path: "coupon"
        },
        {
          title: "退出",
          path: "exit"
        }
      ],
      flag: false,
      searchList: [],
      keyword: "",
      showResult: false
    };
  },
  computed: {
    cartNum() {
      return this.$store.state.cartNum;
    },
    username() {
      return this.$store.state.username;
    },
    show() {
      return this.$store.state.showCart;
    }
  },
  created() {},
  mounted() {
    //监听scroll
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  },
  watch: {
    //判断flag状态改变control元素的位置
    flag(val) {
      if (this.$refs.headerBottom) {
        if (val) {
          this.$refs.headerBottom.append(this.$refs.control);
        } else {
          this.$refs.headerTop.append(this.$refs.control);
        }
      }
    },
    $route(val) {
      if (val.path === "/shopCart" || val.path === "/payMent") {
        this.$refs.headerTop.append(this.$refs.control);
      }
    }
  },
  methods: {
    //导航栏跳转
    jump(item) {
      if (item !== "") {
        if (item !== this.$route.path) {
          this.$router.push(item);
        }
      } else {
        this.$Message.error("对不起！你不能使用");
      }
    },
    //搜索
    search(keyword) {
      if (keyword !== "") {
        this.$api.searchKeyword(keyword).then(res => {
          if (res.code === 200) {
            this.searchList = res.data;
          }
        });
      } else {
        this.searchList = [];
      }
    },
    //搜索跳转
    godetail(id) {
      if (this.$route.params) {
        setTimeout(() => {
          this.$router.go(0);
        }, 20);
      }
      this.$router.push({ name: "detail", params: { id: id } });
    },
    //搜索失去焦点
    onBlur() {
      setTimeout(() => {
        this.show = false;
      }, 200);
    },
    contorl(path) {
      if (path === "exit") {
        localStorage.removeItem("username");
        this.$store.state.username = "";
      }
    },
    getUser() {
      this.username === "" ? this.$router.push("/login") : "";
    },
    showCart(flag) {
      this.$store.state.showCart = flag;
    },
    goCart() {
      this.username === ""
        ? this.$router.push("/login")
        : this.$router.push("/shopCart");
    }
  },
  components: {
    shopCart
  }
};
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  .header-top {
    width: 100%;
    height: 100px;
    background: black;
    .icon:hover .iconfont {
      color: white;
    }
    .header-top-box {
      padding: 30px 0;
      .logo {
       //background: url("../../assets/xm-logo.png") no-repeat 50%;
        background-size: cover;
        display: block;
        width: 50px;
        height: 40px;
        background-position: 0 0;
      }
      .header-search {
        position: relative;
        left: 40%;
        margin-top: 5px;
        /deep/.ivu-input {
          width: 258px;
          height: 30px;
        }
        .search-result {
          position: absolute;
          background: white;
          width: 258px;
          padding: 10px;
          border-radius: 5px;
          z-index: 99;
          border: 1px solid gray;
        }
      }
      .header-control {
        height: 40px;
      }
      .header-link-box {
        position: absolute;
        right: 150px;
        display: flex;
        :nth-last-child(1) {
          line-height: 40px;
        }
      }
      .top-link {
        width: 110px;
        color: #c8c8c8;
        display: block;
        font-size: 14px;
        line-height: 40px;
        padding: 0 25px;
        cursor: pointer;
      }
      .top-link:hover {
        color: white;
      }
    }
  }
  .inTop {
    height: 90px;
    .header-bottom-box {
      padding: 31px 0;
    }
  }
  .inFixed {
    height: 60px;
    position: fixed;
    top: 0;
    .header-bottom-box {
      padding: 10px 0;
      .icon {
        height: 44px;
      }
      .icon:hover {
        color: black;
      }
    }
    .nav-each {
      line-height: 40px !important;
    }
    .header-control {
      animation: enter 0.5s;
      @keyframes enter {
        from {
          transform: translateY(-60px);
        }
        to {
          transform: translateY(0);
        }
      }
    }
  }
  .header-bottom {
    width: 100%;
    background: white;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    .header-nav {
      .nav-each {
        line-height: 28px;
        padding: 0 10px;
        font-size: 14px;
        cursor: pointer;
      }
      .nav-weight {
        font-weight: 700;
      }
    }
  }

  .header-control {
    position: absolute;
    right: 0;
    height: 20px;

    .icon {
      padding-top: 6px;
      margin-left: 50px;
      color: #999999;
      position: relative;
      &:hover {
        .header-userinfo,
        .header-cart {
          top: 40px;
        }
      }
    }
    .header-userinfo,
    .header-cart {
      position: absolute;
      padding-top: 20px;
      background: #fff;
      border: 1px solid #d6d6d6;
      border-color: rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      z-index: 10;
    }
    .header-userinfo {
      width: 168px;
      left: -70px;
      top: -3000px;
    }
    .header-cart {
      top: 40px;
      display: block;
      width: 360px;
      right: 0;
    }
    .userinfo-img {
      text-align: center;
      img {
        width: 46px;
        height: 46px;
      }
    }
    .userinfo-name {
      text-align: center;
      line-height: 30px;
      height: 30px;
      color: #616161;
      font-size: 12px;
    }
    .userinfo-menu {
      cursor: pointer;
      text-align: center;
      position: relative;
      border-top: 1px solid #f5f5f5;
      line-height: 44px;
      height: 44px;
      color: #616161;
      font-size: 12px;
      &:hover {
        background: #fafafa;
      }
    }
    .iconfont {
      cursor: pointer;
    }

    .icon-yonghu {
      font-size: 20px;
      line-height: 28px;
    }
    .icon-gouwuche {
      font-size: 22px;
      line-height: 28px;
      margin-right: 10px;
    }
    .cart-num {
      overflow: hidden;
      display: inline-block;
      font-size: 12px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      color: white;
      background: #969696;
      background-image: linear-gradient(#a4a4a4, #909090);
      box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
    }
    .cart-num-red {
      background: #eb746b;
      background-image: linear-gradient(#eb746b, #e25147);
      box-shadow: inset 0 0 1px hsla(0, 0%, 100%, 0.15),
        0 1px 2px hsla(0, 0%, 100%, 0.15);
    }
  }
}
</style>
