<template>
  <div class="suggestion">
    <div class="s-title">强化目标</div>
    <div class="suggest-item" v-for="num in list" :key="num">
      <img class="icon" :src="obj[num].iconUrl" />
      <div class="right">
        <div class="title">{{obj[num].name}}</div>
        <div class="tips">相关训练</div>
        <div class="tag-box">
          <div class="tag">
            <text class="text">{{obj[num].desc}}</text>
          </div>
        </div>
      </div>
    </div>
    <div class="empty" v-if="list.length === 0">
      <img src="https://www.edolphin.cn/img/suggestEmpty.png" class="empty-img" />
      <div class="empty-desc">
        恭喜！该班级所有项目合格率均高于80% <br>
        暂无具体改进方案，强化合格率相对低的项目吧
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      obj: {
        1: {
          iconUrl: 'https://www.edolphin.cn/img/sg.png',
          name: '身高',
          desc: '注意饮食适当运动',
        },
        2: {
          iconUrl: 'https://www.edolphin.cn/img/tz.png',
          name: '体重',
          desc: '注意饮食适当运动',
        },
        3: {
          iconUrl: 'https://www.edolphin.cn/img/wfp.png',
          name: '灵敏性',
          desc: '十米折返跑',
        },
        4: {
          iconUrl: 'https://www.edolphin.cn/img/tiao.png',
          name: '下肢力量',
          desc: '立定跳远',
        },
        5: {
          iconUrl: 'https://www.edolphin.cn/img/wq.png',
          name: '上肢力量',
          desc: '网球掷远',
        },
        6: {
          iconUrl: 'https://www.edolphin.cn/img/xtx.png',
          name: '协调性',
          desc: '双脚连续跳',
        },
        7: {
          iconUrl: 'https://www.edolphin.cn/img/rrx.png',
          name: '柔韧性',
          desc: '坐位体前屈',
        },
        8: {
          iconUrl: 'https://www.edolphin.cn/img/phm.png',
          name: '平衡力',
          desc: '走平衡木',
        }
      }
    }
  },
}
</script>

<style lang="less" scoped>
.suggestion {
  padding: 32rpx 32rpx 0;
  .s-title {
    font-size: 32rpx;
    line-height: 44rpx;
    font-weight: bold;
  }
}
.suggest-item {
  display: flex;
  padding: 32rpx;
  margin-top: 24rpx;
  background: #fff;
  box-shadow: 0 4rpx 24rpx 0 rgba(49,191,255, .1);
  border-radius: 24rpx;
  .icon {
    flex-shrink: 0;
    width: 64rpx;
    height: 64rpx;
    margin-right: 16rpx;
  }
  .title {
    font-size: 32rpx;
    line-height: 44rpx;
    padding-top: 10rpx;
  }
  .tips {
    margin-top: 16rpx;
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9197A3;
  }
  .tag-box {
    display: flex;
    flex-wrap: wrap;
    .tag {
      display: flex;
      align-items: center;
      height: 64rpx;
      padding: 0 32rpx;
      margin: 24rpx 16rpx 0 0 ;
      background: #31BFFF;
      border-radius: 32rpx;
      font-size: 24rpx;
      color: #fff;
    }
    .iconfont {
      font-size: 24rpx;
    }
  }
}
.empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 120rpx 32rpx 0;
  .empty-img {
    width: 160rpx;
    height: 160rpx;
  }
  .empty-desc {
    margin-top: 32rpx;
    font-size: 28rpx;
    line-height: 40rpx;
    text-align: center;
    color: #9197A3;
  }
}
</style>
