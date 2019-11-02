<template>
  <div class="children">
    <div class="child">
      <img class="child-icon" src="@/native/img/child.png" />
      <div class="right">
        <div class="name">刘俊宇</div>
        <div class="info">
          <text class="title">年龄：</text>
          <text class="desc">3.5岁</text>
        </div>
        <div class="info">
          <text class="title">班级：</text>
          <text class="desc">小三班</text>
        </div>
        <div class="info">
          <text class="title">学号：</text>
          <text class="desc">30000000</text>
        </div>
      </div>
    </div>
    <div class="child">
      <img class="child-icon" src="@/native/img/child.png" />
      <div class="right">
        <div class="name">刘俊宇</div>
        <div class="info">
          <text class="title">年龄：</text>
          <text class="desc">3.5岁</text>
        </div>
        <div class="info">
          <text class="title">班级：</text>
          <text class="desc">小三班</text>
        </div>
        <div class="info">
          <text class="title">学号：</text>
          <text class="desc">30000000</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.children {
  padding: 32rpx;
  .child {
    display: flex;
    align-items: flex-start;
    padding: 32rpx;
    background: #fff;
    border-radius: 24rpx;
    margin-bottom: 24rpx;
    .child-icon {
      width: 64rpx;
      height: 64rpx;
      flex-shrink: 0;
      margin-right: 24rpx;
    }
    .right {
      flex-grow: 1;
    }
    .name {
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .info {
      margin-top: 8rpx;
    }
    .title {
      color: #9197A3;
    }
  }
}
</style>
