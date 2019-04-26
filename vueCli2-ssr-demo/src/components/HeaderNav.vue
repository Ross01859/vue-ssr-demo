<template>
  <div class="menu-nav">
    <ul>
      <li>SSR</li>
      <li>VUE</li>
      <li>Vue-Router</li>
      <li>VUEX</li>
      <li>NODE</li>
      <li>EXPRESS</li>
    </ul>
    <!-- <el-menu :default-active="activeIndex"
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
    </el-menu> -->
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
  watch: {
    '$route.path': {
      handler(val) {
        console.log(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-nav {
  text-align: center;
  ul {
    margin: 0px auto;
    width: 80%;
    display: flex;
    background: #f3f3f3;
    height: 50px;
    line-height: 50px;
    li {
      flex: 1;
      display: inline-block;
      cursor: pointer;
      &:hover{
        background: #d3d3d3;
      }
    }
  }
}
</style>
