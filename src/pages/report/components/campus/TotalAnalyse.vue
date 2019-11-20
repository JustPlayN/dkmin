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
        <div class="item">园所平均</div>
        <div class="item" v-for="(item, index) in this.obj.data[1].value" :key="`left${index}`">{{arr[index]}}平均成绩：{{item}}分</div>
      </div>
    </div>
    <div class="desc">
      身体形态（身高/体重）：反映了孩子是否处于与之身高相对应的健康体重范围。<br>
      爆发力（网球掷远/立定跳远）与柔韧性（坐位体前屈）：用来衡量孩子肌肉骨骼系的整体健康状况。<br>
      灵敏性（10米折返跑）：反映人体在各种复杂的条件下，快速、准协调地改变身体姿势、运动方向和随机应变的能力，与幼儿的许多运动（活动）密切相关。<br>
      协调性（双脚连续跳）：协调不同系统、不同部位和不同器官协同配合完成某一动作的能力。与孩子的神经系统发育紧密相关。<br>
      平衡能力（走平衡木）：衡力维持身体姿势的能力，是人的中枢神经、前庭分析器、本体感受视觉感受器等机能的综合反映。
    </div>
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
  padding: 20rpx;
  background: #F5F8FF;
  border-radius: 12rpx;
  margin-top: 40rpx;
  font-size: 20rpx;
  line-height: 36rpx;
}
.score-box {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  line-height: 40rpx;
  color: #999;
  .left, .right {
    padding: 0 32rpx;
  }
}
</style>
