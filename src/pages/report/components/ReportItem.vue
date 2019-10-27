<template>
  <div class="report-item">
    <div class="score error">28分</div>
    <div class="left">许婷盛</div>
    <div class="center">
      <div class="c-top">
        <div class="value-box">
          <div class="value">100.0cm</div>
          <div class="title">身高</div>
        </div>
        <div class="value-box">
          <div class="value">14.8kg</div>
          <div class="title">身高</div>
        </div>
      </div>
      <div class="c-btm">
        <text class="name">体测日期：</text>
        <text class="date">2019-10-23</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.report-item {
  display: flex;
  padding: 32rpx;
  background: #fff;
  border-radius: 24rpx;
  margin-bottom: 24rpx;
  position: relative;
  .score {
    position: absolute;
    top: 0;
    right: 0;
    width: 120rpx;
    height: 64rpx;
    text-align: center;
    font-size: 36rpx;
    line-height: 60rpx;
    border: 2rpx solid #03D27F;
    border-radius: 0 24rpx 0 24rpx;
    background: #0DE18C;
    color: #fff;
    &.error {
      border: 2rpx solid #FF3E6D;
      background: #FF6889;
    }
  }
  .left {
    margin-right: 52rpx;
    font-size: 32rpx;
    line-height: 44rpx;
    font-weight: bold;
  }
  .c-top {
    display: flex;
    align-items: center;
  }
  .value-box {
    width: 160rpx;
  }
  .value {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: bold;
  }
  .title {
    margin-top: 8rpx;
    color: #9197A3;
  }
  .c-btm {
    display: flex;
    margin-top: 24rpx;
    .name {
      color: #9197A3;
    }
  }
}
</style>
