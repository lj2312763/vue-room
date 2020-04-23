<template>
  <el-container class="height">
    <slider-menu :menuData="menuData" a="1"/>
    <el-container>
      <el-header class="header-contaner"><Header /></el-header>
      <el-main>
        <Breadcrumb :menuData="menuData"/>
        <router-view /></el-main>
    </el-container>
  </el-container>
</template>


<script>
  import SliderMenu from '@/components/common/Menu'
  import Header from '@/components/common/Header'
  import Breadcrumb from '@/components/common/Breadcrumb'
  // import Menu from '@/components/menu/SiderMenu.vue'
  let menuData = []
  export default {
    name: "app",
    data () {
      return {
        menuData: menuData,
      }
    },
    components: {
      SliderMenu,
      Header,
      Breadcrumb
    },
    beforeCreate () {
      menuData = this.$router.options.routes
    },
    mounted(){
    },
    updated(){
      window.scrollTo(0, 0); //设置y轴滚动一百像素
    }

  };
</script>
<style lang="less" scoped>
  .height{
    min-height: 100vh;
  }
  .el-header, .el-footer {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /*line-height: 60px;*/
    background-color: rgb(84, 92, 100);
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    /*margin-bottom: 40px;*/
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
