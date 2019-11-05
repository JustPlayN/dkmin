<template>
  <div class="single-analyse">
    <analyse-item v-for="(item, index) in list" :key="index" :obj="item" />
  </div>
</template>

<script>
import AnalyseItem from '@/components/PersonalAnalyseItem'
export default {
  components: {
    AnalyseItem
  },
  props: {
    list: Array
  }
}
</script>

<style lang="less" scoped>
.single-analyse {
  padding-top: 32rpx;
}
</style>
