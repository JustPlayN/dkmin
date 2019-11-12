<template>
  <div class="suggestion">
    <div class="s-title">强化目标</div>
    <div v-for="num in list" :key="num">
      <div class="suggest-item" v-if="obj[num]">
        <img class="icon" :src="obj[num].iconUrl" />
        <div class="right">
          <div class="title">{{obj[num].name}}</div>
          <div class="tips">相关训练</div>
          <div class="tag-box">
            <div class="tag" v-for="(item, index) in obj[num].desc" :key="`tag${index}`">
              <text class="text">{{item}}</text>
              <text class="iconfont iconright" />
            </div>
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
        3: {
          iconUrl: 'https://www.edolphin.cn/img/wfp.png',
          name: '十米折返跑（灵敏性）',
          desc: ['前滑步', '侧滑步', '原地拍球']
        },
        4: {
          iconUrl: 'https://www.edolphin.cn/img/tiao.png',
          name: '立定跳远（下肢力量）',
          desc: ['单脚跳', '前跨跳', '踢球']
        },
        5: {
          iconUrl: 'https://www.edolphin.cn/img/wq.png',
          name: '网球掷远（上肢力量）',
          desc: ['原地拍球', '双手接球', '地滚球']
        },
        6: {
          iconUrl: 'https://www.edolphin.cn/img/xtx.png',
          name: '双脚连续跳（协调性）',
          desc: ['单脚跳', '前滑步']
        },
        7: {
          iconUrl: 'https://www.edolphin.cn/img/rrx.png',
          name: '坐位体前屈（柔韧性）',
          desc: ['侧滑步']
        },
        8: {
          iconUrl: 'https://www.edolphin.cn/img/phm.png',
          name: '走平衡木（平衡力）',
          desc: ['单脚跳', '前滑步', '侧滑步']
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
