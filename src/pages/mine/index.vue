<template>
  <div class="index">
    <div class="user-info">
      <div class="user-img"><open-data type="userAvatarUrl"></open-data></div>
      <div class="username">王晓亚老师</div>
      <div class="userphone">13789767654</div>
    </div>
    <personal />
    <class-list />
  </div>
</template>

<script>
import Personal from './components/Personal'
import ClassList from './components/ClassList'
export default {
  components: {
    Personal,
    ClassList
  }
}
</script>

<style lang="less" scoped>
.user-info {
  margin-top: 176rpx;
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
