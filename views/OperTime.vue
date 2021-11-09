<template>
  <div class="OperTime">
    <waike Admin="true">
      <template>
        <el-form :model="ruleForm" 
                 :rules="rules" 
                 ref="ruleForm" 
                 label-width="150px" 
                 class="demo-ruleForm">
          <div class="category">
            <h3>设置运营时间</h3>
            <div class="catebox">
              <div class="block">  
                <el-row>
                  <el-col :span="15">
                    <el-calendar>
                      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                      <template
                        slot="dateCell"
                        slot-scope="{date, data}">
                        <p :class="data.isSelected ? 'is-selected' : ''" @click="content(data.day)">
                          {{ data.day.split('-').slice(1).join('-') }} 
                        </p>
                      </template>
                    </el-calendar>
                  </el-col>
                  <el-col :span="8" :offset="1" style="margin-top: 53px">
                    <div class="utime">
                      <h3>北京环球影城运营时间</h3>
                      <el-time-picker
                        is-range
                        v-model="value1"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                      </el-time-picker>
                    </div>
                    <div class="utime">
                      <h3>北京环球城市大道运营时间</h3>
                      <el-time-picker
                        is-range
                        v-model="value1"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                      </el-time-picker>
                    </div>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">确定添加</el-button>
                    </el-form-item>
                  </el-col>                  
                </el-row>
              </div>
            </div>
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
        date: new Date(),
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        ruleForm: {
        },
        rules: {
        }
      }
    },
    methods: {
      content(date){
        console.log(date);
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
      }
    }
  }
</script>

<style lang="scss">
.OperTime{
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
        .el-calendar{
          width: 100%;
        }
        .el-input{
          width: 350px;
        }
        .utime{
          margin-bottom: 30px;
          h3{
            margin: 8px;
          }
          .active{background-color: #fff;}
        }
        .el-form-item__content{margin-left: 0!important;}
      }
    }
  }
}
</style>