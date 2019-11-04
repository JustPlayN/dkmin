<template>
  <div class="bracelet-list">
    <div class="bracelet-item">
      <img class="bind-img" src="https://www.edolphin.cn/img/braceletbind.png" />
      <div class="bind-info">
        <text class="name">李俊宇</text>
        <div class="code">ABDHM98078YHBF</div>
      </div>
    </div>
    <div class="btn">新增绑定</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.bracelet-list {
  padding: 32rpx;
  .bracelet-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32rpx;
    margin-bottom: 32rpx;
    background: #fff;
    border-radius: 24rpx;
    .bind-img {
      width: 478rpx;
      height: 116rpx;
    }
    .bind-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 16rpx;
      font-size: 28rpx;
      line-height: 40rpx;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    border-radius: 44rpx;
    font-size: 32rpx;
    line-height: 44rpx;
    font-weight: bold;
    background: #31BFFF;
    color: #fff;
  }
}
</style>
