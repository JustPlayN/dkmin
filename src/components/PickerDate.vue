<template>
  <div class="picker-class fixed-b">
    <div class="picker-box" :class="{'ease-in': showPicker, 'ease-out': !showPicker}">
      <div class="title border-b">
        <text class="sure" @click="cancel">取消</text>
        <text class="center">日期</text>
        <text class="sure" @click="sure">确定</text>
      </div>
      <picker-view class="picker-view" indicator-class="picker-indicator" :value="[index]" @change="pickerChange" >
        <picker-view-column>
          <div class="city-item" v-for="(item, index) in list" :key="index">{{item.dateTime}}</div>
        </picker-view-column>
      </picker-view>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    list: Array
  },
  data () {
    return {
      showPicker: true,
      idx: this.index   // 选中项的坐标
    }
  },
  methods: {
    cancel () {
      this.showPicker = false
      setTimeout(() => {
        this.$emit('close')
      }, 400)
    },
    sure () {
      this.cancel()
      setTimeout(() => {
        this.$emit('sure', { value: this.list[this.idx].dateTime, index: this.idx })
      }, 300)
    },
    pickerChange (e) {
      this.idx = e.detail.value[0]
    }
  }
}
</script>

<style lang="less" scoped>
.picker-class {
  display: flex;
  align-items: flex-end;
  z-index: 100;
  height: 100vh;
  background: rgba(0, 0, 0, .6);
}
.picker-box {
  width: 100%;
  background: #fff;
}
.ease-in {
  animation: easeInBottom .4s;
}
.ease-out {
  animation: easeOutBottom .4s;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 30rpx;
}
.sure {
  font-size: 28rpx;
  line-height: 36rpx;
}
.center {
  font-size: 28rpx;
  line-height: 36rpx;
  color: #a9a9a9;
}
.city-item {
  text-align: center;
}
.picker-view {
  height: 360rpx;
  padding: 0 54rpx;
  .city-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48rpx;
    font-size: 28rpx;
  }
}
</style>
