<template>
  <div class="history" :class="{'has-tip': notice}">
    <div class="tips fixed-t" v-if="notice">
      <text class="iconfont iconlaba" />
      <text>通知：{{notice}}</text>
    </div>
    <div class="user-info">
      <div class="user-img"><open-data type="userAvatarUrl"></open-data></div>
      <div class="username"><open-data type="userNickName"></open-data></div>
      <div class="right" v-if="children.length > 0" @click="openLink('/pages/mine/parent')">
        <text>个人中心</text>
        <text class="iconfont iconright" />
      </div>
    </div>
    <div class="main" v-if="reportList.length && children.length > 0">
      <div class="img-box">
        <img src="https://www.edolphin.cn/img/girl.png" v-if="nowChild.sex === 2" class="img" />
        <img src="https://www.edolphin.cn/img/boy.png" v-else class="img" />
      </div>
      <div class="banner">
        <text class="title">历史记录</text>
        <div class="right" @click="showPickerChild = true">切换宝宝<text class="iconfont iconchange" /></div>
      </div>
      <report-item v-for="(item, index) in reportList" :key="index" :obj="item" @click="toReportDetail(item)" />
    </div>
    <div class="empty" v-if="reportList.length === 0 && children.length > 0">
      <img src="https://www.edolphin.cn/img/bracelet.png" class="empty-img" />
      <div class="empty-desc">
        当前您孩子绑定的手环<br>
        还未产生任何体测数据哦
      </div>
    </div>
    <div class="content" v-if="children.length === 0">
      <img src="https://www.edolphin.cn/img/bracelet.png" class="bracelet" />
      <div class="tip">您当前暂未绑定任何手环</div>
      <div class="desc">建议参看手环卡片上的手环ID或二维码，进行设备绑定</div>
      <div class="btn" @click="openLink('/pages/bind/index')">绑定手环</div>
    </div>
    <picker-child v-if="children.length > 0 && showPickerChild" :list="children" :index="childIndex"
      @close="showPickerChild = false" @sure="getNowChild" />
  </div>
</template>

<script>
import ReportItem from './components/ReportItem'
import PickerChild from '@/components/PickerChild'
export default {
  components: {
    ReportItem,
    PickerChild
  },
  data () {
    return {
      showPickerChild: false,
      reportList: [],
      children: [],
      nowChild: {},
      childIndex: 0,
      notice: ''
    }
  },
  methods: {
    getNowChild (obj) {
      if (this.childIndex !== obj.index) {
        this.nowChild = obj.value
        this.childIndex = obj.index
        this.getReportList()
      }
    },
    openLink (url) {
      Megalo.navigateTo({ url })
    },
    getReportList () {
      this.$request('mini/childRecordList', {
        params: {
          studentNo: this.nowChild.studentNo
        }
      }).then(res => {
        if (res.code === '00000') {
          this.reportList = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getChildren () {
      this.$request('mini/checkBind').then(res => {
        if (res.code === '00000') {
          this.children = res.data.childList || []
          if (this.childIndex === 0 && this.children.length > 0) {
            this.nowChild = this.children[0] || []
            this.getReportList()
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    toReportDetail (val) {
      Megalo.navigateTo({ url: `/pages/report/personalDetail?studentNo=${val.studentNo}&date=${val.date}` })
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
    this.getChildren()
    this.getNotice()
  }
}
</script>

<style lang="less" scoped>
.history {
  padding-bottom: 80rpx;
  &.has-tip {
    padding-top: 72rpx;
  }
}
.tips {
  z-index: 999;
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
.user-info {
  display: flex;
  align-items: center;
  padding: 24rpx 32rpx;
  .user-img {
    width: 64rpx;
    height: 64rpx;
    margin-right: 16rpx;
    border-radius: 32rpx;
    overflow: hidden;
  }
  .username {
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
    .iconfont {
      font-size: 32rpx;
    }
  }
}
.main {
  padding: 0 32rpx;
  .banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32rpx 0 24rpx;
    .title {
      font-size: 32rpx;
      line-height: 44rpx;
      font-weight: bold;
    }
    .right {
      display: flex;
      color: #17AFF3;
      font-size: 28rpx;
      .iconfont {
        margin-left: 10rpx;
        font-size: 32rpx;
      }
    }
  }
  .img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      width: 600rpx;
      height: 356rpx;
    }
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 120rpx;
  margin-top: 100rpx;
  .bracelet {
    width: 320rpx;
    height: 320rpx;
  }
  .tip {
    margin-top: 60rpx;
    font-size: 32rpx;
    line-height: 44rpx;
    font-weight: bold;
  }
  .desc {
    margin-top: 16rpx;
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
    text-align: center;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 380rpx;
    height: 88rpx;
    margin-top: 32rpx;
    border-radius: 44rpx;
    background: #31BFFF;
    font-size: 32rpx;
    font-weight: bold;
    color: #fff;
  }
}
</style>
