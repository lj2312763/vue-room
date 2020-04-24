<template>
  <el-container class="height">
    <slider-menu :menuData="menuData" a="1"/>
    <el-container>
      <el-header class="header-contaner">
        <Header/>
      </el-header>
      <el-main>
        <Breadcrumb :menuData="menuData"/>
        <div class="main-container">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
  import SliderMenu from '@/components/common/Menu'
  import Header from '@/components/common/Header'
  import Breadcrumb from '@/components/common/Breadcrumb'
  import { menus } from '@/router/lazy'
  // import Menu from '@/components/menu/SiderMenu.vue'
  let menuData = []
  export default {
    name: "app",
    data() {
      return {
        menuData: menuData,
      }
    },
    components: {
      SliderMenu,
      Header,
      Breadcrumb
    },
    beforeCreate() {
      // 找出可见的路由
      menuData = menus
    },
    mounted() {
    },
    updated() {
      window.scrollTo(0, 0); //设置y轴滚动一百像素
    }

  };
</script>
<style lang="less" scoped>
  .height {
    min-height: 100vh;
  }

  .el-header {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #242F42;
  }

  .el-main {
    background-color: #F9F9F9;
    color: #333;
    text-align: center;
    .main-container{
      padding: 20px 0;
    }
  }
</style>
