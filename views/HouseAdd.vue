<template>
  <div class="HouseAdd">
    <waike ShopAdd="true">
      <template>
        <el-form :model="ruleForm" 
                  :rules="rules" 
                  ref="ruleForm" 
                  label-width="150px" 
                  class="demo-ruleForm">
            <div class="category">
              <h3>添加房型</h3>
              <div class="catebox">
                <p>所属酒店</p>
                <div class="block">
                  <el-form-item label="所属酒店名称" prop="empty">
                    <el-select v-model="hotelName" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="catebox">
                    <p>房型信息</p>
                    <div class="block">
                      <el-form-item label="房型名称" prop="empty">
                        <el-input v-model="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="房间大小" prop="empty">
                        <el-input v-model="ruleForm.size"></el-input>
                      </el-form-item>
                      <el-form-item label="床型" prop="empty">
                        <el-input v-model="ruleForm.style"></el-input>
                      </el-form-item>
                      <el-form-item label="入住信息" prop="empty">
                        <el-input v-model="ruleForm.people" placeholder="请输入房间最多入住量"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="catebox">
                    <p>房型规格</p>
                    <div class="block">
                      <el-form-item label="规格名称1">
                        <el-input v-model="ruleForm.spec_name1"></el-input>
                      </el-form-item>
                      <el-form-item label="房间价格1">
                        <el-input v-model="ruleForm.price1"></el-input>
                      </el-form-item>
                      <el-form-item label="规格名称2">
                        <el-input v-model="ruleForm.spec_name2"></el-input>
                      </el-form-item>
                      <el-form-item label="房间价格2">
                        <el-input v-model="ruleForm.price2"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <image-text imgTit="房型图集" textTit="预订须知" />
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </div>
        </el-form>
      </template>
    </waike>
  </div>
</template>

<script>
import Waike from '../components/Waike.vue'
import ImageText from '../components/ImageText.vue'

export default {
  components:{
    Waike,
    ImageText
  },
  data() {
    var validatePrice = (rule, value, callback) => {
      if (!Number(value) || value <= 0) {
        callback(new Error('请输入有效价格'));
      } else {
        callback();
      }
    };
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      hotelName: '',
      ruleForm: {
        name: '',
        size: '',
        style: '',
        people: '',
        price1: '',
        price2: '',
        spec_name1: '',
        spec_name2: ''
      },
      rules: {
        empty: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        price: [
          { required: true, validator: validatePrice, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss">
.HouseAdd{
  .category{
    text-align: left;
    .catebox{
      margin-bottom: 20px;
      border-radius: 4px;
      background-color: #fff;
      p{
        padding: 15px 20px;
        margin: 0;
      }
      .block{
        padding: 20px 120px 20px 20px;
        border-top: 1px solid #E9EEF3;
        .el-input{
          width: 300px;
        }
      }
    }
  }
}
</style>