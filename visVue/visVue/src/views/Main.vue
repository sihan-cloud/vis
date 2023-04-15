<template>
  <div class="com-page">
    <h4>This is a Main page</h4>
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
.screen-body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:row;
  // background-color: aqua;
  
  .screen-left{
    width: 26%;
    height: 90%;
    #left-top{
      height: 55%;
      border: 2px solid;
      // background-color: blueviolet;
    }
    #left-bottom{
      margin-top: 20px;
      height: 42%;
      border: 2px solid;
      // background-color: cadetblue;
    }
  }
  .screen-middle{
    margin-left:0.5% ;
    margin-right:0.5% ;
    width:48%;
    height: 90%;
    // background-color: beige;

    #middle-top{
      height: 60%;
      border: 2px solid;
      // background-color: blueviolet;
    }
    #middle-bottom{
      margin-top: 20px;
      height: 38%;
      border: 2px solid;
      // background-color: cadetblue;
    }
  }
  .screen-right{
    width: 26%;
    height: 90%;
    // background-color: blue;
    #right-top{
      height: 35%;
      // background-color: blueviolet;
      border: 2px solid;
    }
    #right-middle{
      margin-top: 8px;
      height: 35%;
      // background-color: blueviolet;
      border: 2px solid;
    }
    #right-bottom{
      margin-top: 8px;
      height: 42%;
      // background-color: cadetblue;
      border: 2px solid;
    }
  }

}
</style>
