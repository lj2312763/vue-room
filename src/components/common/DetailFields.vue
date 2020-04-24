<template>
  <div class="detail-fields">
    <div v-for="(group, i) in fields" :Key="i">
      <div class="detail-title">{{ group.name }}</div>
      <div class="detail-group-content" v-if="!Array.isArray(group.children[0])">
        <div v-for="field in group.children" :key="field.key" class="detail-fields-item">
          <div class="detail-label">{{field.name}}: </div>
          <div class="detail-value">{{data[field.key] || '--'}}</div>
        </div>
      </div>
      <div class="detail-group-content" v-else-if="Array.isArray(group.children[0])" v-for="(child, idx) in group.children" :key="idx">
        <div v-for="field in child" :key="field.key" class="detail-fields-item">
          <div class="detail-label">{{field.name}}: </div>
          <div class="detail-value">{{data[field.key] || '--'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailFields",
    props: {
      fields: Array, // 详情字段
      data: Object // 详情数据
    }
  }
</script>

<style scoped lang="less">
  .detail-fields {
    .detail-group-content{
      display: flex;
    }
    .detail-fields-item{
      display: flex;
      width: 200px;
      padding: 11px 0;
    }
    .detail-title{
      color: #000000;
      font-size:16px;
      font-weight:bold;
      line-height:22px;
      text-align: left;
      padding: 11px 0;
    }
    .detail-label,.detail-value{
      color: #000000;
      margin-right: 6px;
      height:20px;
      font-size:14px;
      font-weight:400;
      line-height:20px;
      color:rgba(0,0,0,1);
      opacity:1;
    }
  }
</style>
