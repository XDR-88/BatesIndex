<template>
  <div class="IntroList">
  <waike Content="true">
    <template>
        <div class="category">
          <h3>攻略列表</h3>
          <div class="catebox">
            <div class="block">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  label="攻略主标题"
                  align="center">
                  <template slot-scope="scope">
                    <span>{{ scope.row.title }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="攻略副标题">
                  <template slot-scope="scope">
                    <span>{{ scope.row.subTitle }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="攻略副标题">
                  <template slot-scope="scope">
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="scope.row.poster"
                      fit="contain"></el-image>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
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
      tableData: [{
        title: '全家出动，北京环球度假区畅玩指南',
        subTitle: '亲子游 欢乐妙趣 寓教于乐',
        poster: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      },
      {
        title: '全家出动，北京环球度假区畅玩指南',
        subTitle: '亲子游 欢乐妙趣 寓教于乐',
        poster: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      },]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="scss">
.IntroList{
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
        padding: 20px;
        border-top: 1px solid #E9EEF3;
        .el-collapse-item__header{
          padding: 0 20px;
          background-color: #f5f5f5;
        }
        .el-collapse-item__wrap{
          padding: 20px;
        }
        .el-descriptions-item__label{
          color: #b1b1b1;
        }
        .el-descriptions-item__container{
          flex-wrap: wrap;
        }
        .el-descriptions__body{
          .el-descriptions__table .el-descriptions-item__cell{
            padding: 10px 0;
          }
        }
        .el-image{
          margin-right: 10px;
        }
        .el-tag{
          margin-right: 10px;
        }
        .desc_con{
          .el-descriptions-item__label{
            width: 100%;
          }
          .el-descriptions-item__content{
            border: 1px solid #dfdfdf;
            padding: 15px;
            margin-top: 6px;
            border-radius: 10px;
            background: #fbfbfb;
            color: #a5a5a5;
            line-height: 1.8;
          }
        }
      }
      
    }
  }
}
</style>