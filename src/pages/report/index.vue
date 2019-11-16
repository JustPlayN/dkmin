<template>
  <div class="index" :class="{notice: notice}">
    <div class="top-box fixed-t">
      <div class="tips" v-if="notice">
        <text class="iconfont iconlaba" />
        <text>通知：{{notice}}</text>
      </div>
      <div class="top">
        <div class="top-item" @click="showPickerClass = true">
          <text class="name">{{nowClass.name}}</text>
          <text class="iconfont iconchange" v-if="classList.length > 1" />
        </div>
        <div class="top-item" @click="showPickerDate = true">{{nowDate}}<text class="iconfont iconchange" /></div>
      </div>
    </div>
    <div class="main">
      <report-item v-for="item in reportList.slice(0, showLength)" :key="item.studentNo" :obj="item" @click="toReport(item)" />
    </div>
    <div class="btm-btn fixed-b" @click="checkReport" v-if="reportList.length > 0">
      <text class="iconfont iconchange" />
      <div class="text">查看当次班级报告</div>
    </div>
    <div class="empty" v-if="reportList.length === 0">
      <img src="https://www.edolphin.cn/img/bracelet.png" class="empty-img" />
      <div class="empty-desc">
        {{nowDate}}{{nowClass.name}}<br>
        还未有任何体测信息哦
      </div>
    </div>
    <picker-class v-if="classList.length > 0 && showPickerClass" :list="classList" :index="classIndex"
      @close="showPickerClass = false" @sure="getNowClass" />
    <picker-date v-if="dateList.length > 0 && showPickerDate" :list="dateList" :index="dateIndex"
      @close="showPickerDate = false" @sure="getNowDate" />
  </div>
</template>
<config>
{
  enablePullDownRefresh: true
}
</config>
<script>
import ReportItem from './components/ReportItem'
import PickerClass from '@/components/PickerClass'
import PickerDate from '@/components/PickerDate'
export default {
  components: {
    ReportItem,
    PickerClass,
    PickerDate
  },
  data () {
    return {
      showPickerClass: false,
      showPickerDate: false,
      reportList: [],
      classList: [],
      classIndex: 0,
      nowClass: {},
      dateList: [],
      nowDate: '',
      dateIndex: 0,
      canCreateReport: false,
      showLength: 8,
      notice: ''
    }
  },
  methods: {
    toReport (obj) {
      Megalo.navigateTo({ url: `/pages/report/personalDetail?studentNo=${obj.studentNo}&date=${obj.date}` })
    },
    getNowClass (obj) {
      if (this.classIndex !== obj.index) {
        this.nowClass = obj.value
        this.classIndex = obj.index
        this.getReportList()
      }
    },
    getNowDate (obj) {
      if (this.dateIndex !== obj.index) {
        this.nowDate = obj.value
        this.dateIndex = obj.index
        this.getReportList()
      }
    },
    getReportList () {
      this.$request('mini/reportList', {
        params: {
          classId: this.nowClass.id,
          date: this.nowDate
        }
      }).then(res => {
        if (res.code === '00000') {
          if (res.data) {
            this.showLength = 8
            this.canCreateReport = res.data.canCreateReport
            this.reportList = res.data.list
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getClassList () {
      this.$request('mini/teacher/classList').then(res => {
        if (res.code === '00000') {
          this.classList = res.data
          if (!this.nowClass.id && this.classList.length > 0) {
            this.classIndex = 0
            this.nowClass = this.classList[0]
            this.getReportList()
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    checkReport () {
      if (this.canCreateReport) {
        Megalo.navigateTo({
          url: `/pages/report/detail?classId=${this.nowClass.id}&date=${this.nowDate}`
        })
      } else {
        Megalo.showModal({
          content: '有部分同学，个别指标得分为0，且最近30天内无体测成绩，暂时无法生成报告，建议补全数据后再来查看报告',
          confirmText: '确定',
          confirmColor: '#31BFFF',
          showCancel: false
        })
      }
    },
    getDateList () {
      this.$request('mini/timeList').then(res => {
        if (res.code === '00000') {
          this.dateList = res.data || []
          if (this.dateIndex === 0 && this.dateList.length > 0) {
            this.nowDate = this.dateList[0].dateTime
          }
          this.getClassList()
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getNotice () {
      this.$request('message/get', {
        data: this.$store.getters.userInfo.roleId
      }).then(res => {
        if (res.code === '00000' && res.data) {
          let time = + new Date()
          if (time < res.data.endTime && time > res.data.startTime) {
            this.notice = res.data.content
          }
        } else {
          this.notice = ''
        }
      })
    }
  },
  onShow () {
    this.getDateList()
    this.getNotice()
  },
  onPullDownRefresh () {
    this.getReportList()
    Megalo.stopPullDownRefresh()
  },
  onReachBottom () {
    this.showLength += 8
  },
}
</script>

<style lang="less" scoped>
.index {
  padding-top: 106rpx;
  &.notice {
    padding-top: 178rpx;
  }
}
.top-box {
  background: #fff;
  box-shadow: 0 4rpx 24rpx 0 rgba(49,191,255, .1);
}
.tips {
  display: flex;
  align-items: center;
  height: 72rpx;
  background: rgba(244, 230, 190, 1);
  color: #FFA203;
  font-size: 26rpx;
  padding: 0 32rpx;
  .iconfont {
    margin-right: 16rpx;
    font-size: 32rpx;
  }
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 106rpx;
  padding: 0 32rpx;
  .top-item {
    display: flex;
    align-items: center;
    .name {
      font-size: 36rpx;
      font-weight: bold;
    }
    .date {
      font-size: 28rpx;
      line-height: 40rpx;
    }
  }
  .iconfont {
    margin-left: 8rpx;
    font-size: 32rpx;
    color: #17AFF3;
  }
}
.main {
  padding: 32rpx;
}
.btm-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 200rpx;
  bottom: 32rpx;
  width: 350rpx;
  height: 80rpx;
  box-shadow: 0 8rpx 24rpx 0 rgba(84,103,127, .12);
  border-radius: 40rpx;
  border: 1rpx solid rgba(225,227,232,1);
  background: #fff;
  .text {
    margin-left: 16rpx;
    font-size: 28rpx;
    font-weight: bold;
  }
  .iconfont {
    font-size: 40rpx;
    color: #17AFF3;
  }
}
</style>
