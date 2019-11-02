<template>
  <div class="index">
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
    getDeviceList () {
      this.$request('device/attribute/list', {
        data: {}
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
  padding: 48rpx 32rpx;
}
</style>
