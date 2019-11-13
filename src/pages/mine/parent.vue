<template>
  <div class="index">
    <div class="user-info">
      <div class="user-img"><open-data type="userAvatarUrl"></open-data></div>
      <div class="username">{{userInfo.userName}}</div>
      <div class="userphone">{{userInfo.phone}}</div>
    </div>
    <personal :num="braceletList.length" />
  </div>
</template>

<script>
import Personal from './components/Personal'
import { mapGetters } from 'vuex'
export default {
  components: {
    Personal
  },
  data () {
    return {
      braceletList: []
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    getBraceletList () {
      this.$request('mini/handCode/list').then(res => {
        if (res.success) {
          this.braceletList = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onShow () {
    this.getBraceletList()
  }
}
</script>

<style lang="less" scoped>
.index {
  min-height: 100vh;
  padding: 176rpx 0 60rpx;
  background: url(https://www.edolphin.cn/img/bg.png) top /contain no-repeat;
}
.user-info {
  position: relative;
  height: 250rpx;
  padding: 94rpx 48rpx 0;
  background: #fff;
  border-radius: 48rpx 48rpx 0 0;
  .user-img {
    position: absolute;
    top: -64rpx;
    left: 48rpx;
    width: 128rpx;
    height: 128rpx;
    border-radius: 64rpx;
    overflow: hidden;
    border: 4rpx solid #fff;
  }
  .username {
    font-size: 44rpx;
    line-height: 60rpx;
    font-weight: bold;
  }
  .userphone {
    margin-top: 10rpx;
    font-size: 28rpx;
    line-height: 40rpx;
  }
}
</style>
