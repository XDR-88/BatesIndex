<template>
  <div class="ServerCategory">
    <waike Admin="true">
      <template>
        <div class="tabled">
          <div class="nav-title">
            <h2>管理分类</h2>
            <p>根据具体目标和制约因素，对分类执行操作管理</p>
            <el-button @click="open()">添加新分类</el-button>
          </div>
          <el-table
          :data="tableData"
          style="width: 100%"
          >
            <el-table-column
              label="图标地址"
              align="center">
              <template slot-scope="scope">
                <el-tag style="margin-left: 10px">{{ scope.row.icon }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="服务类型"
              align="center">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.category }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="服务介绍"
              align="center">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.info }}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="操作"
              align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="edit" v-show="edit">
          <div class="edit-table">
            <div class="edit-tit">
              <h3>分类修改</h3>
              <i class="el-icon-close" @click="close('ruleForm')"></i>
            </div>
            <el-form 
            :model="ruleForm" 
            :rules="rules" 
            ref="ruleForm" 
            label-width="130px" 
            class="demo-ruleForm"
            >
              <el-form-item label="图标地址" prop="icon">
                <el-input v-model="ruleForm.icon" placeholder="请填写图标地址"></el-input>
              </el-form-item>
              <el-form-item label="服务类型" prop="category">
                <el-input v-model="ruleForm.category" placeholder="请填写服务类型"></el-input>
              </el-form-item>
              <el-form-item label="服务介绍" prop="info">
                <el-input v-model="ruleForm.info" placeholder="请填写服务介绍"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
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
        edit: false,
        // 导航表单内容
        tableData: [{
          icon: '/icon',
          category: '游客服务处',
          info: '游客服务处',
        },
        {
          icon: '/icon',
          category: '医疗站',
          info: '医疗站',
        },
        {
          icon: '/icon',
          category: '家庭中心',
          info: '家庭中心',
        },
        {
          icon: '/icon',
          category: '婴儿车与轮椅租赁',
          info: '婴儿车与轮椅租赁',
        }],
        // 修改表单验证内容
        ruleForm: {
          icon: '',
          category: '',
          info: ''
        },
        // 修改表单验证规则
        rules: {
          icon: [
            { required: true, message: '图标地址不能为空', trigger: 'blur' }
          ],            
          category: [
            { required: true, message: '服务类型不能为空', trigger: 'blur' }
          ],          
          info: [
            { required: true, message: '服务介绍不能为空', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      // 编辑导航
      handleEdit(index, row) {
        this.edit=true;
        let ruleForm=this.ruleForm;
        let tableData=this.tableData[index];
        ruleForm.icon=tableData.icon;
        ruleForm.category=tableData.category;
        ruleForm.info=tableData.info;
        console.log(index, row);
      },
      // 删除导航
      handleDelete(index, row) {
        console.log(index, row);
      },
      // 提交修改表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.edit=false;
            console.log(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 重置修改表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 关闭修改表单
      close(formName){
        this.edit=false;
        this.$refs[formName].clearValidate();
      },
      open(){
        this.edit=true;
      }
    },
  }
</script>        

<style lang="scss">
@mixin boxRad{
  border-radius: 10px;
}
@mixin m-position($top,$right,$bottom,$left){
  position: absolute;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
}
.ServerCategory{
  .tabled{
    background-color: #fff;
    padding: 10px 40px;
    @include boxRad;
    .nav-title{
      text-align: left;
      position: relative;
      h2::before{
        content: '|';
        color: #409EFF;
      }
      p{
        color: #8e8e8e;
      }
      & .el-button{
        @include m-position(auto,40px,20px,auto);
      }
    }
    .el-table{
      border-top: 1px solid #EBEEF5;
      &::before{
        height: 0!important;
      }
      table tr:last-child td{
        border: 0;
      }
    }
  }
  .edit{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.6);
    @include m-position(0,auto,auto,0);
    .edit-tit{
      position: relative;
      margin-bottom: 20px;
      & i{
        font-size: 16px;
        cursor: pointer;
        @include m-position(0,0,auto,auto);
        &:hover{
          color: #409EFF;
        }
      }
    }
    .edit-table{
      width: 500px;
      padding: 20px 50px 20px 20px;
      text-align: left;
      box-sizing: border-box;
      background-color: #fff;
      transform: translate(-50%,-50%);
      @include m-position(50%,auto,auto,50%);
      @include boxRad;
    }
  }
}
</style>