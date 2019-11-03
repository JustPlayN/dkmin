<template>
  <div class="total-analyse">
    <div class="echart-box">
      <ec-canvas canvas-id="total-analyse" :ec="ec" />
    </div>
    <div class="desc">{{obj.summary}}</div>
    <!-- <div class="tips">
      <img src="@/native/img/tips.png" class="tips-icon" />
      <div class="tips-text">本班幼儿上肢力量、协调性发展弱于全园平均,本班幼儿上肢力量、协调性发展弱于全园平均</div>
    </div> -->
  </div>
</template>

<script>
let analyseOption = {
  tooltip: {
    position: ['20', '60'],
    formatter: (val) => {
      let arr = ['身高', '灵敏', '柔韧', '下肢', '上肢', '协调', '平衡', '体重']
      let str = val.data.value.map((item, index) => {
        return `${arr[index]}平均得分：${item}`
      }).join('\n')
      return `${val.data.name}\n${str}`
    }
  },
  legend: {
    x: 'center',
    bottom: 12,
    itemGap: 36,
    itemWidth: 12,
    itemHeight: 12,
    borderRadius: 6
  },
  radar: {
    radius: '60%',
    center: ['50%', '40%'],
    name: {
      textStyle: {
        color: '#9197A3'
      }
    },
    indicator: [
      { name: '身高', max: 5 },
      { name: '灵敏', max: 5 },
      { name: '柔韧', max: 5 },
      { name: '下肢力量', max: 5 },
      { name: '上肢力量', max: 5 },
      { name: '协调性', max: 5 },
      { name: '平衡力', max: 5 },
      { name: '体重', max: 5 }
    ]
  },
  series: [{
    type: 'radar',
    data: []
  }],
  color: ['#FF6889', '#31BFFF'],
}

export default {
  props: {
    obj: Object
  },
  data () {
    return {
      analyseOption,
      ec: {}
    }
  },
  created () {
    this.analyseOption.series[0].data = this.obj.data
    this.ec.options = this.analyseOption
  }
}
</script>

<style lang="less" scoped>
.total-analyse {
  margin: 32rpx;
  padding: 32rpx;
  background: #fff;
  border-radius: 24rpx;
}
.echart-box {
  height: 650rpx;
}
.desc {
  margin-top: 40rpx;
  font-size: 28rpx;
  line-height: 40rpx;
}
.tips {
  display: flex;
  margin-top: 32rpx;
  .tips-icon {
    height: 40rpx;
    width: 40rpx;
    margin-right: 16rpx;
    flex-shrink: 0;
  }
  .tips-text {
    font-size: 28rpx;
    line-height: 40rpx;
  }
}
</style>
