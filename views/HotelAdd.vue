<template>
  <div class="HotelAdd">
     <waike ShopAdd="true">
      <template>
        <el-form :model="ruleForm" 
                 :rules="rules" 
                 ref="ruleForm" 
                 label-width="150px" 
                 class="demo-ruleForm">
          <div class="category">
            <h3>添加酒店</h3>
            <div class="catebox">
              <p>基本信息</p>
              <div class="block">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="酒店名称" prop="info">
                      <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="酒店一句话描述">
                      <el-input v-model="ruleForm.desc"></el-input>
                    </el-form-item>   
                    <el-form-item label="酒店价格" prop="price">
                      <el-input v-model="ruleForm.price"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phone">
                      <el-input v-model.number="ruleForm.phone"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="酒店地址" prop="info">
                      <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item> 
                    <el-form-item label="酒店简介" prop="info">
                      <el-input
                        type="textarea"
                        :rows="7"
                        placeholder="请输入内容"
                        v-model="ruleForm.info">
                      </el-input>
                    </el-form-item>               
                  </el-col>
                </el-row>           
                
              </div>
            </div>
            <div class="catebox">
              <p>酒店服务</p>
              <div class="block">                
                <el-form-item label="尊享礼遇">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group v-model="checkedAspects" @change="handleCheckedAspectsChange">
                    <el-checkbox v-for="aspect in aspects" :label="aspect" :key="aspect">{{aspect}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="酒店设施">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAllFac" @change="handleCheckAllFacChange">全选</el-checkbox>
                  <el-checkbox-group v-model="checkedFacilities" @change="handleCheckedFacilitiesChange">
                    <el-checkbox v-for="facility in facilities" :label="facility" :key="facility">{{facility}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </div>
            </div>
            <image-text imgTit="酒店图集" textTit="预订须知" />
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

const aspectOptions = ['位于主题公园入口', '提前入园礼遇', '宾客体验服务', '24小时客房送餐服务', '茗茶茶具', '普洱茶客房用品', '行政楼层礼遇含早餐'];
const facilityOptions = ['诺SPA', '游泳池', '儿童天地', '健身房', '行政酒廊', '环球影城商店', '无线网络', '行李寄存', '停车场', '自动取款机'];
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
      checkAll: false,
      checkedAspects: [],
      aspects: aspectOptions,
      checkAllFac: false,
      checkedFacilities: [],
      facilities: facilityOptions,
      isIndeterminate: true,
      ruleForm: {
        name: '',
        price: '',
        desc: '',
        phone: '',
        address: '',
        info:''
      },
      rules: {
        price: [
          { required: true, validator: validatePrice, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '酒店联系方式不能为空' },
          { type: 'number', message: '联系方式格式错误' }
        ],
        info: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
      },
    };
  },
  methods:{
    // 提交表单
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
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 多选
    handleCheckAllChange(val) {
      this.checkedAspects = val ? aspectOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedAspectsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.aspects.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.aspects.length;
    },
    handleCheckAllFacChange(val) {
      this.checkedFacilities = val ? facilityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedFacilitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.facilities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.facilities.length;
    }
  },
}
</script>

<style lang="scss">
.HotelAdd{
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
        .el-form-item{
          .el-checkbox{
            margin-right: 20px;
          }
          .el-checkbox-group{
            display: inline;
            .el-checkbox{
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>