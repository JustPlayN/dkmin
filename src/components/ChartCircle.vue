<template>
  <div class="chart-circle">
    <div class="title">{{obj.schoolName}}</div>
    <div class="msg">
      <div class="left">
        <text class="msg-name">班级：</text>
        <text class="msg-desc">{{obj.className}}</text>
      </div>
      <div class="right">
        <text class="msg-name">体测时间：</text>
        <text class="msg-desc">{{obj.testTime}}</text>
      </div>
    </div>
    <div class="msg">
      <text class="msg-name">体测人数：</text>
      <text class="msg-desc">{{obj.studentNum}}人</text>
    </div>
    <div class="echart-box">
      <ec-canvas canvas-id="circle-canvas" v-if="ec.options" :ec="ec" />
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
    borderRadius: 6,
    selectedMode: false
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
      // avoidLabelOverlap: false,
      top: 64,
      data: [],
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
  props: {
    obj: Object
  },
  data () {
    return {
      cirleOption,
      ec: {}
    }
  },
  created () {
    this.cirleOption.series[0].data = this.obj.data
    this.ec.options = this.cirleOption
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
