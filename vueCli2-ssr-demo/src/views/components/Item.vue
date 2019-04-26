<template>
  <div class="single-news">
    <ul>
      <li v-for="item in newsList"
          :key="item.key">
        <div class="box-card">
          <div class="title">
            <div>
              <span class="primary-title">{{item.level_1}}</span>
              <span class="time">{{item.time}}</span>
            </div>
            <div>
              <span class="secondary-title">{{item.level_2}}</span>
            </div>
          </div>
          <div class="content clearfix">
            <div class="text">{{item.context}}</div>
            <div class="thumbnail">
              <img :src="item.thumbnail"
                   alt="无图">
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    newsList: Array
  }
}
</script>

<style lang="scss"  scoped>
.single-news {
  ul {
    padding: 30px 100px;
    li {
      margin: 20px 0;
      padding: 15px 30px;
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      .box-card {
        .title {
          line-height: 30px;
          .primary-title {
            font-size: 18px;
          }
          .secondary-title {
            font-size: 14px;
          }
          .time {
            color: #3c3c3c;
            font-size: 12px;
          }
        }
        .content {
          margin: auto;
          min-height: 100px;
          .text {
            display: inline-block;
            text-indent: 30px;
            line-height: 25px;
            width: calc(100% - 110px);
          }
          .thumbnail {
            float: right;
            img {
              vertical-align: middle;
              border: 1px solid #e3e3e3;
              border-radius: 5px;
              display: inline-block;
              text-align: center;
              margin: 0 auto;
              width: 100px;
              height: 100px;
            }
          }
        }
      }
      &:hover {
        // box-shadow: 0px 4px 10px 1px;
      }
    }
  }
}
</style>
