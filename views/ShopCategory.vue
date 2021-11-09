<template>
  <div class="ShopCategory">
    <waike ShopAdd="true">
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
              label="门票名称"
              width="220"
              align="center">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="门票类型"
              width="180"
              align="center">
              <template slot-scope="scope">
                <el-tag style="margin-left: 10px">{{ scope.row.category }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="门票价格"
              width="220"
              align="center">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.price }}</span>
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
        <div class="tabled" style="margin-top: 30px;">
          <div class="nav-title">
            <h2>预订须知</h2>
            <p>购买门票告知游客内容</p>
          </div>
          <rich-text-box></rich-text-box>
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
              <el-form-item label="门票名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请填写门票名称"></el-input>
              </el-form-item>
              <el-form-item label="门票类型">
                <el-input v-model="ruleForm.category" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="门票价格" prop="price">
                <el-input v-model="ruleForm.price" placeholder="请填写门票价格"></el-input>
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
  import RichTextBox from '../components/RichTextBox.vue'

  export default {
  components:{
    Waike,
    RichTextBox
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
      edit: false,
      // 导航表单内容
      tableData: [{
        name: '标准票',
        category: '电子票',
        price: '638.00',
      }, {
        name: '儿童票',
        category: '电子票',
        price: '480.00',
      }, {
        name: '老年人票',
        category: '电子票',
        price: '480.00',
      }],
      // 修改表单验证内容
      ruleForm: {
        order: 0,
        name: '',
        category: '电子票',
        price: 0,
        show: false
      },
      // 修改表单验证规则
      rules: {
        name: [
          { required: true, message: '请输入门票名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        price: [
          { required: true, validator: validatePrice, trigger: 'blur' }
        ]
      },
    }
  },
    mounted() {
      this.axios.get('/ticket').then(res => {
        // let meng = res.data.result
        // console.log(meng)
        console.log(res)
      })
    },
    methods: {
    // 编辑导航
    handleEdit(index, row) {
      this.edit=true;
      let ruleForm=this.ruleForm;
      let tableData=this.tableData[index];
      ruleForm.name=tableData.name;
      ruleForm.category=tableData.category;
      ruleForm.price=tableData.price;
      console.log(index, row);
    },
    // 删除导航
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 修改开关状态
    changeStatus($event,num){
      console.log($event);
      console.log(num);
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
.ShopCategory{
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
  .el-table--scrollable-x .el-table__body-wrapper{
    // 自定义滚动条样式
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 6px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #c5c5c5;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #f8f8f8;
    }
  }
}
</style>
