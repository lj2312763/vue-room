<template>
  <div class="overview-container">
    <div class="module">
      <div class="title">数据统计</div>
      <div class="module-content">
        <div class="module-content-item total-room">
          <div>房间总数</div>
          <div>126</div>
          <div>当前录⼊房间数量</div>
        </div>
        <div class="module-content-item use-room">
          <div>房间总数</div>
          <div>126</div>
          <div>当前录⼊房间数量</div>
        </div>
        <div class="module-content-item use-room">
          <div>房间总数</div>
          <div>126</div>
          <div>当前录⼊房间数量</div>
        </div>
        <div class="module-content-item use-room">
          <div>房间总数</div>
          <div>126</div>
          <div>当前录⼊房间数量</div>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="title">实时数据</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "overview"
  }
</script>

<style scoped lang="less">
  .overview-container {
    .module {
      margin: 20px 0;
      background: #ffffff;
      padding: 20px;
      .title {
        border-left: 4px solid black;
        text-align: left;
        padding-left: 10px;
      }
      .module-content {
        display: flex;
        justify-content: space-around;
        padding: 40px 0;
        .module-content-item {
          border-radius: 5px;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-align: left;
          width: 20%;
          height: 140px;
          padding: 20px;
        }
        .total-room{
          background: blue;
        }
        .use-room{
          background: cornflowerblue;
        }
      }
    }

  }
</style>
