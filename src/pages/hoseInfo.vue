<template>
  <div>
    <CheckInDialog :visible="visible" @submit="onCheckIn" @onClose="openDialog(false)"/>
    <div class="search-bar">
      <Search :lefts="lefts" :rights="rights" @onSubmitFunc="onSearch"/>
    </div>
    <div class="house-info-list">
      <div class="house-info-item" v-for="(item) in houseList" :key="item.id">
        <div class="house-item-top">
          <span class="doorplate">{{item.doorplate}}</span><span class="type">{{item.typeStr}}</span>
        </div>
        <div class="unit">{{item.unitStr}}</div>
        <div :class="['footer', `status${item.status}`]">
          <div v-if="item.status === status1">{{item.statusStr}} | {{item.nowDwell}}人</div>
          <div v-else-if="item.status === status2">{{item.statusStr}}</div>
          <div v-else-if="item.status === status3">{{item.statusStr}}</div>
          <el-dropdown trigger="click" class="footer-dropdown">
            <div class="operate">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :disabled="item.status === status2 || item.nowDwell >= item.max" @click.native="openDialog(true)">办理入住</el-dropdown-item>
              <el-dropdown-item><router-link to="/hoseInfo/checkInRecord">入住记录</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/hoseInfo/hoseDetail">房间信息</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/common/Search'
  import {DORMITORY_TYPE, UNIT_TYPE, HOUSE_TYPE, HOUSE_STATUS_TYPE, NOWDWELL, FREE, MAINTENANCE} from '@/enum'
  import CheckInDialog from '@/components/CheckInDialog'
  const houseList = []
  // 生成模拟数据
  for (let i = 0; i < 20; ++i){
    const rodm1 = Math.round(Math.random() * 2)
    const rodm2 = Math.round(Math.random() * 2)
    const rodm3 = Math.round(Math.random() * 2)
    houseList.push({
      id: i, doorplate: 'A-15-' + i,
      type: HOUSE_TYPE[rodm1].value,
      typeStr: HOUSE_TYPE[rodm1].name,
      unit: UNIT_TYPE[rodm2].value,
      unitStr: UNIT_TYPE[rodm2].name,
      nowDwell: rodm3 > 0 ? 1 : 0,
      max: HOUSE_TYPE[rodm1].max,
      status: HOUSE_STATUS_TYPE[rodm3].value,
      statusStr: HOUSE_STATUS_TYPE[rodm3].name,
    })
  }
  export default {
    name: "hoseInfo",
    data() {
      return {
        houseList,
        visible: false, // 入住弹窗显示
        lefts: [
          {name: '宿舍筛选', type: 'select', key: 'dormitory', options: DORMITORY_TYPE},
          {name: '单元筛选', type: 'select', key: 'unit', options: UNIT_TYPE},
          {name: '房型筛选', type: 'select', key: 'type', options: HOUSE_TYPE},
          {name: '房态筛选', type: 'select', key: 'status', options: HOUSE_STATUS_TYPE},
        ],
        rights: [
          { name: '导入宿舍信息', type: 'upload', onClick: ()=>this.rightClick(1) },
          { name: '导出费用表', type: 'upload', onClick: ()=>this.rightClick(2) },
        ]
      }
    },
    components: {
      Search,
      CheckInDialog
    },
    computed: {
      // 房屋状态1 在住
      status1(){
        return NOWDWELL.value
      },
      // 房屋状态2 维修中
      status2(){
        return MAINTENANCE.value
      },
      // 房屋状态3 空闲中
      status3(){
        return FREE.value
      },
    },
    methods:{
      // 查询
      onSearch(values){
        console.log(values)
      },
      // 按钮点击事件
      rightClick(values){
        console.log(values)
      },
      openDialog(visible){
        console.log(visible)
        this.visible = visible
      },
      onCheckIn(values){
        console.log('我要提交的数据', values)
      }
    }
  }
</script>

<style scoped lang="less">
  .house-info-list {
    display: flex;
    flex-wrap: wrap;
    .house-info-item {
      width: 220px;
      height: 99px;
      margin-right: 18px;
      margin-bottom: 46px;
      background: #fff;
      position: relative;
      padding-top: 9px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      .house-item-top {
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
        .doorplate {
          font-size: 16px;
          font-weight: bold;
          line-height: 20px;
          color: #333333;
        }
      }
      .type {
        width: 60px;
        height: 20px;
        color: #333333;
        line-height: 20px;
        border: 1px solid rgba(112, 112, 112, 1);
        opacity: 1;
        border-radius: 50px;
        font-size: 12px;
      }
      .unit {
        height: 17px;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        color: #333333;
        text-align: left;
        padding: 7px 12px;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        height: 41px;
        width: 100%;
        background: #2C8EFF;
        padding: 14px 12px 10px;
        font-size: 12px;
        color: #fff;
        position: absolute;
        bottom: 0;
        .footer-dropdown{
          display: flex;
        }
        .operate {
          display: flex;
          align-items: center;
          cursor: pointer;
          .dot {
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 1);
            border-radius: 50%;
            margin: 0 2px;
          }
        }

      }
      .footer.status2{
        background: #FF8B8B;
      }
      .footer.status3{
        background: #168F6A;
      }
    }
  }

</style>
