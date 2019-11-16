<template>
  <div class="children">
    <div class="child" v-for="item in children" :key="item.studentNo">
      <img class="child-icon" src="https://www.edolphin.cn/img/child.png" />
      <div class="right">
        <div class="name">{{item.studentName}}</div>
        <div class="info">
          <text class="title">年龄：</text>
          <text class="desc">{{item.age}}岁</text>
        </div>
        <div class="info">
          <text class="title">班级：</text>
          <text class="desc">{{item.className}}</text>
        </div>
        <div class="info">
          <text class="title">学号：</text>
          <text class="desc">{{item.studentNo}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      children: []
    }
  },
  methods: {
    getChildren () {
      this.$request('mini/childDetail').then(res => {
        if (res.code === '00000') {
          this.children = res.data
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad () {
    this.getChildren()
  }
}
</script>

<style lang="less" scoped>
.children {
  padding: 32rpx;
  .child {
    display: flex;
    align-items: flex-start;
    padding: 32rpx;
    background: #fff;
    border-radius: 24rpx;
    margin-bottom: 24rpx;
    .child-icon {
      width: 64rpx;
      height: 64rpx;
      flex-shrink: 0;
      margin-right: 24rpx;
    }
    .right {
      flex-grow: 1;
    }
    .name {
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .info {
      margin-top: 8rpx;
    }
    .title {
      color: #9197A3;
    }
  }
}
</style>
