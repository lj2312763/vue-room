<template>
  <div>
    <CheckInDialog :visible="visible" @submit="onCheckIn" @onClose="openDialog(false)"/>
    <div class="check-in-operate">
      <el-button size="small" class="check-in" @click="openDialog(true)">办理入住</el-button>
    </div>
    <Table :columns="columns" :data="data" :actions="actions" :page="false"/>
  </div>
</template>

<script>
  import Table from '@/components/common/Table'
  import CheckInDialog from '@/components/CheckInDialog'

  export default {
    name: "check-in",
    data() {
      return {
        visible: false, // 入住弹窗显示
        actions: [
          {name: '办理退宿', type: 'btn', onClick: this.checkout},
          {name: '手动结算', type: 'btn', onClick: this.checkout}
        ],
        columns: [
          {name: '姓名', key: 'name'},
          {name: '性别', key: 'gender'},
          {name: '身份证', key: 'identityCard'},
          {name: '电话号码', key: 'phone'},
          {name: '所属部门', key: 'department'},
          {name: '员工工号', key: 'number'},
          {name: '入住日期', key: 'chieckInDate'},
          {name: '操作', key: 'operation'},
        ],
        data: [
          {
            name: '清歌笑',
            gender: '男',
            identityCard: '513723199410232058',
            phone: '15208212128',
            department: '技术总工程师',
            number: '5689',
            chieckInDate: '2014-04-22'
          },
          {
            name: '清歌笑',
            gender: '男',
            identityCard: '513723199410232058',
            phone: '15208212128',
            department: '技术总工程师',
            number: '5681',
            chieckInDate: '2014-04-22'
          },
          {
            name: '清歌笑',
            gender: '男',
            identityCard: '513723199410232058',
            phone: '15208212128',
            department: '技术总工程师',
            number: '5688',
            chieckInDate: '2014-04-22'
          },
          {
            name: '清歌笑',
            gender: '男',
            identityCard: '513723199410232058',
            phone: '15208212128',
            department: '技术总工程师',
            number: '5680',
            chieckInDate: '2014-04-22'
          },
          {
            name: '清歌笑',
            gender: '男',
            identityCard: '513723199410232058',
            phone: '15208212128',
            department: '技术总工程师',
            number: '5683',
            chieckInDate: '2014-04-22'
          },
        ]
      }
    },
    components: {
      Table,
      CheckInDialog,
    },
    methods: {
      // 退宿
      checkout(row, coloum) {
        console.log(row, coloum)
      },
      // 手动结算
      settleAccounts(row, coloum) {
        console.log(row, coloum)
      },
      openDialog(visible){
        this.visible = visible
      },
      onCheckIn(values){
        console.log('我要提交的数据', values)
      }
    }
  }
</script>

<style scoped lang="less">
  .check-in-operate {
    text-align: right;
    .check-in {
      width: 152px;
      height: 38px;
      background: #E9E9E9;
      border-radius: 4px;
    }
  }

</style>
