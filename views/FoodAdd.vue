<template>
  <div class="FoodAdd">
    <waike ShopAdd="true">
      <template>
        <el-form :model="ruleForm" 
                 :rules="rules" 
                 ref="ruleForm" 
                 label-width="150px" 
                 class="demo-ruleForm">
          <div class="category">
            <h3>添加餐厅</h3>
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
            <div class="catebox">
              <p>基本信息</p>
              <div class="block">
                <el-form-item label="餐厅名称" prop="empty">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="营业时间">
                  <el-time-picker
                    is-range
                    v-model="time"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-form-item>
                <el-form-item label="餐厅地址" prop="empty">
                  <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="catebox">
              <p>招牌菜肴&nbsp;&nbsp;&nbsp;&nbsp;<span class="tips">图片尺寸最佳比例为4:3</span></p>
              <div class="block foodBox">
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage1" :src="foodImage1" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food1" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage2" :src="foodImage2" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food2" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage3" :src="foodImage3" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food3" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage4" :src="foodImage4" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food4" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage5" :src="foodImage5" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food5" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage6" :src="foodImage6" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food6" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage7" :src="foodImage7" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food7" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage8" :src="foodImage8" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food8" placeholder="请输入内容"></el-input>
                </div>
                <div class="food">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="foodImage9" :src="foodImage9" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="food9" placeholder="请输入内容"></el-input>
                </div>
              </div>
            </div>
            <image-text imgTit="餐厅图集" textTit="餐厅信息" />
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
        hotelName: '',
        foodImage1: '',
        foodImage2: '',
        foodImage3: '',
        foodImage4: '',
        foodImage5: '',
        foodImage6: '',
        foodImage7: '',
        foodImage8: '',
        foodImage9: '',
        food1: '',
        food2: '',
        food3: '',
        food4: '',
        food5: '',
        food6: '',
        food7: '',
        food8: '',
        food9: '',
        time: [new Date(0, 0, 0, 9, 0), new Date(0, 0, 0, 0, 0)],
        ruleForm: {
          name: '',
          address: ''
        },
        rules: {
          empty: [
            { required: true, message: '内容不能为空', trigger: 'blur' }
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
.active{
  background-color: transparent!important;
}
.FoodAdd{
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
        .el-input, .el-input__inner{
          width: 300px;
        }
        .tips{
          font-size: 14px;
          color: #a9a9a9;
        }
      }
      .foodBox{
        display: flex;
        flex-wrap: wrap;
        padding-left: 100px;
        .food{
          width: 130px;
          margin-right: 20px;
          .el-input{
            @extend .food;
            margin: 10px 0;
            input{
              @extend .food;
            }
          }
        }
      }
    }
  }
}
</style>