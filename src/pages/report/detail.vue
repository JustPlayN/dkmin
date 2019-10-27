<template>
  <div class="detail">
    <chart-circle />
    <div class="nav border-b">
      <div class="nav-item" :class="{'border-b': navStatus === 0}" @click="navStatus = 0">概况分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 1}" @click="navStatus = 1">单项分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 2}" @click="navStatus = 2">方案建议</div>
    </div>
    <total-analyse v-if="navStatus === 0"  />
    <single-analyse v-if="navStatus === 1" />
  </div>
</template>

<script>
import ChartCircle from '@/components/ChartCircle'
import TotalAnalyse from './components/TotalAnalyse'
import SingleAnalyse from './components/SingleAnalyse'
export default {
  components: {
    ChartCircle,
    TotalAnalyse,
    SingleAnalyse
  },
  data () {
    return {
      navStatus: 0
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  padding-bottom: 80rpx;
}
.nav {
  display: flex;
  align-items: stretch;
  height: 92rpx;
  margin: 24rpx 32rpx 0;
  .nav-item {
    font-size: 28rpx;
    line-height: 92rpx;
    color: #9197A3;
    width: 33.33%;
    text-align: center;
    &.border-b {
      font-size: 32rpx;
      font-weight: bold;
      color: #17AFF3;
      &::after {
        bottom: -6rpx;
        border: 4rpx solid #31BFFF;
      }
    }
  }
}
</style>
