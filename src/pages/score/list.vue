<template>
  <div class="list">
    <div class="top fixed-t">
      <div class="item-one">
        <div class="item-left">
          <text class="name">小三班</text><text class="iconfont iconchange" />
        </div>
        <div class="item-right">当前已测：12条</div>
      </div>
      <div class="item-two">
        <div class="item-left">2015-10-02<text class="iconfont iconchange" /></div>
        <div class="item-right">
          <div class="item">时间<text class="iconfont iconchange" /></div>
          <div class="item">成绩<text class="iconfont iconchange" /></div>
        </div>
      </div>
    </div>
    <score-list />
  </div>
</template>

<script>
import ScoreList from './components/ScoreList'
export default {
  components: {
    ScoreList
  }
}
</script>

<style lang="less" scoped>
.list {
  padding-top: 178rpx;
}
.top {
  height: 178rpx;
  padding: 24rpx 32rpx 32rpx;
  background: #fff;
  box-shadow: 0 4rpx 24rpx 0 rgba(49,191,255, .1);
  .item-one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item-left {
      display: flex;
      align-items: center;
    }
    .name {
      font-size: 36rpx;
      line-height: 50rpx;
      font-weight: bold;
    }
    .date {
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .item-right {
      color: #9197A3;
    }
  }
  .item-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32rpx;
    .item-left {
      display: flex;
      align-items: center;
      color: #9197A3;
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .item-right {
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        margin-left: 32rpx;
        font-size: 28rpx;
      }
    }
  }
  .iconfont {
    margin-left: 8rpx;
    color: #31BFFF;
  }
}
</style>
