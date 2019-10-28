<template>
  <div class="personal-anaylse-item">
    <div class="top" @click="heightChange" :class="{'border-b': showInfo}">
      <img class="icon" src="@/native/img/sg.png" />
      <div class="name">身高<text class="desc">（走拼横木）</text></div>
      <div class="average">平均121cm</div>
      <div class="tag">优秀</div>
      <text class="iconfont iconright" />
    </div>
    <div class="bottom" :style="{height: `${height}px`}">
      <div class="content" id="content">
        <div class="tip">
          全班排名第<text class="red">1</text>名（班级平均<text class="red">110cm</text>）
        </div>
        <div class="info">
          <div class="tp">
            <div class="tp-text">123</div>
            <div class="tp-text">123</div>
            <div class="tp-text">123</div>
          </div>
          <div class="center">
            <div class="one"><img src="@/native/img/delete.png" class="icon" /></div>
            <div class="two"><img src="@/native/img/delete.png" class="icon" /></div>
            <div class="three"><img src="@/native/img/delete.png" class="icon" /></div>
            <div class="four"><img src="@/native/img/delete.png" class="icon" /></div>
          </div>
          <div class="btm">
            <div class="btm-text">需努力</div>
            <div class="btm-text">合格</div>
            <div class="btm-text">良好</div>
            <div class="btm-text">优秀</div>
          </div>
        </div>
        <div class="desc">反映幼儿上肢和腰腹肌肉力量，是影响幼儿体育活动的重要因素上肢力量良好，将来有成为大力水手的潜质！</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showInfo: false,
      height: 0,
      query: null
    }
  },
  methods: {
    heightChange () {
      this.showInfo = !this.showInfo
      if (this.showInfo) {
        let _this = this
        if (_this.query) {
          _this.query.exec(function (res) {
            _this.height = res[0].height
          })
        } else {
          _this.query = Megalo.createSelectorQuery()
          _this.query.select('#content').boundingClientRect()
          _this.query.exec(function (res) {
            _this.height = res[0].height
          })
        }
      } else {
        this.height = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.personal-anaylse-item {
  margin: 0 32rpx 24rpx;
  background: #fff;
  box-shadow: 0 4rpx 24rpx 0 rgba(49,191,255,0.1);
  border-radius: 24rpx;
  .top {
    display: flex;
    align-items: center;
    height: 108rpx;
    margin: 0 32rpx;
    .icon {
      width: 48rpx;
      height: 48rpx;
      margin-right: 16rpx;
    }
    .name {
      flex-grow: 1;
      font-size: 32rpx;
      line-height: 44rpx;
      font-weight: bold;
    }
    .desc {
      font-size: 24rpx;
    }
    .average {
      margin-right: 16rpx;
      font-size: 28rpx;
      line-height: 40rpx;
      color: #17AFF3;
    }
    .tag {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32rpx;
      padding: 0 16rpx;
      color: #fff;
      border-radius: 6rpx;
      background: #38A8FF;
      &.good {
        background: #0DE18C;
      }
      &.bad {
        background: #FF6889;
      }
      &.pass {
        background: rgba(255, 191, 11, 1);
      }
    }
    .iconfont {
      font-size: 24rpx;
      color: #C2C6D1;
    }
  }
  .bottom {
    height: 0;
    overflow: hidden;
    transition: height .4s;
    .content {
      padding: 0 32rpx 32rpx;
    }
    .tip {
      padding-top: 32rpx;
      font-size: 28rpx;
      line-height: 40rpx;
      .red {
        color: #FF3E6D;
      }
    }
    .info {
      .tp {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 32rpx 100rpx 28rpx;
        font-size: 20rpx;
        color: #9197A3;
        .tp-text {
          width: 100rpx;
          text-align: center;
        }
      }
      .center {
        display: flex;
        justify-content: space-between;
        .one, .two, .three, .four {
          width: 148rpx;
          height: 8rpx;
          position: relative;
        }
        .one {
          background: #FF6889;
        }
        .two {
          background: #FFBF0B;
        }
        .three {
          background: #38A8FF;
        }
        .four {
          background: #0DE18C;
        }
        .icon {
          position: absolute;
          left: 54rpx;
          top: -16rpx;
          width: 40rpx;
          height: 40rpx;
        }
      }
      .btm {
        display: flex;
        justify-content: space-between;
        margin-top: 24rpx;
        font-size: 20rpx;
        color: #9197A3;
        .btm-text {
          width: 148rpx;
          text-align: center;
        }
      }
    }
    .desc {
      margin-top: 48rpx;
      font-size: 28rpx;
      line-height: 40rpx;
    }
  }
}
</style>
