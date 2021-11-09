<template>
  <div class="PlaylList">
  <waike Show="true">
    <template>
        <div class="category">
          <h3>演出列表</h3>
          <div class="catebox">
            <div class="block">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="小黄人乐园" name="1">
                  <el-descriptions class="margin-top" title="小黄人超萌海滩派对" :column="4">
                    <template slot="extra">
                      <el-button size="small">修改</el-button>
                      <el-button type="danger" size="small">删除</el-button>
                    </template>
                    <el-descriptions-item label="演出类型">室内</el-descriptions-item>
                    <el-descriptions-item label="开放时间">9:00 - 00:00</el-descriptions-item>
                    <el-descriptions-item label="演出场次">14:30 16:00 17:30</el-descriptions-item>
                    <el-descriptions-item label="演出地址">小黄人乐园</el-descriptions-item>
                  </el-descriptions>
                  <el-descriptions class="margin-top" :column="1">
                    <el-descriptions-item label="演出图集">
                      <div class="demo-image__preview">
                        <el-image 
                          style="width: 100px; height: 100px"
                          :src="url"
                          :preview-src-list="srcList">
                        </el-image>
                        <el-image 
                          style="width: 100px; height: 100px"
                          :src="url"
                          :preview-src-list="srcList">
                        </el-image>
                        <el-image 
                          style="width: 100px; height: 100px"
                          :src="url"
                          :preview-src-list="srcList">
                        </el-image>
                        <el-image 
                          style="width: 100px; height: 100px"
                          :src="url"
                          :preview-src-list="srcList">
                        </el-image>
                        <el-image 
                          style="width: 100px; height: 100px"
                          :src="url"
                          :preview-src-list="srcList">
                        </el-image>
                      </div>
                    </el-descriptions-item> 
                  </el-descriptions>
                  <el-descriptions class="margin-top desc_con" :column="1">
                    <el-descriptions-item label="演出介绍">环球影城大酒店将带您回到那个经典的好莱坞黄金时 代,而您就是那位星光熠熠的电影明星!环球影城大酒 店就坐落在北京环球影城的入口处,在这里,您不仅可 以感受好莱坞时代的璀璨氛围,更可以享受到现代化的 便捷舒适。</el-descriptions-item>
                    <el-descriptions-item label="温馨提示">环球影城大酒店将带您回到那个经典的好莱坞黄金时 代,而您就是那位星光熠熠的电影明星!环球影城大酒 店就坐落在北京环球影城的入口处,在这里,您不仅可 以感受好莱坞时代的璀璨氛围,更可以享受到现代化的 便捷舒适。而作为酒店的客人您还将得到一份贵宾礼遇 通过北京环球影城贵宾体验入口,优享提前入园礼 遇。酒店餐饮及各类美食令人眼花缭乱。在环球影城红 龙酒廊您可以品尝到经典的鸡尾酒与众多美味小食,而 在皮爷咖啡,感受手工小批量烘焙,匠心制作的每一杯 咖啡,满足您对咖啡的挑剔与想象!而热闹非凡的环球 影城莲花园,则准备了令您和亲友心满意足的丰盛大 餐!沉浸于好莱坞的魅力世界,徜徉于环球影城大酒店 的璀璨氛围,开启一段终生难忘的好莱坞电影之旅。</el-descriptions-item>
                  </el-descriptions>
                </el-collapse-item>
                <el-collapse-item title="诺金度假酒店-北京环球度假区" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
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
.PlaylList{
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