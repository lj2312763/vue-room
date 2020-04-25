<template>
  <div class="header">
    <div>
      <el-badge is-dot class="item"><i class="el-icon-message-solid"></i></el-badge>
      <div class="vertical-line"></div>
    </div>
    <div class="header-user">
      <el-avatar  :src="circleUrl"></el-avatar>
      <el-dropdown class="header-dropdown">
        <span class="el-dropdown-link">系统管理员<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }

</script>

<style scoped lang="less">
  .el-icon-message-solid {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .item {
    margin-top: 6px;
  }
  .el-badge__content.is-fixed.is-dot {
    right: 9px;
    top: 7px;
  }
  .header{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    color: #fff;
    &>div{
      display: flex;
    }
    .vertical-line{
      border-left: 1px solid #fff;
      height: 30px;
      margin-left: 16px;
    }
    .header-user{
      padding-left: 10px;
      .header-dropdown{
        margin-left: 16px;
        color: #fff;
        height: 40px;
        font-size: 14px;
        font-weight: bolder;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
