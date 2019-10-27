<template>
  <div class="score-list">
    <div class="title border-b">
      <div class="one">姓名</div>
      <div class="score">成绩</div>
      <div class="point">得分</div>
      <div class="operate">操作</div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item border-b">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
    <div class="list-item">
      <div class="name">汪成平</div>
      <div class="grade">10</div>
      <div class="score">8</div>
      <div class="operate">
        <img class="o-icon" src="@/native/img/modify.png" />
        <img class="o-icon" src="@/native/img/delete.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.score-list {
  margin-top: 32rpx;
  background: #fff;
}
.title {
  display: flex;
  align-items: center;
  height: 64rpx;
  padding: 0 32rpx;
  color: #9197A3;
  .one {
    width: 200rpx;
  }
  .score {
    width: 174rpx;
  }
  .point {
    width: 152rpx;
  }
}
.list-item {
  display: flex;
  align-items: center;
  height: 128rpx;
  padding-left: 32rpx;
  .name {
    width: 200rpx;
    font-size: 32rpx;
    font-weight: bold;
  }
  .grade {
    width: 174rpx;
    font-size: 28rpx;
  }
  .score {
    width: 152rpx;
    font-size: 28rpx;
  }
  .operate {
    display: flex;
    .o-icon {
      width: 64rpx;
      height: 64rpx;
      margin-right: 32rpx;
    }
  }
}
</style>
