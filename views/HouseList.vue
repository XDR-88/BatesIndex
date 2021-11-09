<template>
  <div class="HouseList">
  <waike ShopAdd="true">
    <template>
        <div class="category">
          <h3>房型列表</h3>
          <div class="catebox">
            <div class="block">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="环球影城大酒店" name="1">
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column type="expand">
                      <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                          <el-form-item label="规格名称1">
                            <span>{{ props.row.spec_name1 }}</span>
                          </el-form-item>
                          <el-form-item label="房间价格1">
                            <el-tag>{{ props.row.price1 }}元</el-tag>
                          </el-form-item>
                          <el-form-item label="规格名称2">
                            <span>{{ props.row.spec_name2 }}</span>
                          </el-form-item>
                          <el-form-item label="房间价格2">
                            <el-tag>{{ props.row.price2 }}元</el-tag>
                          </el-form-item>
                          <el-form-item label="房型图集">
                            <el-image 
                              style="width: 100px; height: 100px"
                              :src="props.row.url"
                              :preview-src-list="srcList">
                            </el-image>
                            <el-image 
                              style="width: 100px; height: 100px"
                              :src="props.row.url"
                              :preview-src-list="srcList">
                            </el-image>
                            <el-image 
                              style="width: 100px; height: 100px"
                              :src="props.row.url"
                              :preview-src-list="srcList">
                            </el-image>
                            <el-image 
                              style="width: 100px; height: 100px"
                              :src="props.row.url"
                              :preview-src-list="srcList">
                            </el-image>
                            <el-image 
                              style="width: 100px; height: 100px"
                              :src="props.row.url"
                              :preview-src-list="srcList">
                            </el-image>
                          </el-form-item>
                          <el-form-item label="预订须知" class=" desc_con">
                            <span>{{ props.row.desc }}</span>
                          </el-form-item>
                        </el-form>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="房型名称"
                      prop="name"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      label="房间大小"
                      prop="size"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      label="床型"
                      prop="style"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      label="入住信息"
                      prop="people"
                      align="center">
                    </el-table-column>
                    <el-table-column label="操作"
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
      value: true,
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      tableData: [{
        name: '功夫熊猫主题大床房',
        size: '42㎡',
        style: '42㎡双大床（2×1.5米×2米）',
        people: '4',
        spec_name1: '功夫熊猫主题大床房',
        price1: '3180.00',
        spec_name2: '功夫熊猫主题大床房含双人神偷奶爸角色互动早餐',
        price2: '3790.56',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',        
        desc: '额外增加神偷奶爸角色互动早餐,成人将以人民 币288元每位收取(含税)。可于办理入住手续时添 加 额外增加神偷奶爸角色互动早餐,3-11岁儿童将 以人民币200元每位收取(含税)。可于办理入住手 续时添加。 入住/退房 入住时间:16:00后 退房时间:11:00前 所有入住宾客需均遵守酒店宾客须知。 京环球度假区酒店客房均不可加床。 宾客应在退房时结算相关费用。 预订北京环球度假区酒店客房产品不包含北京环 球影城主题公园门票,请根据需求另行购买门票产品 (部分打包产品除外)。 如实际入住人数超过该客房可入住人数,则须增 订客房(取决于酒店的预订情况),具体可入住人数 以预订的房间信息为准。 仅限预订时所录入的身份证件对应的宾客本人使 用,所有入住酒店的宾客以及入住期间的访客(包括 未满18周岁的宾客及访客)须持有效个人身份证件 办理登记。 每个房间至少需要入住一名成人,18岁以下宾客 需经父母或者监护人陪同方可办理入住。 ·我们致力于创建可持续发展的环境,因此北京环 球度假区酒店将不主动提供一次性客用品,所有客用 品仅在宾客要求的情况下提供。 ·提前入园礼遇:入住北京环球度假区环球影城大 酒店及诺金度假酒店的宾客将享有提前入园礼遇,您 或将有权在入园当日于北京环球影城对公众开放前提 前至多一小时进入主题公园并享受部分指定景点或景 区的优先游览。需持有有效北京环球影城主题公园门票'
      },
      {
        name: '功夫熊猫主题大床房',
        size: '42㎡',
        style: '42㎡双大床（2×1.5米×2米）',
        people: '4',
        spec_name1: '功夫熊猫主题大床房',
        price1: '3180.00',
        spec_name2: '功夫熊猫主题大床房含双人神偷奶爸角色互动早餐',
        price2: '3790.56',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',        
        desc: '额外增加神偷奶爸角色互动早餐,成人将以人民 币288元每位收取(含税)。可于办理入住手续时添 加 额外增加神偷奶爸角色互动早餐,3-11岁儿童将 以人民币200元每位收取(含税)。可于办理入住手 续时添加。 入住/退房 入住时间:16:00后 退房时间:11:00前 所有入住宾客需均遵守酒店宾客须知。 京环球度假区酒店客房均不可加床。 宾客应在退房时结算相关费用。 预订北京环球度假区酒店客房产品不包含北京环 球影城主题公园门票,请根据需求另行购买门票产品 (部分打包产品除外)。 如实际入住人数超过该客房可入住人数,则须增 订客房(取决于酒店的预订情况),具体可入住人数 以预订的房间信息为准。 仅限预订时所录入的身份证件对应的宾客本人使 用,所有入住酒店的宾客以及入住期间的访客(包括 未满18周岁的宾客及访客)须持有效个人身份证件 办理登记。 每个房间至少需要入住一名成人,18岁以下宾客 需经父母或者监护人陪同方可办理入住。 ·我们致力于创建可持续发展的环境,因此北京环 球度假区酒店将不主动提供一次性客用品,所有客用 品仅在宾客要求的情况下提供。 ·提前入园礼遇:入住北京环球度假区环球影城大 酒店及诺金度假酒店的宾客将享有提前入园礼遇,您 或将有权在入园当日于北京环球影城对公众开放前提 前至多一小时进入主题公园并享受部分指定景点或景 区的优先游览。需持有有效北京环球影城主题公园门票'
      },
      {
        name: '功夫熊猫主题大床房',
        size: '42㎡',
        style: '42㎡双大床（2×1.5米×2米）',
        people: '4',
        spec_name1: '功夫熊猫主题大床房',
        price1: '3180.00',
        spec_name2: '功夫熊猫主题大床房含双人神偷奶爸角色互动早餐',
        price2: '3790.56',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',        
        desc: '额外增加神偷奶爸角色互动早餐,成人将以人民 币288元每位收取(含税)。可于办理入住手续时添 加 额外增加神偷奶爸角色互动早餐,3-11岁儿童将 以人民币200元每位收取(含税)。可于办理入住手 续时添加。 入住/退房 入住时间:16:00后 退房时间:11:00前 所有入住宾客需均遵守酒店宾客须知。 京环球度假区酒店客房均不可加床。 宾客应在退房时结算相关费用。 预订北京环球度假区酒店客房产品不包含北京环 球影城主题公园门票,请根据需求另行购买门票产品 (部分打包产品除外)。 如实际入住人数超过该客房可入住人数,则须增 订客房(取决于酒店的预订情况),具体可入住人数 以预订的房间信息为准。 仅限预订时所录入的身份证件对应的宾客本人使 用,所有入住酒店的宾客以及入住期间的访客(包括 未满18周岁的宾客及访客)须持有效个人身份证件 办理登记。 每个房间至少需要入住一名成人,18岁以下宾客 需经父母或者监护人陪同方可办理入住。 ·我们致力于创建可持续发展的环境,因此北京环 球度假区酒店将不主动提供一次性客用品,所有客用 品仅在宾客要求的情况下提供。 ·提前入园礼遇:入住北京环球度假区环球影城大 酒店及诺金度假酒店的宾客将享有提前入园礼遇,您 或将有权在入园当日于北京环球影城对公众开放前提 前至多一小时进入主题公园并享受部分指定景点或景 区的优先游览。需持有有效北京环球影城主题公园门票'
      }]
    };
  },
  mounted: function(){
    for(var i=0;i<this.tableData.length;i++){
      this.tableData[i].people = `最多${this.tableData[i].people}人入住`;
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  handleEdit(index, row) {
    console.log(index, row);
  },
  handleDelete(index, row) {
    console.log(index, row);
  }
}
</script>

<style lang="scss">
.HouseList{
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
          margin-top: 15px;
        }
        .el-tag{
          margin-right: 10px;
        }
        .demo-table-expand {
          font-size: 0;
          label {
            width: 90px;
            color: #99a9bf;
          }
          .el-form-item {
            margin-right: 0;
            margin-bottom: 0;
            width: 100%;
            &:last-child .el-form-item__content{
              line-height: 20px;
            }
          }
        }
        .desc_con{
          .el-form-item__content{
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