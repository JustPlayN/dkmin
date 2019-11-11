<template>
  <div class="net">
    <div class="item"><div class="icon">1</div><div>保存二维码，扫一扫开始配网</div></div>
    <div class="item"><div class="icon">2</div><div>长按设备开关3秒，确认听到声音</div></div>
    <div class="item"><div class="icon">3</div><div>输入Wi-Fi密码</div></div>
    <div class="item"><div class="icon">4</div><div>连接设备</div></div>
    <img src="https://www.edolphin.cn/img/cnet.jpeg" class="net-img" />
    <div class="btn" @click="saveImg" v-if="saveRight">保存二维码，扫一扫开始配网</div>
    <button openType="openSetting" class="nostyle btn" v-else>保存二维码，扫一扫开始配网</button>
  </div>
</template>
<config>
{
  navigationBarTitleText: '联网配置',
  disableScroll: true
}
</config>
<script>
export default {
  data () {
    return {
      saveRight: false
    }
  },
  methods: {
    saveImg () {
      Megalo.getImageInfo({
        src: 'https://www.edolphin.cn/img/bg.png'
      }).then(res => {
        Megalo.saveImageToPhotosAlbum({
          filePath: res.path
        }).then(res => {
          Megalo.showToast({ title: '保存成功', icon: 'none' })
        }).catch(() => {
          Megalo.showToast({ title: '保存失败', icon: 'none' })
        })
      })
    }
  },
  onShow () {
    Megalo.getSetting().then(res => {
      console.log(res)
      if (res.authSetting['scope.writePhotosAlbum'] === false) {
        this.saveRight = false
      } else {
        this.saveRight = true
      }
    })
  }
}
</script>

<style lang="less" scoped>
.net {
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60rpx;
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 40rpx;
    width: 480rpx;
    font-size: 28rpx;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32rpx;
      width: 32rpx;
      margin-right: 20rpx;
      border-radius: 16rpx;
      background: #17AFF3;
      color: #fff;
    }
  }
  .net-img {
    width: 480rpx;
    height: 480rpx;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    width: 600rpx;
    margin-top: 40rpx;
    font-size: 32rpx;
    background: #17AFF3;
    color: #fff;
    border-radius: 44rpx;
  }
}
</style>
