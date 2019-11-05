<template>
  <div class="personal">
    <div class="item" @click="openLink('/pages/mine/braceletList')">
      <img src="https://www.edolphin.cn/img/shouhuan.png" class="item-icon" />
      <div class="name">我的手环</div>
      <div class="desc" v-if="num">{{num}}个</div>
      <text class="iconfont iconright" />
    </div>
    <div class="item" @click="openLink('/pages/mine/children')">
      <img src="https://www.edolphin.cn/img/baobao.png" class="item-icon" />
      <div class="name">宝宝信息</div>
      <text class="iconfont iconright" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    num: Number
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    openLink (url) {
      Megalo.navigateTo({ url })
    }
  }
}
</script>

<style lang="less" scoped>
.personal {
  margin-top: 32rpx;
  background: #fff;
  .item {
    display: flex;
    align-items: center;
    height: 96rpx;
    padding: 0 32rpx;
  }
  .item-icon {
    width: 40rpx;
    height: 40rpx;
    margin-right: 24rpx;
  }
  .name {
    flex-grow: 1;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .desc {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
  }
  .iconfont {
    font-size: 32rpx;
    color: #C2C6D1;
  }
}
</style>
