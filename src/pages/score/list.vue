<template>
  <div class="list">
    <div class="top fixed-t" v-if="classList.length > 0">
      <div class="item-one">
        <div class="item-left" @click="showPickerClass = true">
          <text class="name">{{nowClass.name}}</text>
          <text class="iconfont iconchange" v-if="classList.length > 1" />
        </div>
        <div class="item-right">当前已测：{{recordNum}}人</div>
      </div>
      <div class="item-two">
        <div class="item-left" @click="showPickerDate = true">{{nowDate}}<text class="iconfont iconchange" /></div>
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
    <div class="empty" v-if="recordList.length === 0">
      <img src="https://www.edolphin.cn/img/bracelet.png" class="empty-img" />
      <div class="empty-desc">
        {{nowDate}}{{nowClass.name}}<br>
        还未有任何体测信息哦
      </div>
    </div>
    <score-list :list="recordList" v-if="recordList.length" @remove="removeRecord" @modify="modifyRecord" :showLength="showLength" />
    <picker-class v-if="classList.length > 0 && showPickerClass" :list="classList" :index="classIndex"
      @close="showPickerClass = false" @sure="getNowClass" />
    <picker-date v-if="dateList.length > 0 && showPickerDate" :list="dateList" :index="dateIndex"
      @close="showPickerDate = false" @sure="getNowDate" />
  </div>
</template>
<config>
{
  enablePullDownRefresh: true
}
</config>
<script>
import ScoreList from './components/ScoreList'
import PickerClass from '@/components/PickerClass'
import PickerDate from '@/components/PickerDate'
export default {
  components: {
    ScoreList,
    PickerClass,
    PickerDate
  },
  data () {
    return {
      showPickerClass: false,
      showPickerDate: false,
      recordList: [],
      recordNum: 0,
      classList: [],
      nowClass: {},
      classIndex: 0,
      fieldId: 1,
      dateList: [],
      nowDate: '',
      dateIndex: 0,
      sort: 0,                  // 0：时间排序，1：成绩排序
      showLength: 12
    }
  },
  methods: {
    getNowDate (obj) {
      if (this.dateIndex !== obj.index) {
        this.nowDate = obj.value
        this.dateIndex = obj.index
        this.getRecordList()
      }
    },
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
            if (res.code === '00000') {
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
        this.getDateList()
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
        if (res.code === '00000') {
          if (res.data && res.data.length > 0) {
            this.classList = res.data
            if (this.classList.length > 0) {
              if (this.classIndex === 0) {
                this.nowClass = this.classList[0]
              } else {
                let classChange = true
                for (let item of this.classList) {
                  if (item.classId === this.nowClass.classId) {
                    classChange = false
                    break
                  }
                }
                if (classChange) {
                  this.nowClass = this.classId[0]
                }
              }
              this.getDateList()
            }
          }
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
        if (res.code === '00000') {
          this.recordList = res.data.recordList
          this.recordNum = res.data.count || 0
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    },
    getDateList () {
      this.$request('timeList', {
        params: this.nowClass.id
      }).then(res => {
        if (res.code === '00000') {
          this.dateList = res.data || []
          if (this.dateList.length > 0) {
            if (this.dateIndex === 0) {
              this.nowDate = this.dateList[0].dateTime
            } else {
              let timeChange = true
              for (let item of this.dateList) {
                if (item.dateTime === this.nowDate) {
                  timeChange = false
                  break
                }
              }
              if (timeChange) {
                this.nowDate = this.dateList[0].dateTime
              }
            }
            this.getRecordList()
          }
        } else {
          Megalo.showToast({ title: res.msg || '网路异常请稍后重试QAQ', icon: 'none' })
        }
      })
    }
  },
  onLoad (option) {
    this.fieldId = option.fieldId
    Megalo.setNavigationBarTitle({
      title: decodeURIComponent(option.title) || '享智云'
    })
    this.getClassList()
  },
  onShow () {
    if (this.nowDate && this.nowClass.id) {
      this.getRecordList()
    }
  },
  onPullDownRefresh () {
    this.getRecordList()
    Megalo.stopPullDownRefresh()
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
