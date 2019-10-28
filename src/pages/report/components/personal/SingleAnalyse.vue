<template>
  <div class="single-analyse">
    <analyse-item />
    <analyse-item />
    <analyse-item />
    <analyse-item />
    <analyse-item />
  </div>
</template>

<script>
import AnalyseItem from '@/components/PersonalAnalyseItem'
export default {
  components: {
    AnalyseItem
  }
}
</script>

<style lang="less" scoped>
.single-analyse {
  padding-top: 32rpx;
}
</style>
