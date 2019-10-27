<template>
  <div class="chart-circle">
    <div class="title">杭州幼儿园</div>
    <div class="msg">
      <div class="left">
        <text class="msg-name">班级：</text>
        <text class="msg-desc">小三班</text>
      </div>
      <div class="right">
        <text class="msg-name">体测时间：</text>
        <text class="msg-desc">2017年10月30日</text>
      </div>
    </div>
    <div class="msg">
      <text class="msg-name">班级：</text>
      <text class="msg-desc">小三班</text>
    </div>
    <div class="echart-box">
      <ec-canvas canvas-id="circle-canvas" :ec="ec" />
    </div>
  </div>
</template>
<script>
let cirleOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'horizontal',
    x: 'center',
    bottom: 12,
    itemGap: 36,
    itemWidth: 12,
    itemHeight: 12,
    borderRadius: 6
  },
  grid: {
    top: 0
  },
  color: ['#0DE18C', '#38A8FF', '#FFBF0B', '#FF6889'],
  series: [
    {
      type: 'pie',
      radius: ['50%', '62%'],
      center: ['50%', '40%'],
      avoidLabelOverlap: false,
      top: 64,
      data: [
        { value: 310, name: '优秀' },
        { value: 234, name: '良好' },
        { value: 135, name: '合格' },
        { value: 248, name: '不合格' }
      ],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }
  ]
}

export default {
  data () {
    return {
      ec: {}
    }
  },
  created () {
    this.ec.options = cirleOption
  }
}
</script>

<style lang="less" scoped>
.chart-circle {
  margin: 32rpx;
  background: #fff;
  border-radius: 24rpx;
}
.title {
  font-size: 36rpx;
  line-height: 50rpx;
  font-weight: bold;
  padding: 32rpx 32rpx 8rpx;
}
.msg {
  display: flex;
  align-items: center;
  margin-top: 8rpx;
  padding: 0 32rpx;
  .left, .right {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .msg-name {
    color: #9197A3;
  }
}
.echart-box {
  height: 460rpx;
}
</style>
