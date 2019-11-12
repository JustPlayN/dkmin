<template>
  <div class="index">
    <div class="fixed-t" @click="conectWifi">
      <img src="https://www.edolphin.cn/img/wifi.png" class="wifi" />
      <div class="tips">设备联网</div>
      <text class="iconfont iconright" />
    </div>
    <device-item v-for="item in deviceList" :key="item.id" :obj="item" />
  </div>
</template>

<script>
import DeviceItem from './components/DeviceItem'
export default {
  components: {
    DeviceItem
  },
  data () {
    return {
      deviceList: []
    }
  },
  methods: {
    conectWifi () {
      Megalo.navigateTo({ url: `/pages/net/index` })
    },
    getDeviceList () {
      this.$request('device/attribute/list', {
        params: 1
      }).then(res => {
        if (res.code === '00000') {
          this.deviceList = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad () {
    this.getDeviceList()
  }
}
</script>

<style lang="less" scoped>
.index {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 136rpx 32rpx;
  .fixed-t {
    display: flex;
    align-items: center;
    height: 88rpx;
    padding: 0 32rpx;
    background: #fff;
    .wifi {
      width: 40rpx;
      height: 40rpx;
      margin-right: 20rpx;
    }
    .tips {
      flex-grow: 1;
      font-size: 28rpx;
    }
    .iconfont {
      color: #C2C6D1;
    }
  }
}
</style>
