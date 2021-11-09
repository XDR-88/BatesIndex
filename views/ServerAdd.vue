<template>
  <div class="ServerAdd">
    <waike Admin="true">
      <template>
        <el-form :model="ruleForm" 
                 :rules="rules" 
                 ref="ruleForm" 
                 label-width="150px" 
                 class="demo-ruleForm">
          <div class="category">
            <h3>添加游客服务</h3>
            <div class="catebox">
                <p>所属服务分类</p>
                <div class="block">
                  <el-form-item label="所属服务分类" prop="themeName">
                    <el-select v-model="ruleForm.themeName" placeholder="请选择">
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
            <div class="catebox">
              <p>基本信息</p>
              <div class="block">
                <el-row>
                  <el-col :span="12">                    
                    <el-form-item label="服务标题" prop="title">
                      <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                      <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>             
                    <el-form-item label="封面">
                      <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="ruleForm.imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">                  
                    <el-form-item label="联系方式" 
                                  prop="phone"
                                  :rules="[
                                    { type: 'number', message: '联系方式格式不正确'}
                                  ]">
                      <el-input v-model.number="ruleForm.phone"></el-input>
                    </el-form-item>                
                    <el-form-item label="设施介绍">
                      <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="ruleForm.info">
                      </el-input>
                    </el-form-item>                    
                  </el-col>
                </el-row>     
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      ruleForm: {
        themeName: '',
        title: '',
        address: '',
        imageUrl: '',
        phone: '',
        info: ''
      },
      rules: {
        themeName: [
          { required: true, message: '所属服务分类不得为空', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '服务标题不得为空', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '地址不得为空', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
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
    },
    // 上传图片
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
    }
  }
}
</script>

<style lang="scss">
.ServerAdd{
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
  // 上传图片
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>