<template>
  <div class="device-card">
    <img src="@/native/img/qmark.png" class="q-icon" />
    <img src="@/native/img/sg.png" class="device-icon" />
    <div class="title">身高</div>
    <div class="desc">身体维度：体重</div>
    <div class="text">测量仪器：身高体重测量</div>
    <div class="bottom">
      <img src="@/native/img/wifi.png" class="wifi" />
      <div class="btn">查看记录</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.device-card {
  width: 327rpx;
  height: 352rpx;
  padding: 24rpx;
  margin-bottom: 32rpx;
  border-radius: 24rpx;
  background: #fff;
  position: relative;
  .q-icon {
    width: 48rpx;
    height: 44rpx;
    position: absolute;
    top: 0;
    right: 0;
  }
  .device-icon {
    width: 64rpx;
    height: 64rpx;
  }
  .title {
    margin-top: 16rpx;
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: bold;
  }
  .desc {
    margin-top: 8rpx;
    font-size: 22rpx;
    color: #999;
  }
  .text {
    height: 64rpx;
    margin-top: 8rpx;
    font-size: 22rpx;
    color: #999;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8rpx;
    .wifi {
      width: 64rpx;
      height: 64rpx;
    }
    .btn {
      width: 160rpx;
      height: 64rpx;
      text-align: center;
      line-height: 60rpx;
      border: 2rpx solid #2CACE6;
      background: #31BFFF;
      border-radius: 32rpx;
      color: #fff;
    }
  }
}
</style>
