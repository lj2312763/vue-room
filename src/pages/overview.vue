<template>
  <div class="overview-container">
    <div class="module">
      <div class="title">
        数据统计
      </div>
      <div class="module-content">
        <div class="module-content-item total-room">
          <div>房间总数</div>
          <div class="number">{{ toolRoom }}</div>
          <div>当前录⼊房间数量</div>
        </div>
        <div class="module-content-item use-room">
          <div>在住房间</div>
          <div class="number">{{housingRoom}}</div>
          <div>当前在住房间数量</div>
        </div>
        <div class="module-content-item free-dormitory">
          <div>空闲宿舍</div>
          <div class="number">{{freeDormitory}}</div>
          <div>当前空闲房间数量</div>
        </div>
        <div class="module-content-item check-in-num">
          <div>入住人数</div>
          <div class="number">{{checkIn}}</div>
          <div>当前入住宿舍人数</div>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="title">实时数据</div>
      <div class="module-content">
        <div class="module-content-item real-item">
          <div class="real-title">系统总⼈数</div>
          <div class="number">{{TtotalCount}}</div>
          <div class="yesterday">昨⽇：{{YTotalCount}}</div>
        </div>
        <div class="module-content-item real-item">
          <div class="real-title">新增⼊住⼈数</div>
          <div class="number">{{TCheckIn}}</div>
          <div  class="yesterday">昨⽇：{{YCheckIn}}</div>
        </div>
        <div class="module-content-item real-item">
          <div class="real-title">退宿⼈数</div>
          <div class="number">{{TCheckOut}}</div>
          <div class="yesterday">昨⽇：{{YCheckOut}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "overview",
        data() {
            return {
                TtotalCount: '126', // 今日系统总人数
                YTotalCount: '126', // 昨日系统总人数
                TCheckIn: '126', // 今日入住总人数
                YCheckIn: '126', // 昨日入住总人数
                TCheckOut: '126', // 今日退宿人数
                YCheckOut: '126', // 昨日退宿人数
                freeDormitory: '126', // 空闲宿舍
                toolRoom: '126', // 总房间数
                checkIn: '2', // 新增入住人数
                housingRoom: '2' // 在住房间数
            }
        }
    }
</script>

<style scoped lang="less">
  @import '../vars.less';

  .overview-container {
    .module {
      margin: 20px 0;
      background: #ffffff;
      padding: 20px;
      .title {
        border-left: 4px solid black;
        text-align: left;
        font-size: 16px;
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
          text-align: left;
          width: 360px;
          height: 140px;
          padding: 25px 28px;
          .number{
            font-size:24px;
            font-weight:bold;
            padding: 13px 0;
          }
        }
        .module-content-item.real-item {
          color: @title-color;
          font-size: 16px;
          .yesterday{
            font-size: 12px;
          }
        }
        .total-room {
          background: #5654F5;
        }
        .use-room {
          background: linear-gradient(90deg, rgba(76, 168, 255, 1) 0%, rgba(76, 168, 255, 1) 100%);
        }
        .free-dormitory {
          background: #FBA33F;
        }
        .check-in-num {
          background: #FF3E6E;
        }
      }
    }

  }
</style>
