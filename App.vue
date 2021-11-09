<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
:root{
  --main-color-blue: #409EFF;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: Tahoma,Arial,"Helvetica Neue","Hiragino Sans GB",Simsun,sans-self;
  font-size: 14px;
  a{
    color: #fff;
    text-decoration: none;
    &:hover{
      color: #409EFF;
    }
  }
}

</style>
