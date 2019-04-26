<template>
  <div>
    <single-item :newsList="newsData"></single-item>
  </div>
</template>

<script>
import SingleItem from './components/Item'
import { getNewsListData } from '@/api/index'
export default {
  name: 'news',
  components: {
    SingleItem
  },
  data() {
    return {
      newsData: []
    }
  },
  mounted() {
    getNewsListData()
      .then(res => {
        this.newsData = res.data.newsData
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
