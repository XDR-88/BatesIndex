<template>
  <div class="nav-table">
    <div class="tabled">
      <div class="nav-title">
        <h2>导航设置</h2>
        <p>根据具体目标和制约因素，对页面导航执行操作</p>
        <el-button @click="open()">添加导航内容</el-button>
      </div>
      <el-table
      :data="tableData"
      style="width: 100%"
      >
        <el-table-column
          label="排序"
          width="80"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.order }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="名称"
          width="180"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="类型"
          width="100"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="链接"
          width="200"
          align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.link }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="是否新窗口打开"
          width="180"
          align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_self"
              active-color="#13ce66"
              inactive-color="#dadada" 
              @change="changeStatus($event,scope.row.id)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="是否显示"
          width="180"
          align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_show"
              active-color="#13ce66"
              inactive-color="#dadada" 
              @change="changeStatus($event,scope.row.id)">
            </el-switch>
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
          <h3>导航修改</h3>
          <i class="el-icon-close" @click="close('ruleForm')"></i>
        </div>
        <el-form 
        :model="ruleForm" 
        :rules="rules" 
        ref="ruleForm" 
        label-width="130px" 
        class="demo-ruleForm"
        >
          <el-form-item label="导航排序" prop="order">
            <el-input v-model.number="ruleForm.order" placeholder="请填写导航排序"></el-input>
          </el-form-item>
          <el-form-item label="导航名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请填写导航名称"></el-input>
          </el-form-item>
          <el-form-item label="导航类型" prop="style">
            <el-input value="一级菜单" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="导航链接" prop="link">
            <el-input v-model="ruleForm.link" placeholder="请填写导航链接"></el-input>
          </el-form-item>
          <el-form-item label="是否新窗口打开" prop="self">
            <el-switch
              v-model="ruleForm.self"
              active-color="#13ce66"
              inactive-color="#dadada">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否在页面显示" prop="show">
            <el-switch
              v-model="ruleForm.show"
              active-color="#13ce66"
              inactive-color="#dadada">
            </el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
    // 验证导航链接
    var linkRule = (rule, value, callback) => {
      // var reg=/^([\/A-Za-z0-9-~\/])+$/;
      var reg=/^\/{1}[0-9A-Za-z]{1,}$/;
      if (value === '') {
        callback(new Error('导航链接不可为空'));
      } else if (!reg.test(value)) {
        callback(new Error('导航链接不规范'));
      } else {
        callback();
      }
    };
    return {
      edit: false,
      // 导航表单内容
      tableData: [{
        id: 1,
        order: 1,
        name: '了解有氧',
        type: '一级导航',
        link: '/about',
        is_self: true,
        is_show: false
      }, {
        id: 2,
        order: 2,
        name: '有氧课程',
        type: '一级导航',
        link: '/course',
        is_self: true,
        is_show: false
      }, {
        id: 3,
        order: 3,
        name: '智能装备',
        type: '一级导航',
        link: '/product',
        is_self: true,
        is_show: true
      }, {
        id: 4,
        order: 4,
        name: '健康食品',
        type: '一级导航',
        link: '/food',
        is_self: false,
        is_show: true
      },{
        id: 5,
        order: 5,
        name: '有氧教练',
        type: '一级导航',
        link: '/teacher',
        is_self: true,
        is_show: true
      },{
        id: 6,
        order: 6,
        name: '媒体',
        type: '一级导航',
        link: '/news',
        is_self: false,
        is_show: false
      }],
      // 修改表单验证内容
      ruleForm: {
        order: 0,
        name: '',
        style: '',
        link: '',
        self: true,
        show: true
      },
      // 修改表单验证规则
      rules: {
        order: [
          { required: true, message: '请填写导航排序', trigger: 'blur' },
          { type: 'number', message: '必须为数字', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入导航名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        link: [
          { validator: linkRule, trigger: 'blur' }
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
      ruleForm.order=tableData.order;
      ruleForm.name=tableData.name;
      ruleForm.style=tableData.style;
      ruleForm.link=tableData.link;
      ruleForm.self=tableData.is_self;
      ruleForm.show=tableData.is_show;
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
.nav-table{
  .tabled{
    background-color: #fff;
    padding: 10px 40px;
    @include boxRad;
    .nav-title{
      text-align: left;
      position: relative;
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
          color: var(--main-color-blue);
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