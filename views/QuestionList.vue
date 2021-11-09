<template>
  <div class="QuestionList">
  <waike Admin="true">
    <template>
        <div class="category">
          <h3>常见问题列表</h3>
          <div class="catebox">
            <div class="block">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="游览北京环球度假区时,禁止携带哪些物品?" name="1">
                  <div>您可通过北京环球度假区官方网站、APP、阿里小程序 和微信小程序査看《北京环球度假区及北京环球影城入 园须知》,了解详情。</div>
                </el-collapse-item>
                <el-collapse-item title="游览北京环球度假区时,禁止携带哪些物品?" name="2">
                  <div>您可通过北京环球度假区官方网站、APP、阿里小程序 和微信小程序査看《北京环球度假区及北京环球影城入 园须知》,了解详情。</div>
                </el-collapse-item>
              </el-collapse>
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
      activeNames: ['1'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style lang="scss">
.QuestionList{
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