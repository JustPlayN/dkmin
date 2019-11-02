<template>
  <div class="detail">
    <chart-circle v-if="chartCircleObj" :obj="chartCircleObj" />
    <div class="nav border-b">
      <div class="nav-item" :class="{'border-b': navStatus === 0}" @click="navStatus = 0">概况分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 1}" @click="navStatus = 1">单项分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 2}" @click="navStatus = 2">方案建议</div>
    </div>
    <div class="item-box">
      <total-analyse v-if="navStatus === 0 && totalAnalyseObj" :obj="totalAnalyseObj" />
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
import ChartCircle from '@/components/ChartCircle'
import TotalAnalyse from './components/campus/TotalAnalyse'
import SingleAnalyse from './components/campus/SingleAnalyse'
import Suggestion from './components/campus/Suggestion'
export default {
  components: {
    ChartCircle,
    TotalAnalyse,
    SingleAnalyse,
    Suggestion
  },
  data () {
    return {
      navStatus: 0,
      classId: '',
      date: '',
      chartCircleObj: null,
      totalAnalyseObj: null
    }
  },
  methods: {
    getReportDate () {
      this.$request('mini/createBasicReport', {
        params: {
          classId: this.classId,
          date: this.date
        }
      }).then(res => {
        if (res.success) {
          this.chartCircleObj = {
            shoolName: res.data.shoolName,
            className: res.data.classId,
            testTime: res.data.testTime,
            studentNum: res.data.studentNum,
            data: [
              { value: res.data.excellentNum, name: '优秀' },
              { value: res.data.goodNum, name: '良好' },
              { value: res.data.qualifiedNum, name: '合格' },
              { value: res.data.unQualifiedNum, name: '不合格' },
            ]
          }
          this.totalAnalyseObj = {
            data: [{
              value: [
                res.data.classAverageHeight,
                res.data.classAverageSensitivity,
                res.data.classAverageFlex,
                res.data.classAverageLegStrength,
                res.data.classAverageLimbStrength,
                res.data.classAverageHarmony,
                res.data.classAverageBalance,
                res.data.classAverageWeight
              ],
              name: '班级平均'
            }, {
              value: [
                res.data.schoolAverageHeight,
                res.data.schoolAverageSensitivity,
                res.data.schoolAverageFlex,
                res.data.schoolAverageLegStrength,
                res.data.schoolAverageLimbStrength,
                res.data.schoolAverageHarmony,
                res.data.schoolAverageBalance,
                res.data.schoolAverageWeight
              ],
              name: '园所平均'
            }],
            indicator: [
              { name: '身高', max: 65 },
              { name: '灵敏', max: 16 },
              { name: '柔韧', max: 30 },
              { name: '下肢力量', max: 38 },
              { name: '上肢力量', max: 52 },
              { name: '协调性', max: 25 },
              { name: '平衡力', max: 25 },
              { name: '体重', max: 25 }
            ]
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
        this.chartCircleObj = {
          shoolName: '学校名称',
          className: '小三班',
          testTime: + new Date(),
          studentNum: 1000,
          data: [
            { value: 200, name: '优秀' },
            { value: 300, name: '良好' },
            { value: 100, name: '合格' },
            { value: 400, name: '不合格' },
          ]
        }
        this.totalAnalyseObj = {
          data: [
            {
              value: [43, 10, 28, 30, 50, 19, 20, 19],
              name: '班级平均'
            },
            {
              value: [50, 14, 28, 31, 42, 21, 12, 14],
              name: '园所平均'
            }
          ],
          indicator: [
            { name: '身高', max: 65 },
            { name: '灵敏', max: 16 },
            { name: '柔韧', max: 30 },
            { name: '下肢力量', max: 38 },
            { name: '上肢力量', max: 52 },
            { name: '协调性', max: 25 },
            { name: '平衡力', max: 25 },
            { name: '体重', max: 25 }
          ]
        }
      })
    }
  },
  onLoad (opt) {
    this.classId = opt.classId
    this.date = opt.date
    this.getReportDate()
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
