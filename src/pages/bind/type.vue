<template>
  <div class="type">
    <div class="nav fixed-t">
      <div class="nav-item" :class="{active: navStatus === 0}" @click="navStatus = 0">扫码绑定</div>
      <div class="nav-item" :class="{active: navStatus === 1}" @click="navStatus = 1">手动添加</div>
    </div>
    <div class="scan" v-if="navStatus === 0">
      <img src="@/native/img/watch.png" class="bracelet" />
      <div class="tip">您当前暂未绑定任何手环</div>
      <button class="nostyle btn" open-type="getPhoneNumber">扫一扫</button>
    </div>
    <div class="input-box" v-else>
      <div class="input">
        <text class="iconfont iconshouhuan" />
        <input class="code" type="text" v-model="code" maxlength="16" placeholder="请输入手环卡片上的16位字符串" />
      </div>
      <div class="btn" :class="{disabled: !code}">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navStatus: 0,
      code: ''
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  align-items: stretch;
  height: 96rpx;
  padding: 0 32rpx;
  background:#fff;
  box-shadow: 0 4rpx 24rpx 0 rgba(49,191,255,0.1);
  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
    &.active {
      color: #17AFF3;
      font-weight: bold;
      border-bottom: 4rpx solid #31BFFF;
      border-top: 4rpx solid #fff;
    }
  }
}
.scan {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 270rpx 120rpx 0;
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
.input-box {
  margin-top: 32rpx;
  padding-top: 128rpx;
  .input {
    display: flex;
    align-items: center;
    height: 96rpx;
    padding: 0 32rpx;
    background: #fff;
    .iconfont {
      margin-right: 24rpx;
      font-size: 40rpx;
      color: #C2C6D1;
    }
    .code {
      flex-grow: 1;
      font-size: 32rpx;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32rpx;
    height: 88rpx;
    font-size: 32rpx;
    font-weight: bold;
    border-radius: 44rpx;
    color: #fff;
    background: #31BFFF;
    &.disabled {
      background: rgba(49, 191, 255, .4);
    }
  }
}
</style>
