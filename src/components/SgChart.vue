<template>
  <div class="sg-chart">
    <div class="echart-box">
      <ec-canvas canvas-id="sg-canvas" :ec="ec" />
    </div>
    <div class="tip" v-if="obj.name === '身高'">（1-2分偏矮，3分中等，4分偏高，5分超高）</div>
    <div class="tip" v-else>（1分偏瘦，3分正常，5分偏胖）</div>
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
        boy: '男',
        girl: '女'
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
    dimensions: ['product', 'boy', 'girl'],
    source: []
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
  props: {
    obj: Object
  },
  data () {
    return {
      sgOption,
      ec: {}
    }
  },
  created () {
    if (this.obj.name === '身高') {
      this.sgOption.dataset.source = [
        { product: '偏矮', boy: this.obj.dwarfMaleNum, girl: this.obj.dwarfFemaleNum },
        { product: '中等', boy: this.obj.mediumMaleNum, girl: this.obj.mediumFemaleNum },
        { product: '偏高', boy: this.obj.highMaleNum, girl: this.obj.highFemaleNum },
        { product: '超高', boy: this.obj.superHighMaleNum, girl: this.obj.superHighFemaleNum }
      ]
    } else {
      this.sgOption.dataset.source = [
        { product: '偏瘦', boy: this.obj.thinMaleNum, girl: this.obj.thinFemaleNum },
        { product: '正常', boy: this.obj.normalMaleNum, girl: this.obj.normalFemaleNum },
        { product: '超重', boy: this.obj.overWeightMaleNum, girl: this.obj.overweightFemaleNum }
      ]
    }
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
