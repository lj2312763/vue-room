<template>
  <div class="checkIn-record">
    <div class="search-bar">
      <Search :isSearch="false" :lefts="lefts" :data="data" :rights="rights" :actions="[]" />
    </div>
    <div class="record-list">
      <Table :columns="columns" :data="list" :actions="actions" :page="page" @pageChange="pageChange"/>
    </div>
  </div>
</template>

<script>
  import Search from '@/components/common/Search'
  import SimulateData from '@/data'
  import { downFile } from '@/tools'
  import Table from '@/components/common/Table'
  const simulateData = new SimulateData()
  const house = simulateData.getHouse()
  const checkInList = simulateData.getCheckInList()
  export default {
    name: "check-in-record",
    data(){
      return {
        data: house,
        list: checkInList,
        page: { total: checkInList.length, currentPage: 1 },
        actions: [],
        columns: [
          { name: '姓名', key: 'name'},
          { name: '性别', key: 'genderStr'},
          { name: '身份证', key: 'identityCard'},
          { name: '电话号码', key: 'phone'},
          { name: '所属部门', key: 'department'},
          { name: '员工工号', key: 'number'},
          { name: '入住日期', key: 'checkInDate'},
          { name: '退宿日期', key: 'checkOutDate'},
          { name: '状态', key: 'status', render:(v)=>{
              return v === 1 ? '<span style="color: #2C8EFF;font-size:14px;">已入住</span >' : '<span style="color:#FF8B8B;font-size:14px;">已退宿</span>'
            }},
        ],
        lefts: [
          {name: '宿舍名称', type: 'detail', key: 'dormitoryTypeStr'},
          {name: '单元名称', type: 'detail', key: 'unitStr'},
          {name: '房间门号', type: 'detail', key: 'id'},
          {name: '房态类型', type: 'detail', key: 'typeStr'},
        ],
        rights: [
          { name: '导出数据', type: 'btn', onClick: ()=>this.rightClick(1) }
        ]
      }
    },
    components: {
      Table,
      Search
    },
    methods:{
      // 按钮点击事件
      rightClick(values){
        console.log(values)
        downFile()
      },
      // 翻页事件
      pageChange(currentPage){
        this.page.currentPage = currentPage
      },
    }
  }
</script>

<style scoped lang="less">
  .checkIn-record{
    .record-list{

    }
  }

</style>
