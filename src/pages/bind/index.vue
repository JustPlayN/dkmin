<template>
  <div class="index">
    <div class="tips">
      <text>通知：10月中旬将上线运动智能方案推荐..</text>
    </div>
    <div class="user-info">
      <div class="user-img"><open-data type="userAvatarUrl"></open-data></div>
      <div class="username"><open-data type="userNickName"></open-data></div>
    </div>
    <div class="content">
      <img src="@/native/img/bracelet.png" class="bracelet" />
      <div class="tip">您当前暂未绑定任何手环</div>
      <div class="desc">建议参看手环卡片上的手环ID或二维码，进行设备绑定</div>
      <button class="nostyle btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">绑定手环</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getPhoneNumber (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  .tips {
    display: flex;
    align-items: center;
    height: 72rpx;
    background: rgba(254, 202, 80, .3);
    color: #FFA203;
    font-size: 26rpx;
    padding: 0 32rpx;
  }
  .user-info {
    display: flex;
    align-items: center;
    padding: 32rpx;
    .user-img {
      height: 64rpx;
      width: 64rpx;
      margin-right: 16rpx;
      border-radius: 32rpx;
      overflow: hidden;
    }
    .username {
      font-size: 28rpx;
      line-height: 40rpx;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 120rpx;
    .bracelet {
      width: 346rpx;
      height: 346rpx;
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
}
</style>
