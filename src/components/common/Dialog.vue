<template>
  <el-dialog destroy-on-close :visible="visible" @close="onClose" :width="width" :close-on-press-escape="false" :close-on-click-modal="false" class="custom-dialog">
    <div slot="title" class="title">{{title}}</div>
    <slot name="children"></slot>
    <slot name="footer"></slot>
  </el-dialog>
</template>

<script>
  export default {
    name: "custom-dialog",
    props: ['title', 'visible', 'width'],
    data() {
      return {
        centerDialogVisible: false
      };
    },
    methods: {
      // 关闭弹窗
      onClose() {
        this.$emit('onClose')
      }
    }
  }
</script>

<style scoped lang="less">
  .title {
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    color: #000000;
    opacity: 1;
  }

</style>
