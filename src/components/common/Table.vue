<template>
  <div>
    <el-table
      :data="data"
      stripe
      style="width: 100%">
      <el-table-column :prop="item.key" :formatter="formatter" :label="item.name" width="180" v-for="(item, i) in columns" :key="i">
        <div slot-scope="scope">
          <div v-html="formatter(scope.row, { ...scope.column, render: item.render }, scope.row[item.key], scope.$index)"></div>
        </div>
      </el-table-column>
      <el-table-column
        fixed="right"
        v-if="actions.length"
        label="操作"
        width="180">
        <div slot-scope="scope" class="table-action" v-if="actions">
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
    <el-pagination @current-change="currentChange" :current-page="page.currentPage" background v-if="page" layout="prev, pager, next" :total="page.total" />
  </div>

</template>

<script>
  export default {
    name: "Table",
    props: ['columns', 'data', 'page', 'actions'],
    methods: {
      // 自定义表格显示
      formatter(row, column, cellValue, index) {
        // 有自定义的展示
        if (column.render) {
          return column.render(cellValue, row, index)
        }
        return cellValue || '-'
      },
      // 翻页事件
      currentChange(currentPage) {
        this.$emit('pageChange', currentPage)
      }
    },
  }
</script>

<style scoped lang="less">
  .table-action {
    display: flex;
    align-items: center;
  }

</style>
