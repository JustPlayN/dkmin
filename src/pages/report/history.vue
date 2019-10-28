<template>
  <div class="history">
    <div class="user-info">
      <div class="user-img"><open-data type="userAvatarUrl"></open-data></div>
      <div class="username"><open-data type="userNickName"></open-data></div>
      <div class="right">
        <text>个人中心</text>
        <text class="iconfont iconright" />
      </div>
    </div>
    <div class="main" v-if="reportList.length">
      <div class="img-box">
        <img src="@/native/img/girl.png" class="img" />
      </div>
      <div class="banner">
        <text class="title">历史记录</text>
        <div class="right">切换宝宝<text class="iconfont iconchange" /></div>
      </div>
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
    </div>
    <div class="empty">
      <img src="@/native/img/watchgray.png" class="empty-img" />
      <div class="empty-desc">
        当前您孩子绑定的手环<br>
        还未产生任何体测数据哦
      </div>
    </div>
  </div>
</template>

<script>
import ReportItem from './components/ReportItem'
export default {
  components: {
    ReportItem
  },
  data () {
    return {
      reportList: []
    }
  }
}
</script>

<style lang="less" scoped>
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
.empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 300rpx;
  .empty-img {
    width: 160rpx;
    height: 160rpx;
  }
  .empty-desc {
    margin-top: 32rpx;
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
    text-align: center;
  }
}
</style>
