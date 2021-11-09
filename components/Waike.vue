<template>
  <div class="waike">
    <el-container>
      <el-aside width="100px">
        <div><router-link to="/"><img src="../assets/img/logo2.png" alt /><p>首页</p></router-link></div>
        <ul @click="open">
          <!-- <router-link to="/"><li class="el-icon-s-home" :class="{active:Index}">首页</li></router-link> -->
          <li data-index='0' class="el-icon-s-help" :class="{active:ShopAdd}">运营</li>
          <!-- <li data-index='1' class="el-icon-menu" :class="{active:Content}">内容</li> -->
          <!-- <li data-index='2' class="el-icon-s-custom" :class="{active:Show}">演出</li> -->
          <li data-index='3' class="el-icon-s-goods" :class="{active:Admin}">管理</li>
        </ul>
        <el-button type="text" @click="dialogVisible = true"><i class="el-icon-switch-button"></i></el-button>
        <el-dialog
          title="退出登录"
          :visible.sync="dialogVisible"
          :append-to-body="true"
          width="30%"
          :before-close="handleClose">
          <span>确定要退出登录吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-aside>
      <el-container>
        <el-main>
          <div class="menu">
            <el-menu>
              <el-submenu index="1">
                <template slot="title">
                  <span>门票</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1"><router-link to="/shopadd">添加门票</router-link></el-menu-item>
                  <el-menu-item index="1-2"><router-link to="/shopcategory">门票分类</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <span>酒店</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-3"><router-link to="/hoteladd">添加酒店</router-link></el-menu-item>
                  <el-menu-item index="1-4"><router-link to="/hotellist">酒店列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <span>房型</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-5"><router-link to="/houseadd">添加房型</router-link></el-menu-item>
                  <el-menu-item index="1-6"><router-link to="/houselist">房型列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <span>餐厅</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-7"><router-link to="/foodadd">添加餐厅</router-link></el-menu-item>
                  <el-menu-item index="1-8"><router-link to="/foodlist">餐厅列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
            <el-menu>
              <el-submenu index="1">
                <template slot="title">
                  <span>主题故事</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-9"><router-link to="/themeadd">添加主题故事</router-link></el-menu-item>
                  <el-menu-item index="1-10"><router-link to="/themelist">主题故事列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <span>主题必玩</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-11"><router-link to="/playadd">添加玩乐</router-link></el-menu-item>
                  <el-menu-item index="1-12"><router-link to="/playlist">玩乐列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <span>攻略推荐</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-13"><router-link to="/introadd">添加攻略</router-link></el-menu-item>
                  <el-menu-item index="1-14"><router-link to="/introlist">攻略列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <span>商店餐厅</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-15"><router-link to="/cafeadd">添加商店餐厅</router-link></el-menu-item>
                  <el-menu-item index="1-16"><router-link to="/cafelist">商店餐厅列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>    
            </el-menu>
            <el-menu :default-openeds="['1']">
              <el-submenu index="1">
                <template slot="title">
                  <span>演出</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-17"><router-link to="/showadd">添加演出</router-link></el-menu-item>
                  <el-menu-item index="1-18"><router-link to="/showlist">演出列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
            <el-menu>
              <el-submenu index="1">
                <template slot="title">
                  <span>游客服务</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-19"><router-link to="/serveradd">添加游客服务</router-link></el-menu-item>
                  <el-menu-item index="1-20"><router-link to="/serverlist">游客服务列表</router-link></el-menu-item>
                  <el-menu-item index="1-21"><router-link to="/servercategory">游客服务分类</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <span>常见问题</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-22"><router-link to="/questionadd">添加问题</router-link></el-menu-item>
                  <el-menu-item index="1-23"><router-link to="/questionlist">问题列表</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- <el-submenu index="3">
                <template slot="title">
                  <span>运营时间</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-24"><router-link to="/opertime">设置运营时间</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu> -->
            </el-menu>            
          </div>
          <div class="center" @click="asideNone">
            <slot></slot>
            <div class="bottom">北京环球度假区管理后台</div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Waike",
  props:['ShopAdd','Content','Show','Admin'],
  data() {
    return {
      active: '',
      dialogVisible: false
    };
  },
  methods: {
    // 根据左侧导航展开相应子导航
    open(e){       
      var target=e.target;
      var index=target.dataset.index;
      var main=document.querySelector(".el-main .menu");
      var mainCon=document.querySelector(".el-main .center");
      var mainChild=main.children;
      var ul=target.parentNode.children;
      for(var i=0;i<mainChild.length;i++)
        mainChild[i].setAttribute("style", "display:none");
      for(var i=0;i<ul.length;i++)
        ul[i].setAttribute("style", "background-color:transparent;color:#8e8e8e;");
      target.setAttribute("style","background-color: #545c64;color:#f5f5f5;")
      main.setAttribute("style", "left: 100px;z-index: 99;");
      mainChild[index].setAttribute("style", "display:block");
      mainCon.setAttribute("style", "margin-left: 150px;");
      // index>=0 ? mainChild[index].setAttribute("style", "display:block") : main.setAttribute("style", "left: -150px;");
      // index>=0 ? mainCon.setAttribute("style", "margin-left: 150px;") : mainCon.setAttribute("style", "margin-left: 0;");
    },
    // 点击右侧空白位置关闭子导航
    asideNone() {
      var main = document.querySelector(".el-main .menu");
      var mainCon = document.querySelector(".el-main .center");
      main.setAttribute("style", "margin-left: -150px;");
      mainCon.setAttribute("style", "margin-left: 0;");
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="scss">
@mixin bgColor($bg,$cc){
  color: $cc;
  background-color: $bg;
}
.active{@include bgColor(#545c64,#f5f5f5);}
.waike {
  .el-container,.menu {
    height: 100vh;
  }
  .el-aside {
    text-align: center;
    line-height: 60px;
    overflow: visible !important;
    z-index: 100;
    &>div{
      color: #f5f5f5;
      height: 100px;
      overflow: hidden;
      margin-top: 10px;
      &:hover img{
        width: 55px;
        opacity: .5;
        transition: .5s;  
      }
      &:hover p{        
        margin-top: -15px;
      }
      img{
        width: 75px;
        margin-top: 25px;
        transition: .5s; 
      }
      p{
        line-height: 22px;
      }
    }
    .el-button{
      position: absolute;
      bottom: 20px;
      left: 40px;
      font-size: 18px;
    }
  }
  .el-submenu .el-menu-item{min-width: 150px!important;}
  // 侧边
  .el-aside {
    background-color: #333;
    &> ul {      
      color: #8e8e8e;
      // li:first-child{
      //   @include bgColor(#545c64,#f5f5f5);
      // }
      li{
        cursor: pointer;
        display: block;
        line-height: inherit;
        &::before{
          margin-right: 4px;
        }
        &:hover{
          background-color: #545c64;
        }
        i{
          font-size: 16px;
          margin-right: 4px;
        }
      }
    }
  }
  // 中间
  .el-main{
    @include bgColor(#e9eef3,#333);
    text-align: center;
    padding: 0;
    display: flex;
    flex: 1;
    &>.menu{
      width: 150px;
      left: -150px;
      transition: .6s linear;
      position: fixed;
      z-index: -2;
      @include bgColor(#545c64,#f5f5f5);
      &>.el-menu{
        width: 150px;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        display: none;
        background-color: #545c64;
        li,span{
          @include bgColor(#545c64,#fff);
        }
        .el-submenu__title>span{color:#b4b4b4;}
        .el-submenu__title:hover{background-color: transparent;}
        .el-menu-item-group__title{padding: 0;}
        // 自定义滚动条样式
        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
          height: 1px;
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
    &>.center{
      width: 100%;
      min-height: 100vh;
      padding: 40px;
      box-sizing: border-box;
      transition: 0.6s linear;
    }
  }
  .bottom{padding: 40px 0 25px;color: #888;}
}
</style>