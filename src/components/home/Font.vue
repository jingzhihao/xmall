<template>
  <div>
    <div class="footer-container xm-center">
      <div class="footer-main">
        <div class="footer-left">
          <ul v-for="item in list" :key="item.id">
            <li>{{item.title}}</li>
            <li v-for="content in item.desc" :key="content.id">{{content}}</li>
          </ul>
        </div>
        <div class="footer-right">
          <div>1012139570</div>
          <div>周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
          <Button @click="add()">在线帮助</Button>
        </div>
      </div>
      <Divider />
      <div class="footer-beian">
        <ul class="flex beian-list">
          <li>Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</li>
          <li>
            <a href>法律声明</a>
          </li>
          <li>
            <a href>隐私条款</a>
          </li>
          <li>
            <a href>开发者中心</a>
          </li>
        </ul>
        <div class="beian-num">
          <span>蜀ICP备16030308号-1</span>
          <span>蜀ICP备16030308号</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      list: [
        { title: "订单服务", desc: ["购买指南", "支付方式", "送货政策"] },
        { title: "服务支持", desc: ["官方开源", "项目前端", "项目后端"] },
        { title: "自助服务", desc: ["个人博客", "个人简介", "个人视频"] },
        { title: "其他项目", desc: ["XPay支付系统", "数据共享", "待开发..."] },
        { title: "友情链接", desc: ["宇cccc", "Smartisan", "Vue"] },
        { title: "关注我吧", desc: ["腾讯 QQ", "新浪微博", "官方邮箱"] }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    add(){
      this.$Message.error(
       "离线帮助,没人帮助你，请自己靠自己 "
      );
    }
  },
  components: {},
  filters: {}
};
</script>

<style scoped lang="scss">
.footer-container {
  overflow: hidden;
  margin-top: 60px;
  height: 350px;
  .footer-main {
    display: flex;
    justify-content: space-between;
    .footer-left {
      display: flex;
      ul {
        line-height: 1.6;
        width: 150px;
        text-align: center;
        font-size: 12px;
        li {
          padding: 6px 0;
        }
      }
    }
    .footer-right {
      text-align: right;
    }
  }
  .footer-beian {
    .beian-list {
      li {
        font-size: 12px;
        padding: 0 10px;
        border-left: 1px solid #ccc;
        &:nth-child(1) {
          border: none;
          padding-left: 0;
        }
      }
    }
    .beian-num {
      color: #bdbdbd;
      font-size: 12px;
      height: 12px;
      line-height: 1;
      margin-top: 10px;
      span {
        margin-right: 20px;
      }
    }
  }
}
</style>
