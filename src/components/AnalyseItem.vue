<template>
  <div class="anaylse-item">
    <div class="top" @click="heightChange" :class="{'border-b': showInfo}">
      <img class="icon" :src="obj.iconUrl" />
      <div class="name">
        {{obj.name}}
        <!-- <text class="desc" v-if="obj.desc">（{{obj.desc}}）</text> -->
      </div>
      <div class="average bad" v-if="obj.qualifiedPercent < 60">
        平均{{obj.average}}{{obj.unit}}
        <text v-if="obj.incNum > 0">(+{{obj.incNum}}{{obj.unit}})</text>
        <text v-else-if="obj.incNum < 0">({{obj.incNum}}{{obj.unit}})</text>
      </div>
      <div class="average pass" v-else-if="obj.qualifiedPercent < 80">
        平均{{obj.average}}{{obj.unit}}
        <text v-if="obj.incNum > 0">(+{{obj.incNum}}{{obj.unit}})</text>
        <text v-else-if="obj.incNum < 0">({{obj.incNum}}{{obj.unit}})</text>
      </div>
      <div class="average good" v-else-if="obj.qualifiedPercent < 90">
        平均{{obj.average}}{{obj.unit}}
        <text v-if="obj.incNum > 0">(+{{obj.incNum}}{{obj.unit}})</text>
        <text v-else-if="obj.incNum < 0">({{obj.incNum}}{{obj.unit}})</text>
      </div>
      <div class="average" v-else>
        平均{{obj.average}}{{obj.unit}}
        <text v-if="obj.incNum > 0">(+{{obj.incNum}}{{obj.unit}})</text>
        <text v-else-if="obj.incNum < 0">({{obj.incNum}}{{obj.unit}})</text>
      </div>
      <text class="iconfont" :class="{'iconjiantou-xia': !showInfo, 'iconjiantou-shang': showInfo}" />
    </div>
    <div class="bottom" :style="{height: `${height}px`}">
      <div class="content" :id="obj.elId">
        <div class="progress-box" v-if="obj.name !== '身高' && obj.name !== '体重'">
          <div class="p-desc">
            全班合格人数<text class="red">{{obj.qualifiedNum}}人</text>，
            合格率<text class="red">{{obj.qualifiedPercent}}%</text>
          </div>
          <div class="process bad" v-if="obj.qualifiedPercent < 60">
            <div class="processer" :style="{width: `${obj.qualifiedPercent}%`}" />
          </div>
          <div class="process pass" v-else-if="obj.qualifiedPercent < 80">
            <div class="processer" :style="{width: `${obj.qualifiedPercent}%`}" />
          </div>
          <div class="process good" v-else-if="obj.qualifiedPercent < 90">
            <div class="processer" :style="{width: `${obj.qualifiedPercent}%`}" />
          </div>
          <div class="process" v-else>
            <div class="processer" :style="{width: `${obj.qualifiedPercent}%`}" />
          </div>
        </div>
        <div class="sg-chart-box" v-else>
          <sg-chart v-if="showInfo" :obj="obj" />
        </div>
        <div class="desc">{{obj.remark}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SgChart from '@/components/SgChart'
export default {
  components: {
    SgChart
  },
  props: {
    obj: Object
  },
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
.anaylse-item {
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
      color: #0DE18C;
      &.good {
        color: #17AFF3;
      }
      &.bad {
        color: #FF6889;
      }
      &.pass {
        color: rgba(255, 191, 11, 1);
      }
    }
    // .tag {
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   height: 32rpx;
    //   padding: 0 16rpx;
    //   color: #fff;
    //   border-radius: 6rpx;
    //   background: #0DE18C;
    //   &.good {
    //     background: #38A8FF;
    //   }
    //   &.bad {
    //     background: #FF6889;
    //   }
    //   &.pass {
    //     background: rgba(255, 191, 11, 1);
    //   }
    // }
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
    .progress-box {
      padding-top: 32rpx;
      .p-desc {
        font-size: 28rpx;
        line-height: 40rpx;
      }
      .red {
        color: #FF3E6D;
      }
      .process {
        height: 32rpx;
        margin-top: 16rpx;
        background: rgba(13, 225, 140, .3);
        border-radius: 16rpx;
        position: relative;
        .processer {
          height: 32rpx;
          background: rgba(13, 225, 140, 1);
          border-radius: 16rpx;
        }
        &.good {
          background: rgba(59, 131, 165, .3);
          .processer {
            background: #31BFFF;
          }
        }
        &.bad {
          background: rgba(255, 104, 137, .3);
          .processer {
            background: rgba(255, 104, 137, 1);
          }
        }
        &.pass {
          background: rgba(255, 191, 11, .3);
          .processer {
            background: rgba(255, 191, 11, 1);
          }
        }
      }
    }
    .desc {
      margin-top: 48rpx;
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .sg-chart-box {
      height: 488rpx;
    }
  }
}
</style>
