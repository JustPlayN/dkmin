<template>
  <div class="circle">
    <div class="name">{{obj.name}}</div>
    <div class="msg">
      <div class="left">
        <text class="msg-name">年龄：</text>
        <text class="msg-desc">{{obj.age}}岁</text>
      </div>
      <div class="right">
        <text class="msg-name">学校：</text>
        <text class="msg-desc">{{obj.schoolName}}</text>
      </div>
    </div>
    <div class="msg">
      <div class="left">
        <text class="msg-name">班级：</text>
        <text class="msg-desc">{{obj.className}}</text>
      </div>
      <div class="right">
        <text class="msg-name">测试时间：</text>
        <text class="msg-desc">{{obj.date | formatDate('YYYY-MM-DD')}}</text>
      </div>
    </div>
    <div class="msg">
      <div class="left">
        <text class="msg-name">性别：</text>
        <text class="msg-desc">{{obj.sex === 1 ? '男' : '女'}}</text>
      </div>
    </div>
    <div class="c-box">
      <div class="score">本次{{obj.score}}分</div>
      <div class="pre-score">上次{{obj.preScore}}分</div>
      <div class="c-one" :style="`transform: rotate(${obj.deg - 45}deg);`">
        <div class="c-two" :style="`transform: rotate(${obj.preDeg}deg);`"></div>
      </div>
    </div>
    <div class="c-name">总体测试对比扇形图</div>
    <div class="c-tips">注：总分由各单项分数之和组成，满分40分</div>
    <div class="c-btm">
      <img :src="obj.segmentUrl" class="icon" />
      <div class="right" v-if="obj.segment === '优秀'">
        本次测量综合得分{{obj.score}}，{{obj.segment}}，超过了全班{{obj.percent}}%的同学，继续保持哦！
      </div>
      <div class="right" v-else>
        本次测量综合得分{{obj.score}}，{{obj.segment}}，超过了全班{{obj.percent}}%的同学，需要继续努力哦！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: Object
  }
}
</script>

<style lang="less" scoped>
.circle {
  margin: 0 32rpx;
  background: #fff;
  border-radius: 24rpx;
  padding: 32rpx;
  .name {
    font-size: 36rpx;
    line-height: 50rpx;
    font-weight: bold;
  }
  .msg {
    display: flex;
    align-items: center;
    margin-top: 8rpx;
    .left, .right {
      display: flex;
      align-items: center;
      width: 50%;
    }
    .msg-name {
      color: #9197A3;
    }
  }
  .c-box {
    display: flex;
    justify-content: center;
    margin-top: 78rpx;
    height: 266rpx;
    overflow: hidden;
    padding-top: 78rpx;
    background: url(https://www.edolphin.cn/img/circlebg.png) center /contain no-repeat;
    position: relative;
    .score,
    .pre-score {
      position: absolute;
      top: 82rpx;
      z-index: 10;
      left: 260rpx;
      width: 102rpx;
      text-align: center;
      font-size: 20rpx;
    }
    .pre-score {
      top: 124rpx;
    }
    .c-one {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 370rpx;
      width: 370rpx;
      border-radius: 50%;
      border: 36rpx solid #31BFFF;
      border-color: rgba(49, 191, 255, 0.1) rgba(49, 191, 255, 0.1) #31BFFF #31BFFF;
      transform: rotate(-225deg);
    }
    .c-two {
      height: 290rpx;
      width: 290rpx;
      border-radius: 50%;
      border: 36rpx solid #31BFFF;
      border-color:rgba(232, 235, 243, 0.3) rgba(232, 235, 243, 0.3) #E8EBF3 #E8EBF3;
    }
  }
  .c-name {
    margin-top: 26rpx;
    text-align: center;
  }
  .c-tips {
    margin-top: 8rpx;
    color: #9197A3;
    text-align: center;
  }
  .c-btm {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 32rpx;
    .icon {
      width: 80rpx;
      height: 80rpx;
      margin-right: 24rpx;
      flex-shrink: 0;
    }
    .right {
      font-size: 28rpx;
      line-height: 40rpx;
      color: #9197A3;
    }
  }
}
</style>
