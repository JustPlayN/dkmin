<template>
  <div class="list">
    <div class="top fixed-t">
      <div class="item-one">
        <div class="item-left" @click="showPickerClass = true">
          <text class="name">{{nowClass.name}}</text>
          <text class="iconfont iconchange" v-if="classList.length > 1" />
        </div>
        <div class="item-right">当前已测：{{recordNum}}条</div>
      </div>
      <div class="item-two">
        <div class="item-left">2015-10-02<text class="iconfont iconchange" /></div>
        <div class="item-right">
          <div class="item" :class="{active: sort === 0}" @click="changeSort(0)">
            时间<text class="iconfont iconjiantou-xia" />
          </div>
          <div class="item" :class="{active: sort === 1}" @click="changeSort(1)">
            成绩<text class="iconfont iconjiantou-xia" />
          </div>
        </div>
      </div>
    </div>
    <score-list :list="recordList" @remove="removeRecord" @modify="modifyRecord" :showLength="showLength" />
    <picker-class v-if="classList.length > 0 && showPickerClass" :list="classList" :index="classIndex"
      @close="showPickerClass = false" @sure="getNowClass" />
  </div>
</template>

<script>
import ScoreList from './components/ScoreList'
import PickerClass from '@/components/PickerClass'
export default {
  components: {
    ScoreList,
    PickerClass
  },
  data () {
    return {
      showPickerClass: false,
      recordList: [],
      recordNum: 0,
      classList: [],
      nowClass: {},
      classIndex: 0,
      fieldId: 1,
      nowDate: '2019-09-26',
      sort: 0,                  // 0：时间排序，1：成绩排序
      showLength: 12
    }
  },
  methods: {
    removeRecord (val) {
      Megalo.showModal({
        content: '确认清空本次分数吗？',
        confirmText: '确定',
        confirmColor: '#31BFFF',
        cancelText: '取消',
        cancelColor: '#434547'
      }).then(res => {
        if (res.confirm) {
          this.$request('mini/fieldDelete', {
            params: {
              studentNo: val.studentNo,
              fieldId: this.fieldId,
              date: this.nowDate
            }
          }).then(res => {
            if (res.success) {
              Megalo.showToast({ title: '操作成功', icon: 'none' })
              this.getRecordList()
            } else {
              Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
            }
          })
        }
      })
    },
    modifyRecord (val) {
      Megalo.navigateTo({
        url: `/pages/score/edit?studentNo=${val.studentNo}&fieldId=${this.fieldId}&date=${this.nowDate}`
      })
    },
    getNowClass (obj) {
      if (this.classIndex !== obj.index) {
        this.nowClass = obj.value
        this.classIndex = obj.index
        this.getRecordList()
      }
    },
    changeSort (val) {
      if (val !== this.sort) {
        this.sort = val
        this.getRecordList()
      }
    },
    getClassList () {
      this.$request('mini/teacher/classList').then(res => {
        if (res.success) {
          this.classList = res.data
          this.classIndex = 0
          this.nowClass = this.classList[0]
          this.getRecordList()
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getRecordList () {
      this.$request('mini/fieldRecord', {
        params: {
          classId: this.nowClass.id,
          fieldId: this.fieldId,
          date: this.nowDate,
          sort: this.sort
        }
      }).then(res => {
        if (res.success) {
          this.recordList = res.data.recordList
          this.recordNum = res.data.count || this.recordList.length || 0
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad (option) {
    this.fieldId = option.fieldId
  },
  onShow () {
    this.getClassList()
  },
  onReachBottom () {
    this.showLength += 8
  }
}
</script>

<style lang="less" scoped>
.list {
  padding-top: 178rpx;
}
.top {
  height: 178rpx;
  padding: 24rpx 32rpx 32rpx;
  background: #fff;
  box-shadow: 0 4rpx 24rpx 0 rgba(49,191,255, .1);
  .item-one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item-left {
      display: flex;
      align-items: center;
    }
    .name {
      font-size: 36rpx;
      line-height: 50rpx;
      font-weight: bold;
    }
    .date {
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .item-right {
      color: #9197A3;
    }
  }
  .item-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32rpx;
    .item-left {
      display: flex;
      align-items: center;
      color: #9197A3;
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .item-right {
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        margin-left: 32rpx;
        font-size: 28rpx;
      }
    }
  }
  .iconchange {
    margin-left: 8rpx;
    color: #31BFFF;
  }
  .iconjiantou-xia {
    color: #9197A3;
  }
  .active {
    .iconfont {
      color: #31BFFF;
    }
  }
}
</style>
