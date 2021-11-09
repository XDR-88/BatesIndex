<template>
  <div class="QuestionAdd">
    <waike Admin="true">
      <template>
        <el-form :model="ruleForm" 
                 :rules="rules" 
                 ref="ruleForm" 
                 label-width="150px" 
                 class="demo-ruleForm">
          <div class="category">
            <h3>添加常见问题</h3>
            <div class="catebox">
              <p>基本信息</p>
              <div class="block">                   
                <el-form-item label="问题" prop="question">
                  <el-input v-model="ruleForm.question"></el-input>
                </el-form-item>
                <el-form-item label="回答" prop="answer">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 6}"
                    placeholder="请输入内容"
                    v-model="ruleForm.answer">
                  </el-input>
                </el-form-item>     
              </div>
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
  components:{
    Waike
  },
  data() {
    return {
      ruleForm: {
        question: '',
        answer: ''
      },
      rules: {
        question: [
          { required: true, message: '问题不得为空', trigger: 'blur' }
        ],
        answer: [
          { required: true, message: '回答不得为空', trigger: 'blur' }
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
    },
  }
}
</script>

<style lang="scss">
.QuestionAdd{
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
        padding: 20px 110px 20px 20px;
        border-top: 1px solid #E9EEF3;
        p{
          padding: 15px 20px;
          margin: 0;
        }
        .el-input{
          width: 350px;
        }
        textarea{
          width: 500px;
        }
      }
    }
  }
}
</style>