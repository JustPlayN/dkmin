<template>
  <div class="personal-detail">
    <circle :obj="circleData" />
    <div class="nav border-b">
      <div class="nav-item" :class="{'border-b': navStatus === 0}" @click="navStatus = 0">概况分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 1}" @click="navStatus = 1">单项分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 2}" @click="navStatus = 2">方案建议</div>
    </div>
    <div class="item-box">
      <total-analyse v-if="navStatus === 0"  />
      <single-analyse v-if="navStatus === 1" />
      <suggestion v-if="navStatus === 2" />
    </div>
  </div>
</template>
<config>
{
  usingComponents: {
    'ec-canvas': '../../native/ec-canvas/ec-canvas'
  }
}
</config>
<script>
import Circle from './components/personal/Circle'
import TotalAnalyse from './components/personal/TotalAnalyse'
import SingleAnalyse from './components/personal/SingleAnalyse'
import Suggestion from './components/personal/Suggestion'
import dayjs from 'dayjs'
export default {
  components: {
    Circle,
    TotalAnalyse,
    SingleAnalyse,
    Suggestion
  },
  data () {
    return {
      navStatus: 1,
      studentNo: '',
      date: '',
      circleData: {}
    }
  },
  methods: {
    childRecordDetail () {
      this.$request('mini/childRecordDetail', {
        params: {
          studentNo: this.studentNo,
          date: this.date
        }
      }).then(res => {
        if (res.success) {
          this.circleData = {
            name: res.data.studentName,
            age: res.data.age,
            schoolName: res.data.schoolName,
            className: res.data.className,
            date: res.data.date,
            segmentUrl: res.data.segmentUrl,
            segment: res.data.segment,
            percent: res.data.percent,
            score: res.data.score || 0,
            preScore: 35,
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad (opt) {
    this.date = opt.date ? dayjs(Number(opt.date)).format('YYYY-MM-DD') : '2019-9-26'
    this.studentNo = opt.studentNo || '10001'
    this.childRecordDetail()
  }
}
</script>

<style lang="less" scoped>
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
.item-box {
  min-height: 100vh;
  padding-bottom: 40rpx;
}
</style>
