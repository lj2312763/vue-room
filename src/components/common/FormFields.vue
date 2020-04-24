<template>
  <el-form ref="form" :model="form" label-width="80px">
    <div class="form-fields">
      <div v-for="(group, i) in fields" :key="i">
        <div class="form-title">{{ group.name }}</div>
        <div class="form-group-content" v-if="!Array.isArray(group.children[0])">
          <div v-for="field in group.children" :key="field.key" class="form-fields-item">
            <el-form-item :label="field.name" :rules="field.rules" :prop="field.key">
              <div class="form-value" v-if="field.type==='input'">
                <el-input class="custom-input" v-model="form[field.key]" :placeholder="field.placeholder || ('请输入' + field.name) "></el-input>
              </div>
              <div class="form-value" v-else-if="field.type==='select'">
                <el-select v-model="form[field.key]" :placeholder="field.placeholder || ('请选择' + field.name) ">
                  <el-option :label="option.name" :value="option.value" v-for="(option, idx) in field.options" :key="idx"></el-option>
                </el-select>
              </div>
              <div class="form-value" v-else-if="field.type==='date'">
                <el-date-picker
                  v-model="form[field.key]"
                  type="date"
                  class="custom-input"
                  :placeholder="field.placeholder || ('请选择' + field.name) ">
                </el-date-picker>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="form-group-content" v-else-if="Array.isArray(group.children[0])" v-for="(child, idx) in group.children" :key="idx">
          <div v-for="field in child" :key="field.key" class="form-fields-item">
            <el-form-item :label="field.name" :rules="field.rules" :prop="field.key">
              <div class="form-value" v-if="field.type==='input'">
                <el-input class="custom-input" v-model="form[field.key]" :placeholder="field.placeholder || ('请输入' + field.name) "></el-input>
              </div>
              <div class="form-value" v-else-if="field.type==='select'">
                <el-select class="custom-input" v-model="form[field.key]" :placeholder="field.placeholder || ('请选择' + field.name) ">
                  <el-option :label="option.name" :value="option.value" v-for="(option, idx) in field.options" :key="idx"></el-option>
                </el-select>
              </div>
              <div class="form-value" v-else-if="field.type==='date'">
                <el-date-picker
                  v-model="form[field.key]"
                  type="date"
                  class="custom-input"
                  :placeholder="field.placeholder || ('请选择' + field.name) ">
                </el-date-picker>
              </div>
            </el-form-item>
          </div>
        </div>
      </div>
    </div>
  </el-form>
</template>
<script>
  export default {
    name: "form-fields",
    props: ['fields', 'data'],
    components: {
    },
    data() {
      const obj = {}
      // 获取field的key进行双向绑定
      const getKeys = (fields) => {
        fields.forEach((it) => {
          if (it.children) {
            getKeys(it.children)
          } else if (Array.isArray(it)) {
            getKeys(it)
          } else if (it.key) {
            obj[it.key] = undefined
          }
        })
      }
      getKeys(this.fields)
      return {
        form: {
          ...obj
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped lang="less">
  :global{
    .form-fields{

    }
  }
  .form-fields {
    .form-group-content {
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
    }
    .form-fields-item {
      display: flex;
      padding: 6px 0;
      width: 100%;
    }
    .form-fields-item {
      width: 100%;
    }
    .form-title {
      color: #000000;
      font-size: 16px;
      font-weight: bold;
      line-height: 22px;
      text-align: left;
      padding: 11px 0;
    }
    .form-value{
      width: 100%;
      border-bottom: 1px solid #999999;
      border-radius: 0;
      text-align: left;
    }
  }

</style>
