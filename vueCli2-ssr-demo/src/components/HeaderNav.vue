<template>
  <div>
    <!-- <div>SSR</div>
    <div>VUE</div>
    <div>消息中心</div> -->
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             :router="true">
      <el-menu-item index="1" route="/home">SSR</el-menu-item>
      <el-submenu index="2">
        <template slot="title">VUE</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" route="/news">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data() {
    return {
      activeIndex: '1',
    }
  },
  watch:{
    '$route.path':{
      handler(val){
        console.log(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
