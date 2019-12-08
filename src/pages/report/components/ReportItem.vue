<template>
  <div class="report-item" @click="click">
    <div class="score" :class="{bad: obj.level === 1, pass: obj.level === 2, good: obj.level === 3}">{{obj.score}}分</div>
    <div class="left">{{obj.studentName}}</div>
    <div class="center">
      <div class="c-top">
        <div class="value-box">
          <div class="value">{{obj.height}}cm</div>
          <div class="title">身高</div>
        </div>
        <div class="value-box">
          <div class="value">{{obj.weight}}kg</div>
          <div class="title">体重</div>
        </div>
      </div>
      <div class="c-btm">
        <text class="name">体测日期：</text>
        <text class="date">{{obj.date | formatDate('YYYY-MM-DD')}}</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: Object
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
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
    border: 2rpx solid #0DE18C;
    border-radius: 0 24rpx 0 24rpx;
    background: #0DE18C;
    color: #fff;
    &.good {
      border: 2rpx solid #17AFF3;
      background: #17AFF3;
    }
    &.bad {
      border: 2rpx solid #FF3E6D;
      background: #FF6889;
    }
    &.pass {
      border: 2rpx solid rgba(255, 191, 11, 1);
      background: rgba(255, 191, 11, 1);
    }
  }
  .left {
    min-width: 100rpx;
    margin-right: 42rpx;
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
