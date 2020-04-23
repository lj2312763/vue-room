<template>
  <div class="breadcrumb-container">
    <i class="el-icon-location-information"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
  export default {
    name: "Breadcrumb",
    props: {
      menuData: {
        type: Array,
        required: true
      }
    },
    beforeCreate(){
      console.log(this.$router)
    }
  }
</script>

<style scoped lang="less">
  .breadcrumb-container {
    display: flex;
    align-items: center;
    .el-icon-location-information {
      margin-right: 6px;
    }
  }

</style>
