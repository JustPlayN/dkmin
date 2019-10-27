<template>
  <div class="sg-chart">
    <div class="echart-box">
      <ec-canvas canvas-id="sg-canvas" :ec="ec" />
    </div>
    <div class="tip">（1-2分偏矮，3分中等，4分偏高，5分超高）</div>
  </div>
</template>

<script>
let sgOption = {
  legend: {
    orient: 'horizontal',
    x: 'right',
    itemGap: 36,
    itemWidth: 12,
    itemHeight: 12,
    borderRadius: 6,
    formatter: function (name) {
      let arrObj = {
        man: '男',
        woman: '女'
      }
      return arrObj[name]
    },
    tooltip: {
      show: true
    }
  },
  grid: {
    top: 40,
    bottom: 20,
    right: 0,
    left: 24
  },
  tooltip: {},
  dataset: {
    dimensions: ['product', 'man', 'woman'],
    source: [
      { product: '偏矮', man: 43.3, woman: 85.8 },
      { product: '中等', man: 83.1, woman: 73.4 },
      { product: '偏高', man: 86.4, woman: 65.2 },
      { product: '超高', man: 72.4, woman: 53.9 }
    ]
  },
  xAxis: {
    type: 'category',
    nameTextStyle: {
      color: '#9197A3',
      fontSize: 10
    },
    splitNumber: 3,
    axisLine: {
      lineStyle: {
        color: '#D8D8D8'
      }
    },
    axisLabel: {
      color: '#9197A3'
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#D8D8D8'
      }
    }
  },
  yAxis: {
    name: '人数',
    nameTextStyle: {
      color: '#9197A3',
      fontSize: 10,
      padding: [0, 0, 10, 0]
    },
    splitNumber: 3,
    boundaryGap: false,
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#9197A3'
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#D8D8D8'
      }
    }
  },
  color: ['#38A8FF', '#FF6889'],
  series: [
    { type: 'bar', barWidth: '20%' },
    { type: 'bar', barWidth: '20%' }
  ]
}
export default {
  data () {
    return {
      ec: {}
    }
  },
  created () {
    this.ec.options = sgOption
  }
}
</script>

<style lang="less" scoped>
.sg-chart {
  .echart-box {
    padding: 32rpx 0;
    height: 460rpx;
  }
  .tip {
    text-align: center;
    font-size: 20rpx;
    line-height: 28rpx;
    color: #9197A3;
  }
}
</style>
