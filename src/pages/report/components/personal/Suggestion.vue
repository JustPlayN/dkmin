<template>
  <div class="suggestion">
    <div class="s-title">强化目标</div>
    <div class="suggest-item">
      <img class="icon" src="https://www.edolphin.cn/img/rrx.png" />
      <div class="right">
        <div class="title">坐位体前屈（柔韧）</div>
        <div class="tips">相关动作</div>
        <div class="tag-box">
          <div class="tag">
            <text class="text">策划部</text>
            <text class="iconfont iconright" />
          </div>
        </div>
      </div>
    </div>
    <div class="suggest-item">
      <img class="icon" src="https://www.edolphin.cn/img/rrx.png" />
      <div class="right">
        <div class="title">坐位体前屈（柔韧）</div>
        <div class="tips">相关动作</div>
        <div class="tag-box">
          <div class="tag">
            <text class="text">策划部</text>
            <text class="iconfont iconright" />
          </div>
          <div class="tag">
            <text class="text">原地排球</text>
            <text class="iconfont iconright" />
          </div>
        </div>
      </div>
    </div>
    <div class="suggest-item">
      <img class="icon" src="https://www.edolphin.cn/img/rrx.png" />
      <div class="right">
        <div class="title">坐位体前屈（柔韧）</div>
        <div class="tips">相关动作</div>
        <div class="tag-box">
          <div class="tag">
            <text class="text">策划部</text>
            <text class="iconfont iconright" />
          </div>
          <div class="tag">
            <text class="text">双手接球</text>
            <text class="iconfont iconright" />
          </div>
          <div class="tag">
            <text class="text">原地排球</text>
            <text class="iconfont iconright" />
          </div>
        </div>
      </div>
    </div>
    <div class="empty">
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
      padding: 0 24rpx 0 32rpx;
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
