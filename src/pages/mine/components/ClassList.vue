<template>
  <div class="class-list">
    <div class="class-item" v-for="item in list" :key="item.id">
      <div class="class">
        <text class="title">所带班级：</text>
        <div class="name">{{item.name}}</div>
      </div>
      <div class="compus">
        <text class="title">所在园所：</text>
        <div class="name">{{item.schoolName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style lang="less" scoped>
.class-list {
  padding: 8rpx 32rpx;
  .class-item {
    padding: 32rpx;
    margin-top: 24rpx;
    background: #fff;
    border-radius: 24rpx;
  }
  .class, .compus {
    display: flex;
    align-items: center;
  }
  .compus {
    margin-top: 26rpx;
  }
  .title {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
  }
  .name {
    font-size: 28rpx;
  }
}
</style>
