<template>
  <div class="edit">
    <div class="input-box">
      <input type="digit" class="input" v-model="score" placeholder="请输入孩子成绩" />
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
      score: ''
    }
  },
  methods: {
    modifyRecord () {
      this.$request('mini/fieldEdit', {
        params: {
          studentNo: this.studentNo,
          fieldId: this.fieldId,
          date: this.date,
          score: Number(this.score)
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
  margin-top: 24rpx;
  padding: 0 32rpx;
  height: 80rpx;
  background: #fff;
  .input {
    width: 100%;
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
