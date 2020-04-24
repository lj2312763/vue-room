<template>
  <div>
    <el-table
      :data="data"
      stripe
      style="width: 100%">
      <el-table-column :prop="item.key" :label="item.name" width="180" v-for="(item, i) in columns"
                       :key="i"></el-table-column>
      <el-table-column
        fixed="right"
        v-if="actions.length"
        label="操作"
        width="180">
        <div slot-scope="scope" class="table-action">
          <el-button
            v-for="(action, i) in actions" :key="i"
            @click.native.prevent="action.onClick(scope.row, scope.$index)"
            type="text"
            size="small">
            {{action.name}}
          </el-button>
        </div>

      </el-table-column>
    </el-table>
    <el-pagination background v-if="page" layout="prev, pager, next" :total="1000"></el-pagination>
  </div>

</template>

<script>
  export default {
    name: "Table",
    props: ['columns', 'data', 'page', 'actions']
  }
</script>

<style scoped lang="less">
  .table-action{
    display: flex;
    align-items: center;
  }

</style>
