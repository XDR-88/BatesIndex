<template>
  <div class="CafeAdd">
    <waike Content="true">
      <template>
        <el-form :model="ruleForm" 
                 :rules="rules" 
                 ref="ruleForm" 
                 label-width="150px" 
                 class="demo-ruleForm">
          <div class="category">
            <h3>添加商店餐厅</h3>
            <div class="catebox">
                <p>所属主题</p>
                <div class="block">
                  <el-form-item label="所属主题名称" prop="empty">
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
                    <el-form-item label="主标题" prop="empty">
                      <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="empty">
                      <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="开放时间">
                      <el-time-picker
                        is-range
                        v-model="ruleForm.value1"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                      </el-time-picker>
                    </el-form-item>    
                  </el-col>
                </el-row>     
              </div>
            </div>
            <image-text imgTit="图集" textTit="详细信息" />
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
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      },
      rules: {
        empty: [
          { required: true, message: '内容不得为空', trigger: 'blur' }
        ],
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
    }
  }
}
</script>

<style lang="scss">
.CafeAdd{
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