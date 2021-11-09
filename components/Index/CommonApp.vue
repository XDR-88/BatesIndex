<template>
  <div class="common-app">
    <div class="use">
      <h2>常用功能</h2>
      <div class="useBox">
        <div class="grid-content bg-purple">
          <router-link to="/serveradd">
          <p><img src="@/assets/img/menuicon-dining.png" alt=""></p>
          <p>添加游客服务</p>
          </router-link>
        </div>
        <div class="grid-content bg-purple">
          <router-link to="/playadd">
          <p><img src="@/assets/img/menuicon-event.png" alt=""></p>
          <p>添加玩乐</p>
          </router-link>
        </div>
        <div class="grid-content bg-purple">
          <router-link to="/shopcategory">
          <p><img src="@/assets/img/menuicon-rides.png" alt=""></p>
          <p>门票分类</p>
          </router-link>
        </div>
        <div class="grid-content bg-purple">
          <router-link to="/shopadd">
          <p><img src="@/assets/img/menuicon-shop.png" alt=""></p>
          <p>添加门票</p>
          </router-link>
        </div>
        <div class="grid-content bg-purple">
          <router-link to="/foodadd">
          <p><img src="@/assets/img/menuicon-shows.png" alt=""></p>
          <p>添加餐厅</p>
          </router-link>
        </div>
        <div class="grid-content bg-purple">
          <router-link to="/hoteladd">
          <p><img src="@/assets/img/menuicon-show.png" alt=""></p>
          <p>添加酒店</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="situation">
      <h3>概况</h3>
      <div class="situBox">
        <div class="grid-content bg-purple">   
          <router-link to="/themelist">               
            <div>
              <img src="@/assets/img/nav-shop.jpg" alt="">
            </div>
            <div>
              <p class="category">在线主题故事</p>
              <p class="number">7</p>
            </div>
          </router-link>
        </div>
        <div class="grid-content bg-purple">   
          <router-link to="/playlist">               
            <div>
              <img src="@/assets/img/nav-play.jpg" alt="">
            </div>
            <div>
              <p class="category">在线主题必玩</p>
              <p class="number">7</p>
            </div>
          </router-link>
        </div>
        <div class="grid-content bg-purple"> 
          <router-link to="/cafelist">           
            <div>
              <img src="@/assets/img/nav-dining.jpg" alt="">
            </div>
            <div>
              <p class="category">在线商店餐厅</p>
              <p class="number">7</p>
            </div>
          </router-link>
        </div>  
        <div class="grid-content bg-purple"> 
          <router-link to="/showlist">           
            <div>
              <img src="@/assets/img/nav-shows.jpg" alt="">
            </div>
            <div>
              <p class="category">在线演出</p>
              <p class="number">7</p>
            </div>
          </router-link>
        </div> 
        <div class="grid-content bg-purple">  
          <router-link to="/introlist">              
            <div>
              <img src="@/assets/img/nav-event.png" alt="">
            </div>
            <div>
              <p class="category">在线攻略推荐</p>
              <p class="number">7</p>
            </div>
          </router-link>
        </div> 
      </div>    

    </div> -->
  </div>
</template>


<style lang="scss">
.common-app{
  .use{
    margin-bottom: 30px;  
    padding: 10px 40px 60px;    
  }
  a{
    color: #333!important;
  }
  &>div{
    text-align: left;
    background-color: #fff;
    padding: 10px 40px;
    border-radius: 10px;
    &>div{
      display: flex;      
    }
    .useBox{
      .grid-content{
        width: 250px;
        text-align: center;
        padding: 30px;
        margin: 0 10px;
        transition: .5s;
        background: linear-gradient(#ddedfd, #fff);
        &:hover{
          background: #ddedfd;
        }
        img{
          width: 62px;
        }
      }
    }
    .situBox{
      margin: 15px;
      .grid-content{
        width: 230px;
        a{
          padding: 15px 10px;
          display: flex;
          transition: .5s;
          &:hover{
            color: var(--main-color-blue);
            background-color: #f5f5f5;
          }
          div{
            img{
              width: 60px;
              margin-right: 15px;
              border-radius: 6px;
            }
            .number{
              margin: 0;
            }
          }
        }
      }
    }
  }  
}
</style>