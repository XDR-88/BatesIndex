<template>
  <div class="HotelList">
  <waike ShopAdd="true">
    <template>
        <div class="category">
          <h3>酒店列表</h3>
          <div class="catebox">
            <div class="block">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="环球影城大酒店" name="1">
                  <el-descriptions class="margin-top" title="环球影城大酒店" :column="3">
                    <template slot="extra">
                      <el-button size="small">修改</el-button>
                      <el-button type="danger" size="small">删除</el-button>
                    </template>
                    <el-descriptions-item label="酒店价格">1378.00</el-descriptions-item>
                    <el-descriptions-item label="联系方式">86400 877 8899</el-descriptions-item>
                    <el-descriptions-item label="酒店地址">北京市通州区日出巷2号环球影城大酒店</el-descriptions-item>
                    <el-descriptions-item label="一句话描述">全球首家以环球品牌命名的酒店</el-descriptions-item>
                  </el-descriptions>
                  <el-descriptions class="margin-top" :column="1">
                    <el-descriptions-item label="尊享礼遇">
                      <el-tag>位于主题公园入口</el-tag>
                      <el-tag>提前入院礼遇</el-tag>
                      <el-tag>宾客体验服务</el-tag>
                      <el-tag>24小时客房送餐服务</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="酒店设施">
                      <el-tag type="warning">游泳池</el-tag>
                      <el-tag type="warning">儿童天地</el-tag>
                      <el-tag type="warning">健身房</el-tag>
                      <el-tag type="warning">行政走廊</el-tag>
                      <el-tag type="warning">环球影城商店</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="酒店图集">
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
                    <el-descriptions-item label="酒店简介">环球影城大酒店将带您回到那个经典的好莱坞黄金时 代,而您就是那位星光熠熠的电影明星!环球影城大酒 店就坐落在北京环球影城的入口处,在这里,您不仅可 以感受好莱坞时代的璀璨氛围,更可以享受到现代化的 便捷舒适。而作为酒店的客人您还将得到一份贵宾礼遇 通过北京环球影城贵宾体验入口,优享提前入园礼 遇。酒店餐饮及各类美食令人眼花缭乱。在环球影城红 龙酒廊您可以品尝到经典的鸡尾酒与众多美味小食,而 在皮爷咖啡,感受手工小批量烘焙,匠心制作的每一杯 咖啡,满足您对咖啡的挑剔与想象!而热闹非凡的环球 影城莲花园,则准备了令您和亲友心满意足的丰盛大 餐!沉浸于好莱坞的魅力世界,徜徉于环球影城大酒店 的璀璨氛围,开启一段终生难忘的好莱坞电影之旅。</el-descriptions-item>
                    <el-descriptions-item label="预订须知">额外增加神偷奶爸角色互动早餐,成人将以人民 币288元每位收取(含税)。可于办理入住手续时添 加 额外增加神偷奶爸角色互动早餐,3-11岁儿童将 以人民币200元每位收取(含税)。可于办理入住手 续时添加。 入住/退房 入住时间:16:00后 退房时间:11:00前 所有入住宾客需均遵守酒店宾客须知。 京环球度假区酒店客房均不可加床。 宾客应在退房时结算相关费用。 预订北京环球度假区酒店客房产品不包含北京环 球影城主题公园门票,请根据需求另行购买门票产品 (部分打包产品除外)。 如实际入住人数超过该客房可入住人数,则须增 订客房(取决于酒店的预订情况),具体可入住人数 以预订的房间信息为准。 仅限预订时所录入的身份证件对应的宾客本人使 用,所有入住酒店的宾客以及入住期间的访客(包括 未满18周岁的宾客及访客)须持有效个人身份证件 办理登记。 每个房间至少需要入住一名成人,18岁以下宾客 需经父母或者监护人陪同方可办理入住。 ·我们致力于创建可持续发展的环境,因此北京环 球度假区酒店将不主动提供一次性客用品,所有客用 品仅在宾客要求的情况下提供。 ·提前入园礼遇:入住北京环球度假区环球影城大 酒店及诺金度假酒店的宾客将享有提前入园礼遇,您 或将有权在入园当日于北京环球影城对公众开放前提 前至多一小时进入主题公园并享受部分指定景点或景 区的优先游览。需持有有效北京环球影城主题公园门票</el-descriptions-item>
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
.HotelList{
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