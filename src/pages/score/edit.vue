<template>
  <div class="edit">
    <div class="box" v-if="fieldId === '7'">
      <div class="item" @click="positive = !positive"><text class="iconfont" :class="positive ? 'iconcheckmark-circle' : 'iconcircle'" />正数</div>
      <div class="item" @click="positive = !positive"><text class="iconfont" :class="positive ? 'iconcircle' : 'iconcheckmark-circle'" />负数</div>
    </div>
    <div class="box" v-else></div>
    <div class="input-box">
      <input type="digit" class="input" v-model="score" :placeholder="placeholderList[fieldId] || '请输入孩子成绩'" />
    </div>
    <div class="btn" @click="modifyRecord">确定修改</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      studentNo: '',
      fieldId: '',
      date: '',
      score: '',
      positive: true,
      placeholderList: {
        '1': '请输入成绩，单位厘米。比如：106.6',
        '4': '请输入成绩，单位厘米。比如：106.6',
        '7': '请输入成绩，单位厘米。比如：6.6',
        '5': '请输入成绩，单位米。比如：6.6',
        '2': '请输入成绩，单位千克。比如：16.6',
        '8': '请输入成绩，单位秒。比如：6.6',
        '6': '请输入成绩，单位秒。比如：6.6',
        '3': '请输入成绩，单位秒。比如：6.6',
      }
    }
  },
  methods: {
    modifyRecord () {
      this.$request('mini/fieldEdit', {
        params: {
          studentNo: this.studentNo,
          fieldId: this.fieldId,
          date: this.date,
          score: this.positive ? Number(this.score) : - Number(this.score)
        }
      }).then(res => {
        if (res.code === '00000') {
          Megalo.showModal({
            content: '修改成功',
            confirmText: '确定',
            confirmColor: '#31BFFF',
            showCancel: false
          }).then(() => {
            Megalo.navigateBack()
          })
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad (option) {
    this.studentNo = option.studentNo
    this.fieldId = option.fieldId
    this.date = option.date
  }
}
</script>

<style lang="less" scoped>
.input-box {
  display: flex;
  align-items: center;
  padding: 0 32rpx;
  height: 80rpx;
  background: #fff;
  .input {
    width: 100%;
  }
}
.box {
  display: flex;
  align-items: center;
  padding: 24rpx 32rpx;
  .item {
    display: flex;
    align-items: center;
    margin-right: 64rpx;
    .iconfont {
      margin-right: 8rpx;
      color: #31BFFF;
    }
  }
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88rpx;
  margin: 32rpx;
  border-radius: 44rpx;
  font-size: 32rpx;
  line-height: 40rpx;
  font-weight: bold;
  background: #31BFFF;
  color: #fff;
}
</style>
