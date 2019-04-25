<template>
  <div>
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
export default {
  name: 'layout',
  components: {
    HeaderNav
  }

}
</script>

<style lang="scss" scoped>
</style>
