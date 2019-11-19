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
        if (res.code === '00000') {
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
          if (this.circleData.score <= 20) {
            this.circleData.deg = this.circleData.score * 45 / 20
          } else if (this.circleData.score <= 28) {
            this.circleData.deg = (this.circleData.score - 20) * 45 / 8 + 45
          } else if (this.circleData.score <= 32) {
            this.circleData.deg = (this.circleData.score - 28) * 45 / 4 + 90
          } else {
            this.circleData.deg = (this.circleData.score - 32) * 45 / 8 + 135
          }
          if (this.circleData.preScore <= 20) {
            this.circleData.preDeg = this.circleData.preScore * 45 / 20
          } else if (this.circleData.preScore <= 28) {
            this.circleData.preDeg = (this.circleData.preScore - 20) * 45 / 8 + 45
          } else if (this.circleData.preScore <= 32) {
            this.circleData.preDeg = (this.circleData.preScore - 28) * 45 / 4 + 90
          } else {
            this.circleData.preDeg = (this.circleData.preScore - 32) * 45 / 8 + 135
          }
          this.circleData.preDeg = this.circleData.preDeg - this.circleData.deg
          let preRecord = res.data.preMeasureRecord || {
            balanceScore: 0,
            flexScore: 0,
            harmScore: 0,
            heightScore: 0,
            legScore: 0,
            limbScore: 0,
            senScore: 0,
            weightScore: 0,
            balance: 0,
            flex: 0,
            harmony: 0,
            height: 0,
            legStrength: 0,
            limbStrength: 0,
            sensitivity: 0,
            weight: 0
          }
          this.totalAnalyseObj = {
            summary: res.data.remark,
            grade: [
              `${res.data.balanceDto.value}s`,
              `${res.data.sensitivityDto.value}s`,
              `${res.data.weightDto.value}kg`,
              `${res.data.legStrengthDto.value}cm`,
              `${res.data.limbStrengthDto.value}m`,
              `${res.data.harmonyDto.value}s`,
              `${res.data.heightDto.value}cm`,
              `${res.data.flexDto.value}cm`,
            ],
            preGrade: [
              `${preRecord.balance}s`,
              `${preRecord.sensitivity}s`,
              `${preRecord.weight}kg`,
              `${preRecord.legStrength}cm`,
              `${preRecord.limbStrength}m`,
              `${preRecord.harmony}s`,
              `${preRecord.height}cm`,
              `${preRecord.flex}cm`,
            ],
            data: [{
              value: [
                res.data.balanceDto.score,
                res.data.sensitivityDto.score,
                res.data.weightDto.score,
                res.data.legStrengthDto.score,
                res.data.limbStrengthDto.score,
                res.data.harmonyDto.score,
                res.data.heightDto.score,
                res.data.flexDto.score,
              ],
              name: '本次成绩'
            }, {
              value: [
                preRecord.balanceScore,
                preRecord.senScore,
                preRecord.weightScore,
                preRecord.legScore,
                preRecord.limbScore,
                preRecord.harmScore,
                preRecord.heightScore,
                preRecord.flexScore,
              ],
              name: '上次成绩'
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
        if (res.code === '00000') {
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
        if (res.code === '00000') {
          this.suggestionData = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad (opt) {
    this.date = opt.date ? dayjs(Number(opt.date) || opt.date).format('YYYY-MM-DD') : ''
    this.studentNo = opt.studentNo || ''
    this.childRecordDetail()
    this.getEachValueAnalysis()
    this.getSuggestionObj()
  },
  onShareAppMessage () {
    return {
      title: `${this.circleData.name}的体测报告`,
      path: `/pages/report/personalDetail?date=${this.date}&studentNo=${this.studentNo}`
    }
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
