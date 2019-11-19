<template>
  <div class="device-card">
    <img src="https://www.edolphin.cn/img/qmark.png" @click="showModal" class="q-icon" />
    <img :src="obj.img" class="device-icon" />
    <div class="title">{{obj.deviceRange}}</div>
    <div class="desc">身体维度：{{obj.measureDimension}}</div>
    <div class="text">测量仪器：{{obj.deviceType}}</div>
    <div class="bottom">
      <div class="btn" @click="toClassList">查看记录</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: Object
  },
  methods: {
    showModal () {
      Megalo.showModal({
        title: this.obj.deviceRange,
        content: `测试说明：${this.obj.measureMethod}`,
        showCancel: false,
        confirmText: '我知道了',
        confirmColor: '#31BFFF'
      })
    },
    toClassList () {
      Megalo.navigateTo({ url: `/pages/score/list?fieldId=${this.obj.id}&title=${this.obj.deviceRange}` })
    }
  }
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
