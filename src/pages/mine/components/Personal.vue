<template>
  <div class="personal">
    <div class="item" @click="toPassword">
      <img src="@/native/img/pwd.png" class="item-icon" />
      <div class="name">修改密码</div>
      <text class="iconfont iconright" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toPassword () {
      Megalo.navigateTo({ url: `/pages/mine/password` })
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
  .iconfont {
    font-size: 32rpx;
    color: #C2C6D1;
  }
}
</style>
