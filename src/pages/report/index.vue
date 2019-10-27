<template>
  <div class="index">
    <div class="top fixed-t">
      <div class="top-item"><text class="name">小三班</text><text class="iconfont iconchange" /></div>
      <div class="top-item">2015-10-02<text class="iconfont iconchange" /></div>
    </div>
    <div class="main">
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
    </div>
    <div class="btm-btn fixed-b">
      <text class="iconfont iconchange" />
      <div class="text">查看当次班级报告</div>
    </div>
  </div>
</template>

<script>
import ReportItem from './components/ReportItem'
export default {
  components: {
    ReportItem
  }
}
</script>

<style lang="less" scoped>
.index {
  padding-top: 106rpx;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 106rpx;
  padding: 0 32rpx;
  background: #fff;
  box-shadow: 0 4rpx 24rpx 0 rgba(49,191,255, .1);
  .top-item {
    display: flex;
    align-items: center;
    .name {
      font-size: 36rpx;
      font-weight: bold;
    }
    .date {
      font-size: 28rpx;
      line-height: 40rpx;
    }
  }
  .iconfont {
    margin-left: 8rpx;
    font-size: 32rpx;
    color: #17AFF3;
  }
}
.main {
  padding: 32rpx;
}
.btm-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 200rpx;
  bottom: 32rpx;
  width: 350rpx;
  height: 80rpx;
  box-shadow: 0 8rpx 24rpx 0 rgba(84,103,127, .12);
  border-radius: 40rpx;
  border: 1rpx solid rgba(225,227,232,1);
  background: #fff;
  .text {
    margin-left: 16rpx;
    font-size: 28rpx;
    font-weight: bold;
  }
  .iconfont {
    font-size: 40rpx;
    color: #17AFF3;
  }
}
</style>
