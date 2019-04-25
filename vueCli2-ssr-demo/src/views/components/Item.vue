<template>
  <div class="single-news">
    <ul>
      <li v-for="o in 20"
          :key="o">
        <el-card class="box-card"
                 shadow="hover">
          <div class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'item'
}
</script>

<style  scoped>
.single-news ul li{
  padding: 10px 20px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
}
</style>
