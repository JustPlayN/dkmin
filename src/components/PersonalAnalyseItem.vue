<template>
  <div class="personal-anaylse-item">
    <div class="top" @click="heightChange" :class="{'border-b': showInfo}">
      <img class="icon" :src="obj.iconUrl" />
      <div class="name">
        {{obj.name}}
        <text class="desc" v-if="obj.desc">（{{obj.desc}}）</text>
      </div>
      <div class="average bad" v-if="obj.segment === '不合格'">{{obj.value}}{{obj.unit}}</div>
      <div class="average pass" v-else-if="obj.segment === '合格'">{{obj.value}}{{obj.unit}}</div>
      <div class="average good" v-else-if="obj.segment === '良好'">{{obj.value}}{{obj.unit}}</div>
      <div class="average" v-else>{{obj.value}}{{obj.unit}}</div>
      <div class="tag bad" v-if="obj.segment === '不合格'">不合格</div>
      <div class="tag pass" v-else-if="obj.segment === '合格'">合格</div>
      <div class="tag good" v-else-if="obj.segment === '良好'">良好</div>
      <div class="tag" v-else>优秀</div>
      <text class="iconfont" :class="{'iconjiantou-xia': !showInfo, 'iconjiantou-shang': showInfo}" />
    </div>
    <div class="bottom" :style="{height: `${height}px`}">
      <div class="content" :id="obj.elId">
        <div class="tip">
          全班排名第<text class="red">{{obj.rank}}</text>名（班级平均<text class="red">{{obj.averageValue}}{{obj.unit}}</text>）
        </div>
        <div class="info">
          <div class="tp">
            <div class="tp-text" v-for="(r, index) in obj.range" :key="`range${index}`">{{r}}</div>
          </div>
          <div class="center">
            <div class="one">
              <img v-if="obj.segment === '不合格'" src="https://www.edolphin.cn/img/emojibhg.png" class="icon" />
              </div>
            <div class="two">
              <img v-if="obj.segment === '合格'" src="https://www.edolphin.cn/img/emojihg.png" class="icon" />
            </div>
            <div class="three">
              <img v-if="obj.segment === '良好'" src="https://www.edolphin.cn/img/emojilh.png" class="icon" />
            </div>
            <div class="four">
              <img v-if="obj.segment === '优秀'" src="https://www.edolphin.cn/img/emojiyx.png" class="icon" />
            </div>
          </div>
          <div class="btm">
            <div class="btm-text">需努力</div>
            <div class="btm-text">合格</div>
            <div class="btm-text">良好</div>
            <div class="btm-text">优秀</div>
          </div>
        </div>
        <div class="desc">{{obj.remark}}</div>
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
  props: {
    obj: Object
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
          _this.query.select(`#${this.obj.elId}`).boundingClientRect()
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
      &.good {
        color: #0DE18C;
      }
      &.bad {
        color: #FF6889;
      }
      &.pass {
        color: rgba(255, 191, 11, 1);
      }
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
