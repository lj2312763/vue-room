<template>
  <Dialog
    :visible="visible"
    @onClose="onClose"
    width="799px"
    title="办理入住"
  >
    <div slot="children">
      <DetailFields :fields="fields" :data="data"/>
      <div class="divider"></div>
      <div class="form-container">
        <FormFields :fields="formFields" ref="form"/>
      </div>

    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" class="submit" @click="onSubmit">立即入住</el-button>
    </span>
  </Dialog>
</template>

<script>
  import Dialog from '@/components/common/Dialog'
  import DetailFields from '@/components/common/DetailFields'
  import FormFields from '@/components/common/FormFields'
  import {UNIT_TYPE, HOUSE_TYPE, HOUSE_STATUS_TYPE,GENDER_TYPE, MARITAL} from '@/enum'

  const houseList = []
  const count = 20
  // 生成模拟数据
  for (let i = 0; i < count; ++i) {
    const rodm1 = Math.round(Math.random() * 2)
    const rodm2 = Math.round(Math.random() * 2)
    const rodm3 = Math.round(Math.random() * 2)
    houseList.push({
      id: i, doorplate: 'A-15-' + i,
      type: HOUSE_TYPE[rodm1].value,
      typeStr: HOUSE_TYPE[rodm1].name,
      unit: UNIT_TYPE[rodm2].value,
      unitStr: UNIT_TYPE[rodm2].name,
      nowDwell: rodm3 > 0 ? 1 : 0,
      max: HOUSE_TYPE[rodm1].max,
      status: HOUSE_STATUS_TYPE[rodm3].value,
      statusStr: HOUSE_STATUS_TYPE[rodm3].name,
      rent: '120.00元',
      radix: '120',
      reading: '1208',
      price: '0.52元/度',
      balance: '168.1元',
    })
  }
  const index = Math.round(Math.random() * count)
  export default {
    name: "check-in-dialog",
    props: ['visible'],
    data() {
      return {
        data: houseList[index],
        fields: [
          {
            name: '宿舍信息', type: 'group', children: [
              [
                {name: '宿舍名称', key: 'name'},
                {name: '单元信息', key: 'unitStr'},
                {name: '房间门号', key: 'id'}
              ],
              [
                {name: '房间类型', key: 'typeStr'},
                {name: '房租信息', key: 'rent'}
              ]
            ]
          }
        ],
        formFields: [
          {
            name: '宿舍信息', type: 'group', children: [
              [
                {
                  name: '员工姓名', key: 'name', type: 'input', rules: [
                    {required: true, message: '请输入员工姓名', whitespace: true},
                  ]
                },
                {
                  name: '性别', key: 'gender', type: 'select', options: GENDER_TYPE, rules: [
                    {required: true, message: '请选择性别', whitespace: true},
                  ]
                }
              ],
              [
                {name: '身份证号', key: 'identityCard', type: 'input', rules: [
                    {required: true, message: '请输入身份证号', whitespace: true},
                  ]},
                {name: '电话', key: 'phone', type: 'input', rules: [
                    {required: true, message: '请输入电话', whitespace: true},
                  ]}
              ],
              [
                {name: '部门', key: 'department', type: 'input', rules: [
                    {required: true, message: '请输入部门', whitespace: true},
                  ]},
                {name: '工号', key: 'number', type: 'input'}
              ],
              [
                {name: '工龄', key: 'workingAge', type: 'input'},
                {name: '学历', key: 'education', type: 'input'}
              ],
              [
                {name: '婚否', key: 'marital', type: 'select', options: MARITAL},
                {name: '现住地址', key: 'address', type: 'input'}
              ],
              [
                {name: '备注', key: 'remark', type: 'input'}
              ],
              [
                {name: '入住日期', key: 'chieckInDate', type: 'date'}
              ]
            ]
          }
        ],
      };
    },
    components: {
      FormFields,
      Dialog,
      DetailFields
    },
    methods: {
      // 关闭弹窗
      onClose() {
        this.$emit('onClose')
      },
      onSubmit() {
        // 验证子集表单
        this.$refs.form.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .submit {
    width: 126px;
    height: 50px;
    background: #2C8EFF;
    opacity: 1;
    border-radius: 25px;
  }

</style>
