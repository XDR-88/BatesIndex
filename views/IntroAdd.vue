<template>
  <div class="IntroAdd">
    <waike Content="true">
      <template>
        <el-form :model="ruleForm" 
                 :rules="rules" 
                 ref="ruleForm" 
                 label-width="150px" 
                 class="demo-ruleForm">
          <div class="category">
            <h3>添加攻略</h3>
            <div class="catebox">
              <p>基本信息</p>
              <div class="block">
                <el-row>
                  <el-col :span="12">                    
                    <el-form-item label="攻略主标题" prop="empty">
                      <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>                 
                    <el-form-item label="攻略副标题" prop="empty">
                      <el-input v-model="ruleForm.subTitle"></el-input>
                    </el-form-item>                    
                  </el-col>                  
                </el-row>     
              </div>
            </div>
            <image-text imgTit="攻略图集" textTit="攻略详情" />
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
    return {
      ruleForm: {
        title: '',
        subTitle: ''
      },
      rules: {
        empty: [
          { required: true, message: '内容不得为空', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
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
.IntroAdd {
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
        .el-input, textarea{
          width: 350px;
        }
      }
    }
  }
}
</style>