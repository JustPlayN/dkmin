<template>
  <div class="password">
    <div class="item-list">
      <div class="item border-b">
        <div class="left">登录手机号</div>
        <div class="right">18868888888</div>
      </div>
      <div class="item border-b">
        <div class="left">原密码</div>
        <input type="password" v-model="oldPwd" class="right" placeholder="请输入" />
      </div>
      <div class="item border-b">
        <div class="left">新密码</div>
        <input type="password" v-model="newPwd" class="right" placeholder="请输入" />
      </div>
    </div>
    <div class="btn" :class="{disabled: !oldPwd || !newPwd}">提交</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldPwd: '',
      newPwd: ''
    }
  }
}
</script>

<style lang="less" scoped>
.item-list {
  margin-top: 32rpx;
  background: #fff;
  padding: 0 32rpx;
  .item {
    display: flex;
    align-items: center;
    height: 94rpx;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .left {
    color: #9197A3;
  }
  .right {
    flex-grow: 1;
    text-align: right;
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
</style>
