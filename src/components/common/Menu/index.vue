<template>
  <el-aside width="200px">
    <div class="logo">
      <router-link to="/dashboard/workplace">
        <!--<img src="static/logo.png">-->
        <i class="el-icon-s-grid"></i>
        <h1>宿舍管理系统</h1>
      </router-link>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link :to="item.path" :key="i" v-for="(item, i) in menuData">
        <el-menu-item :index="i">
          <i class="el-icon-setting"></i>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </router-link>

    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "sliderMenu",
    props: {
      collapsible: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      menuData: {
        type: Array,
        required: true
      },
      theme: {
        type: String,
        required: false,
        default: 'dark'
      }
    },
    mounted() {
      console.log(this.menuData)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    /*height: 100%;*/
  }

  .el-menu-vertical-demo {
    /*height: 100%;*/
    border: 0;
  }

  .logo {
    padding: 20px;
    a {
      display: flex;
      align-items: center;
    }
    .el-icon-s-grid{
      font-size: 20px;
    }
    img {
      width: 32px;
      display: inline-block;
      vertical-align: middle;
    }
  }

</style>
