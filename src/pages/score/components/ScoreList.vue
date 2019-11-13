<template>
  <div class="score-list">
    <div class="title border-b">
      <div class="point">序号</div>
      <div class="one">姓名</div>
      <div class="score">成绩</div>
      <div class="point">得分</div>
      <div class="operate">操作</div>
    </div>
    <div class="list-item border-b" v-for="(item, index) in list.slice(0, showLength)" :key="item.studentNo">
      <div class="score">{{index + 1}}</div>
      <div class="name">{{item.studentName}}</div>
      <div class="grade">{{item.fieldValue}}</div>
      <div class="score">{{item.score}}</div>
      <div class="operate">
        <img class="o-icon" src="https://www.edolphin.cn/img/modify.png" @click="modify(item)" />
        <img class="o-icon" src="https://www.edolphin.cn/img/delete.png" @click="remove(item)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    showLength: Number
  },
  methods: {
    remove (item) {
      this.$emit('remove', item)
    },
    modify (item) {
      this.$emit('modify', item)
    }
  }
}
</script>

<style lang="less" scoped>
.score-list {
  margin-top: 32rpx;
  background: #fff;
}
.title {
  display: flex;
  align-items: center;
  height: 64rpx;
  padding: 0 32rpx;
  color: #9197A3;
  .one {
    width: 200rpx;
  }
  .score {
    width: 160rpx;
  }
  .point {
    width: 90rpx;
  }
}
.list-item {
  display: flex;
  align-items: center;
  height: 128rpx;
  padding-left: 32rpx;
  .name {
    width: 200rpx;
    font-size: 32rpx;
    font-weight: bold;
  }
  .grade {
    width: 160rpx;
    font-size: 28rpx;
  }
  .score {
    width: 90rpx;
    font-size: 28rpx;
  }
  .operate {
    display: flex;
    .o-icon {
      width: 64rpx;
      height: 64rpx;
      margin-right: 32rpx;
    }
  }
}
</style>
