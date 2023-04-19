<template>
  <header>
      <h1>国土绿化数据总览</h1>
    </header>
  <div class="com-page">
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top">
          left-top
        </div>
        <div id="left-bottom">
          left-bottom
        </div>
      </section>
      <section class="screen-middle">
        <div id="middle-top">
          <Map/>
        </div>
        <div id="middle-bottom">
          middle-bottom
        </div>
      </section>
      <section class="screen-right">
        <div id="right-top">
          right-top 
        </div>
        <div id="right-middle">
          right-middle 
        </div>
        <div id="right-bottom">
          right-top
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Map from '../components/Map.vue'
export default {
 components: {
   Map
 }
}
</script>
<style  lang="less">
header {
  position: relative;
  height: 1.5rem;
  //background: url(../images/head_bg.png) no-repeat top center;
  //background-size: 100% 100%;
}
header h1 {
  font-size: 2.3rem;
  color: #120909;
  text-align: center;
  line-height: 0rem;
  display: table;
  margin: 0 auto;
}
.screen-body{
  width: 100%;
  height: 100%;
  min-width: 1024px;
  max-width: 1920px;
  display: flex;
  flex-direction:row;
  padding: 0.125rem 0.125rem 0;
  // background-color: aqua;
  
  .screen-left{
    //width: 26%;
    //height: 90%;
    flex:3;
    #left-top{
      height: 45.75%;
      border: 2px solid;
      // background-color: blueviolet;
    }
    #left-bottom{
      margin-top: 8px;
      height: 45.75%;
      border: 2px solid;
      // background-color: cadetblue;
    }
  }
  .screen-middle{
    margin-left:0.5% ;
    margin-right:0.5% ;
    //width:48%;
    //height: 90%;
    flex:5;
    // background-color: beige;

    #middle-top{
      height: 61.5%;
      border: 2px solid;
      // background-color: blueviolet;
    }
    #middle-bottom{
      margin-top: 8px;
      height: 30%;
      border: 2px solid;
      // background-color: cadetblue;
    }
  }
  .screen-right{
    //width: 26%;
    //height: 90%;
    flex:3;
    // background-color: blue;
    #right-top{
      height: 30%;
      // background-color: blueviolet;
      border: 2px solid;
    }
    #right-middle{
      margin-top: 8px;
      height: 30%;
      // background-color: blueviolet;
      border: 2px solid;
    }
    #right-bottom{
      margin-top: 8px;
      height: 30%;
      // background-color: cadetblue;
      border: 2px solid;
    }
  }

}
</style>
