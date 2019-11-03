<template>
  <div class="index">
    <div class="user-info">
      <div class="user-img"><open-data type="userAvatarUrl"></open-data></div>
      <div class="username">{{userInfo.userName}}</div>
      <div class="userphone">{{userInfo.phone}}</div>
    </div>
    <class-list v-if="userInfo.roleId === '4'" :list="classList" />
  </div>
</template>

<script>
import ClassList from './components/ClassList'
import { mapGetters } from 'vuex'
export default {
  components: {
    ClassList
  },
  data () {
    return {
      classList: []
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    getClassList () {
      this.$request('mini/teacher/classList').then(res => {
        if (res.success) {
          this.classList = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
  },
  onLoad () {
    this.getClassList()
  }
}
</script>

<style lang="less" scoped>
.index {
  min-height: 100vh;
  padding: 176rpx 0 60rpx;
  background: url(http://121.41.3.152/img/bg.png) top /contain no-repeat;
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
