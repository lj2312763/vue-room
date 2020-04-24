<template>
  <div class="house-detail">
    <DetailFields :fields="fields" :data="data"/>
    <div class="divider"></div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="入住信息" name="checkin"><CheckIn /></el-tab-pane>
      <el-tab-pane label="配套物品" name="goods">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import CheckIn from '@/components/CheckIn'
  import DetailFields from '@/components/common/DetailFields'
  import {UNIT_TYPE, HOUSE_TYPE, HOUSE_STATUS_TYPE} from '@/enum'

  const houseList = []
  const count = 20
  // 生成模拟数据
  for (let i = 0; i < count; ++i) {
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
      rent: '120.00元',
      radix: '120',
      reading: '1208',
      price: '0.52元/度',
      balance: '168.1元',
    })
  }
  const index = Math.round(Math.random() * count)
  export default {
    name: "hoseDetail",
    data() {
      return {
        fields: [
          {
            name: '基本信息', type: 'group', children: [
              [
                {name: '宿舍名称', key: 'name'},
                {name: '单元信息', key: 'unitStr'},
                {name: '房间门号', key: 'id'}
              ],
              [
                {name: '房间状态', key: 'statusStr'},
                {name: '房间类型', key: 'typeStr'},
                {name: '房间租金', key: 'rent'}
              ]
            ]
          },
          {
            name: '电表信息', type: 'group', children: [
              {name: '底数', key: 'radix'},
              {name: '抄表', key: 'reading'},
              {name: '单价', key: 'price'},
              {name: '费用小计', key: 'balance'},
            ]
          },
          {
            name: '热水表信息', type: 'group', children: [
              {name: '底数', key: 'radix'},
              {name: '抄表', key: 'reading'},
              {name: '单价', key: 'price'},
              {name: '费用小计', key: 'balance'},
            ]
          },
          {
            name: '冷水表信息', type: 'group', children: [
              {name: '底数', key: 'radix'},
              {name: '抄表', key: 'reading'},
              {name: '单价', key: 'price'},
              {name: '费用小计', key: 'balance'},
            ]
          }
        ],
        data: houseList[index],
        activeName: 'checkin'
      }
    },
    components: {
      DetailFields,
      CheckIn
    }
  }
</script>

<style scoped lang="less">
  .house-detail {
    padding: 35px;
    background: #FFFFFF;
  }

</style>
