<template>
  <div class="personal-detail">
    <circle :obj="circleData" />
    <div class="nav border-b">
      <div class="nav-item" :class="{'border-b': navStatus === 0}" @click="navStatus = 0">概况分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 1}" @click="navStatus = 1">单项分析</div>
      <div class="nav-item" :class="{'border-b': navStatus === 2}" @click="navStatus = 2">方案建议</div>
    </div>
    <div class="item-box">
      <total-analyse v-if="navStatus === 0 && totalAnalyseObj" :obj="totalAnalyseObj"  />
      <single-analyse v-if="navStatus === 1" :list="singleAnalyseList" />
      <suggestion v-if="navStatus === 2" :list="suggestionData" />
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
      navStatus: 0,
      studentNo: '',
      date: '',
      circleData: {},
      totalAnalyseObj: null,
      singleAnalyseList: [],
      suggestionData: []
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
            remark: res.data.remark,
            name: res.data.studentName,
            age: res.data.age,
            schoolName: res.data.schoolName,
            className: res.data.className,
            date: res.data.date,
            segmentUrl: res.data.segmentUrl,
            segment: res.data.segment,
            percent: res.data.percent,
            score: res.data.score || 0,
            preScore: res.data.preMeasureRecord ? res.data.preMeasureRecord.score || 0 : 0,
          }
          this.totalAnalyseObj = {
            summary: res.data.remark,
            grade: [
              `${res.data.heightDto.indicate}cm`,
              `${res.data.sensitivityDto.indicate}s`,
              `${res.data.flexDto.indicate}cm`,
              `${res.data.legStrengthDto.indicate}m`,
              `${res.data.limbStrengthDto.indicate}cm`,
              `${res.data.harmonyDto.indicate}s`,
              `${res.data.balanceDto.indicate}s`,
              `${res.data.weightDto.indicate}kg`
            ],
            data: [{
              value: [
                res.data.heightDto.score,
                res.data.sensitivityDto.score,
                res.data.flexDto.score,
                res.data.legStrengthDto.score,
                res.data.limbStrengthDto.score,
                res.data.harmonyDto.score,
                res.data.balanceDto.score,
                res.data.weightDto.score
              ],
              name: '各项成绩图'
            }]
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getEachValueAnalysis () {
      this.$request('mini/eachValueAnalysis', {
        params: {
          studentNo: this.studentNo,
          date: this.date
        }
      }).then(res => {
        if (res.success) {
          this.singleAnalyseList = [
            {
              ...res.data.heightDto,
              iconUrl: 'https://www.edolphin.cn/img/sg.png',
              name: '身高',
              desc: '',
              unit: 'cm',
              elId: 'sg'
            },
            {
              ...res.data.weightDto,
              iconUrl: 'https://www.edolphin.cn/img/tz.png',
              name: '体重',
              desc: '',
              unit: 'kg',
              elId: 'tz'
            },
            {
              ...res.data.balance,
              iconUrl: 'https://www.edolphin.cn/img/phm.png',
              name: '平衡力',
              desc: '走平衡木',
              unit: 's',
              elId: 'phm'
            },
            {
              ...res.data.harmony,
              iconUrl: 'https://www.edolphin.cn/img/xtx.png',
              name: '协调性',
              desc: '双脚连续跳',
              unit: 's',
              elId: 'xtx'
            },
            {
              ...res.data.upLimbStrength,
              iconUrl: 'https://www.edolphin.cn/img/wq.png',
              name: '上肢力量',
              desc: '网球掷远',
              unit: 'm',
              elId: 'wq'
            },
            {
              ...res.data.lowerLimbStrength,
              iconUrl: 'https://www.edolphin.cn/img/tiao.png',
              name: '下肢力量',
              desc: '立定跳远',
              unit: 'cm',
              elId: 'tiao'
            },
            {
              ...res.data.flex,
              iconUrl: 'https://www.edolphin.cn/img/rrx.png',
              name: '柔韧性',
              desc: '坐位体前屈',
              unit: 'cm',
              elId: 'rrx'
            },
            {
              ...res.data.sensitivity,
              iconUrl: 'https://www.edolphin.cn/img/wfp.png',
              name: '灵敏性',
              desc: '十米折返跑',
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
      this.$request('mini/child/proposal', {
        params: {
          studentNo: this.studentNo,
          date: this.date
        }
      }).then(res => {
        if (res.success) {
          this.suggestionData = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad (opt) {
    this.date = opt.date ? dayjs(Number(opt.date)).format('YYYY-MM-DD') : ''
    this.studentNo = opt.studentNo || ''
    this.childRecordDetail()
    this.getEachValueAnalysis()
    this.getSuggestionObj()
  }
}
</script>

<style lang="less" scoped>
.personal-detail {
  padding-top: 32rpx;
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
.item-box {
  min-height: 100vh;
  padding-bottom: 40rpx;
}
</style>
