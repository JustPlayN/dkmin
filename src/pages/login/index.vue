<template>
  <div class="login">
    <img class="logo" src="http://121.41.3.152/img/logo.png" />
    <div class="main">
      <div class="title">享智云</div>
      <div class="text marginTop">少年强则国强！</div>
      <div class="text">幼儿时期是身心发展的奠基阶段，要提高全民体能水平和身体素质，应从娃娃抓起。</div>
      <div class="text marginTop">通过体能测试，获得基本数据资料，找到幼儿体能训练的更好方法，将为幼儿园即将开展的户外</div>
      <div class="text">体育活动提供对比依据。</div>
      <button class="nostyle btn-p marginTop" open-type="getPhoneNumber" @getphonenumber="pLogin">家长登录</button>
      <button class="nostyle btn-t" open-type="getPhoneNumber" @getphonenumber="tLogin">老师登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: '',
      fromUrl: ''
    }
  },
  methods: {
    pLogin (e) {
      if (e.detail.iv) {
        this.login(e.detail, 5)
      }
    },
    tLogin (e) {
      if (e.detail.iv) {
        this.login(e.detail, 4)
      }
    },
    login (detail, val) {
      this.$request('wx/auth/login', {
        params: {
          code: this.code,
          encryptedData: detail.encryptedData,
          iv: detail.iv,
          roleId: val
        }
      }).then(res => {
        if (res.code === '00000') {
          this.$store.dispatch('putUserInfo', {
            phone: res.data.phone,
            roleId: res.data.roleId,
            token: res.data.token,
            userName: res.data.userName
          })
          if (this.fromUrl) {
            Megalo.navigateBack()
          } else if (res.data.roleId === '4') {       // 老师登录
            Megalo.switchTab({ url: '/pages/index/index' })
          } else {                                    // 家长登录
            Megalo.redirectTo({ url: `/pages/report/history` })
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
        this.getWxCode()
      })
    },
    getWxCode () {
      Megalo.login().then(e => {
        this.code = e.code
      })
    }
  },
  onLoad (options) {
    this.fromUrl = options.url
    this.getWxCode()
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  position: relative;
  padding: 176rpx 32rpx;
  background: url(http://121.41.3.152/img/bg.png) top /contain no-repeat;
  .logo {
    position: absolute;
    top: 96rpx;
    left: 295rpx;
    z-index: 10;
    width: 160rpx;
    height: 160rpx;
    box-shadow: 0 4rpx 32rpx 0 rgba(23,175,243,.18);
    border-radius: 44rpx;
  }
  .main {
    padding: 104rpx 32rpx 48rpx;
    background: #fff;
    border-radius: 24rpx;
  }
  .title {
    font-size: 36rpx;
    line-height: 50rpx;
    font-weight: bold;
    text-align: center;
  }
  .text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
    text-align: center;
  }
  .marginTop {
    margin-top: 48rpx;
  }
  .btn-p,
  .btn-t {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    border-radius: 44rpx;
    font-size: 32rpx;
    line-height: 40rpx;
    font-weight: bold;
    background: #31BFFF;
    color: #fff;
  }
  .btn-t {
    margin-top: 32rpx;
    background: #0DE18C;
  }
}
</style>
