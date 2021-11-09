<template>
  <div class="ServerlList">
  <waike Admin="true">
    <template>
        <div class="category">
          <h3>游客服务列表</h3>
          <div class="catebox">
            <div class="block">              
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="游客服务处" name="1">
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column type="expand">
                      <template slot-scope="props">
                        <el-form label-position="right" inline class="demo-table-expand">
                          <el-form-item label="服务标题">
                            <span>{{ props.row.name }}</span>
                          </el-form-item>
                          <el-form-item label="联系方式">
                            <span>{{ props.row.phone }}</span>
                          </el-form-item>
                          <el-form-item label="地址">
                            <span>{{ props.row.address }}</span>
                          </el-form-item>
                          <el-form-item label="封面">
                            <el-image 
                              style="width: 100px; height: 100px"
                              :src="props.row.url"
                              :preview-src-list="srcList">
                            </el-image>
                          </el-form-item>
                          <el-form-item label="设施介绍" class=" desc_con">
                            <span>{{ props.row.desc }}</span>
                          </el-form-item>
                        </el-form>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="服务标题"
                      prop="name"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      label="联系方式"
                      prop="phone"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      label="地址"
                      prop="address"
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
                <el-collapse-item title="小黄人乐园" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
              </el-collapse>
              <!-- <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="侏罗纪世界努布拉岛" name="1">
                  <el-descriptions class="margin-top" title="梅尔斯餐厅" :column="1">
                    <template slot="extra">
                      <el-button size="small">修改</el-button>
                      <el-button type="danger" size="small">删除</el-button>
                    </template>
                    <el-descriptions-item label="开放时间">9:00 - 00:00</el-descriptions-item>
                    <el-descriptions-item label="地址">好莱坞</el-descriptions-item>
                    <el-descriptions-item label="封面">
                      <el-image 
                        style="width: 100px; height: 100px"
                        :src="url"
                        :preview-src-list="srcList">
                      </el-image>
                    </el-descriptions-item>
                    <el-descriptions-item label="图集">
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
                    <el-descriptions-item label="详细信息">环球影城大酒店将带您回到那个经典的好莱坞黄金时 代,而您就是那位星光熠熠的电影明星!环球影城大酒 店就坐落在北京环球影城的入口处,在这里,您不仅可 以感受好莱坞时代的璀璨氛围,更可以享受到现代化的 便捷舒适。</el-descriptions-item>
                  </el-descriptions>
                </el-collapse-item>
                <el-collapse-item title="诺金度假酒店-北京环球度假区" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
              </el-collapse> -->
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
        name: '游客服务处（北京环球城市大道）',
        phone: '4008778899',
        address: '北京环球城市大道',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',        
        desc: '额外增加神偷奶爸角色互动早餐,成人将以人民 币288元每位收取(含税)。可于办理入住手续时添 加 额外增加神偷奶爸角色互动早餐,3-11岁儿童将 以人民币200元每位收取(含税)。可于办理入住手 续时添加。 入住/退房 入住时间:16:00后 退房时间:11:00前 所有入住宾客需均遵守酒店宾客须知。 京环球度假区酒店客房均不可加床。 宾客应在退房时结算相关费用。 预订北京环球度假区酒店客房产品不包含北京环 球影城主题公园门票,请根据需求另行购买门票产品 (部分打包产品除外)。 如实际入住人数超过该客房可入住人数,则须增 订客房(取决于酒店的预订情况),具体可入住人数 以预订的房间信息为准。 仅限预订时所录入的身份证件对应的宾客本人使 用,所有入住酒店的宾客以及入住期间的访客(包括 未满18周岁的宾客及访客)须持有效个人身份证件 办理登记。'
      },{
        name: '游客服务处（主入口）',
        phone: '',
        address: '北京环球影城主入口',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',        
        desc: '额外增加神偷奶爸角色互动早餐,成人将以人民 币288元每位收取(含税)。可于办理入住手续时添 加 额外增加神偷奶爸角色互动早餐,3-11岁儿童将 以人民币200元每位收取(含税)。可于办理入住手 续时添加。 入住/退房 入住时间:16:00后 退房时间:11:00前 所有入住宾客需均遵守酒店宾客须知。 京环球度假区酒店客房均不可加床。 宾客应在退房时结算相关费用。 预订北京环球度假区酒店客房产品不包含北京环 球影城主题公园门票,请根据需求另行购买门票产品 (部分打包产品除外)。 如实际入住人数超过该客房可入住人数,则须增 订客房(取决于酒店的预订情况),具体可入住人数 以预订的房间信息为准。 仅限预订时所录入的身份证件对应的宾客本人使 用,所有入住酒店的宾客以及入住期间的访客(包括 未满18周岁的宾客及访客)须持有效个人身份证件 办理登记。'
      }]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
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
.ServerlList{
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
        .el-form-item__label{padding: 0 30px 0 0;}
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