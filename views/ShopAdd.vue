<template>
  <div class="ShopAdd">
    <waike ShopAdd="true">
      <template>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="150px"
                 class="demo-ruleForm">
          <div class="category">
            <h3>添加门票</h3>
            <div class="block">
              <el-form-item label="门票名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="门票类型">
                <el-input v-model="ruleForm.category" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="门票价格" prop="price">
                <el-input v-model="ruleForm.price"></el-input>
              </el-form-item>
            </div>
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

export default {
  name: "ShopAdd",
  components:{
    Waike,
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
      ruleForm: {
        name: '',
        price: 0,
        category: '电子票',
      },
      rules: {
        name: [
          { required: true, message: '请输入门票名称', trigger: 'blur' }
        ],
        price: [
          { required: true, validator: validatePrice, trigger: 'blur' }
        ]
      },
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          let add = this.ruleForm.price
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
}
</script>

<style lang="scss">
.ShopAdd{
  .category{
    text-align: left;
    .block{
      padding: 60px 120px 40px 20px;
      border-radius: 4px;
      background-color: #fff;
      margin-bottom: 20px;
      .el-input{
        width: 300px;
      }
    }
  }
}
</style>
