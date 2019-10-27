<template>
  <div class="total-analyse">
    <div class="echart-box">
      <my-echarts :echarts="echarts" :onInit="onInit" canvasId="analyse-canvas" throttleTouch />
    </div>
    <div class="desc">本班身高平均得分3.5分，体重平均得分4, 本班身高平均得分3.5分，体重平均得分4</div>
    <div class="tips">
      <img src="@/native/img/tips.png" class="tips-icon" />
      <div class="tips-text">本班幼儿上肢力量、协调性发展弱于全园平均,本班幼儿上肢力量、协调性发展弱于全园平均</div>
    </div>
  </div>
</template>

<script>
import echarts from '@/native/js/echarts'
// import echarts from 'echarts'
import myEcharts from '@/components/myChart/echarts'

let chart = null
let option = {
  tooltip: {
    position: ['20', '60'],
    formatter: (val) => {
      console.log(val)
      let arr = ['身高', '灵敏', '柔韧', '下肢', '上肢', '协调', '平衡', '体重']
      let str = val.data.value.map((item, index) => {
        return `${arr[index]}平均：${item}`
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
      { name: '身高', max: 65 },
      { name: '灵敏', max: 16 },
      { name: '柔韧', max: 30 },
      { name: '下肢力量', max: 38 },
      { name: '上肢力量', max: 52 },
      { name: '协调性', max: 25 },
      { name: '平衡力', max: 25 },
      { name: '体重', max: 25 },
    ]
  },
  series: [{
    type: 'radar',
    data: [
      {
        value: [43, 10, 28, 30, 50, 19, 20, 19],
        name: '班级平均'
      },
      {
        value: [50, 14, 28, 31, 42, 21, 12, 14],
        name: '园所平均'
      }
    ]
  }],
  color: ['#FF6889', '#31BFFF'],
}
function initChart (canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  chart.setOption(option)

  return chart // 返回 chart 后可以自动绑定触摸操作
}

export default {
  components: {
    myEcharts
  },
  data () {
    return {
      echarts,
      chart,
      onInit: null
    }
  },
  created () {
    console.log(this.chart)
    if (this.chart) {
      this.chart.resize()
    } else {
      this.onInit = initChart
    }
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
