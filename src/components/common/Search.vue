<template>
  <div class="search-container">
    <div class="search-left">
      <div v-for="(field, i) in lefts" :key="i">
        <div v-if="field.type === 'input'" class="search-item">
          <div class="search-item-label">{{ field.name }}</div>
          <el-input v-model="searchValues[field.key]" :placeholder="field.placeholder || '请输入'"></el-input>
        </div>
        <div v-else-if="field.type === 'select'" class="search-item">
          <div class="search-item-label">{{ field.name }}</div>
          <el-select v-model="searchValues[field.key]" :placeholder="field.placeholder || '请选择'">
            <el-option
              v-for="it in field.options"
              :key="it.value"
              :label="it.name"
              :value="it.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <el-button type="primary" v-if="isSearch" class="submit" @click="onSubmit">查询</el-button>
    </div>
    <div class="search-right">
      <div v-for="(item, i) in rights" :key="i">
        <el-upload
          v-if="item.type === 'upload'"
          action="https://jsonplaceholder.typicode.com/posts/"
          class="search-upload"
          accept=".xlsx,.xls"
          :before-upload="beforeUpload"
          :show-file-list="false"
          list-type="picture-card">
          <el-button type="primary" class="search-operate" @click="item.onClick">{{item.name }}</el-button>
        </el-upload>
        <el-button v-else type="primary" class="search-operate" @click="item.onClick">{{item.name }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      const obj = {}
      // 获取field的key进行双向绑定
      this.lefts.forEach((it) => {
        obj[it.key] = ''
      })
      return {
        searchValues: {...obj}
      }
    },
    props: {
      isSearch: {
        type: Boolean,
        default: true
      },
      lefts: Array,
      onSubmitFunc: Function,
      rights: Array
    },
    methods: {
      // 点击查询事件
      onSubmit() {
        this.$emit('onSubmitFunc', this.searchValues)
      },
      beforeUpload(file){
        console.log(file)
      }
    }

  }
</script>

<style scoped lang="less">
  @import '../../vars.less';
  .search-container {
    display: flex;
    justify-content: space-between;
    .submit {
      background: #2C8EFF;
      border-radius: 3px;
    }
    .search-left {
      display: flex;
      align-items: center;
    }
    .search-item {
      display: flex;
      align-items: center;
      width: 240px;
      padding: 0 10px;
      .search-item-label {
        width: 80px;
        color: @label-color;
        font-size: 14px;
        margin-right: 6px;
      }
    }
    .search-right {
      display: flex;
      align-items: center;
      .search-upload{
        height: 40px;
        line-height: 40px;
      }
      .search-operate {
        background: @table-btn-bg;
        height: 40px;
        margin-left: 6px;
      }
    }
  }
</style>
