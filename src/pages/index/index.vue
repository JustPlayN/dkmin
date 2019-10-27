<template>
  <div class="index">
    <device-item />
    <device-item />
    <device-item />
    <device-item />
    <device-item />
    <device-item />
    <device-item />
    <device-item />
  </div>
</template>

<script>
import DeviceItem from './components/DeviceItem'
export default {
  components: {
    DeviceItem
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
