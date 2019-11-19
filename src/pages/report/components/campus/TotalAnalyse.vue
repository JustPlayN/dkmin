<template>
  <div class="total-analyse">
    <div class="echart-box">
      <ec-canvas canvas-id="total-analyse" :ec="ec" />
    </div>
    <div class="score-box">
      <div class="left">
        <div class="item">班级平均</div>
        <div class="item" v-for="(item, index) in this.obj.data[0].value" :key="`left${index}`">{{arr[index]}}平均成绩：{{item}}分</div>
      </div>
      <div class="right">
        <div class="item">校园平均</div>
        <div class="item" v-for="(item, index) in this.obj.data[1].value" :key="`left${index}`">{{arr[index]}}平均成绩：{{item}}分</div>
      </div>
    </div>
    <div class="desc">{{obj.summary}}</div>
    <!-- <div class="tips">
      <img src="https://www.edolphin.cn/img/tips.png" class="tips-icon" />
      <div class="tips-text">本班幼儿上肢力量、协调性发展弱于全园平均,本班幼儿上肢力量、协调性发展弱于全园平均</div>
    </div> -->
  </div>
</template>

<script>
let analyseOption = {
  // tooltip: {
  //   position: ['20', '60'],
  //   formatter: (val) => {
  //     let arr = ['身高', '灵敏', '柔韧', '下肢', '上肢', '协调', '平衡', '体重']
  //     let str = val.data.value.map((item, index) => {
  //       return `${arr[index]}平均得分：${item}`
  //     }).join('\n')
  //     return `${val.data.name}\n${str}`
  //   }
  // },
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
      { name: '平衡力(走平衡木)', max: 5 },
      { name: '灵敏\n(十米折返跑)', max: 5 },
      { name: '体重', max: 5 },
      { name: '下肢力量\n(立定跳远)', max: 5 },
      { name: '上肢力量(网球掷远)', max: 5 },
      { name: '协调性\n(双脚连续跳)', max: 5 },
      { name: '身高', max: 5 },
      { name: '柔韧\n(坐位体前驱)', max: 5 },
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
      ec: {},
      arr: ['身高', '灵敏', '柔韧', '下肢', '上肢', '协调', '平衡', '体重']
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
  line-height: 48rpx;
}
.score-box {
  display: flex;
  align-items: flex-start;
  line-height: 40rpx;
  color: #999;
  .left, .right {
    width: 50%;
  }
}
// .tips {
//   display: flex;
//   margin-top: 32rpx;
//   .tips-icon {
//     height: 40rpx;
//     width: 40rpx;
//     margin-right: 16rpx;
//     flex-shrink: 0;
//   }
//   .tips-text {
//     font-size: 28rpx;
//     line-height: 40rpx;
//   }
// }
</style>
