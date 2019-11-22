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
      <single-analyse v-if="navStatus === 1" :list="singleAnalyseData" />
      <suggestion v-if="navStatus === 2" :list="suggestionData" />
      <div class="btn-box">
        <button class="nostyle btn" open-type="share">分享给好友</button>
      </div>
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
      totalAnalyseObj: null,
      singleAnalyseData: null,
      suggestionData: []
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
        if (res.code === '00000') {
          this.chartCircleObj = {
            schoolName: res.data.schoolName,
            className: res.data.className,
            testTime: res.data.testTime,
            studentNum: res.data.studentNum,
            data: [
              { value: res.data.excellentNum || 0, name: '优秀' },
              { value: res.data.goodNum || 0, name: '良好' },
              { value: res.data.qualifiedNum || 0, name: '合格' },
              { value: res.data.unQualifiedNum || 0, name: '不合格' }
            ]
          }
          this.totalAnalyseObj = {
            summary: res.data.summary,
            data: [{
              value: [
                res.data.classAverageBalance,
                res.data.classAverageSensitivity,
                res.data.classAverageWeight,
                res.data.classAverageLegStrength,
                res.data.classAverageLimbStrength,
                res.data.classAverageHarmony,
                res.data.classAverageHeight,
                res.data.classAverageFlex,
              ],
              name: '班级平均'
            }, {
              value: [
                res.data.schoolAverageBalance,
                res.data.schoolAverageSensitivity,
                res.data.schoolAverageWeight,
                res.data.schoolAverageLegStrength,
                res.data.schoolAverageLimbStrength,
                res.data.schoolAverageHarmony,
                res.data.schoolAverageHeight,
                res.data.schoolAverageFlex,
              ],
              name: '园所平均'
            }]
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getSingleData () {
      this.$request('mini/eachItemAnalysis', {
        params: {
          classId: this.classId,
          date: this.date
        }
      }).then(res => {
        if (res.code === '00000') {
          this.singleAnalyseData = [
            {
              ...res.data.heightDto,
              iconUrl: 'https://www.edolphin.cn/img/sg.png',
              name: '身高',
              desc: '',
              average: res.data.heightDto.averageHeight,
              unit: 'cm',
              elId: 'sg'
            },
            {
              ...res.data.weightDto,
              iconUrl: 'https://www.edolphin.cn/img/tz.png',
              name: '体重',
              desc: '',
              average: res.data.weightDto.averageWeight,
              unit: 'kg',
              elId: 'tz'
            },
            {
              ...res.data.balance,
              iconUrl: 'https://www.edolphin.cn/img/phm.png',
              name: '平衡力',
              desc: '走平衡木',
              average: res.data.balance.average,
              unit: 's',
              elId: 'phm'
            },
            {
              ...res.data.harmony,
              iconUrl: 'https://www.edolphin.cn/img/xtx.png',
              name: '协调性',
              desc: '双脚连续跳',
              average: res.data.harmony.average,
              unit: 's',
              elId: 'xtx'
            },
            {
              ...res.data.upLimbStrength,
              iconUrl: 'https://www.edolphin.cn/img/wq.png',
              name: '上肢力量',
              desc: '网球掷远',
              average: res.data.upLimbStrength.average,
              unit: 'm',
              elId: 'wq'
            },
            {
              ...res.data.lowerLimbStrength,
              iconUrl: 'https://www.edolphin.cn/img/tiao.png',
              name: '下肢力量',
              desc: '立定跳远',
              average: res.data.lowerLimbStrength.average,
              unit: 'cm',
              elId: 'tiao'
            },
            {
              ...res.data.flex,
              iconUrl: 'https://www.edolphin.cn/img/rrx.png',
              name: '柔韧性',
              desc: '坐位体前屈',
              average: res.data.flex.average,
              unit: 'cm',
              elId: 'rrx'
            },
            {
              ...res.data.sensitivity,
              iconUrl: 'https://www.edolphin.cn/img/wfp.png',
              name: '灵敏性',
              desc: '十米折返跑',
              average: res.data.sensitivity.average,
              unit: 's',
              elId: 'wfp'
            }
          ]
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getSuggestionObj () {
      this.$request('mini/class/proposal', {
        params: {
          classId: this.classId,
          date: this.date
        }
      }).then(res => {
        if (res.code === '00000') {
          this.suggestionData = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad (opt) {
    this.classId = opt.classId
    this.date = opt.date
    this.getReportDate()
    this.getSingleData()
    this.getSuggestionObj()
  },
  onShareAppMessage () {
    return {
      title: `${this.chartCircleObj.className}近期体测分析报告`,
      path: `/pages/report/detail?date=${this.date}&classId=${this.classId}`
    }
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
.btn-box {
  margin-top: 24rpx;
  padding: 24rpx 32rpx;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    border-radius: 44rpx;
    color: #fff;
    background: #31BFFF;
    font-size: 32rpx;
    font-weight: bold;
  }
}
</style>
