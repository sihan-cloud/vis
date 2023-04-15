<template >
  <div class="com-container">
    <div class="com-chart">
      <!-- 地图 -->
      <div id="map-chart"></div>
        <!-- 选择现存量和增加量-->
        <div id="switch">
          <el-switch
           v-model=value
          style="--el-switch-on-color: #b6c9ad; --el-switch-off-color: #6f9057"
          active-text="现有量"
          inactive-text="增加量"
          size="large"
          />  
        </div>
        <div id="slider-box">
          <div id="slider-title">{{year}}年份</div>
          <el-slider v-model=year :min=2013 :max=2023  :step="1" show-stops />
        </div>
    </div>
  </div>
</template>
<script>

import * as echarts from 'echarts';
export default {
  
  mounted() {
    // this.getDate();
    this.initChart();
  },
  data() {
    return {
      value:null,
      year:2013,
      mapName:"全国历年数据一览",
      mapData:null,
      provinceData:[{
        name:'四川省',value:100},{
        name:'湖北省',value:50},{
        name:'河南省',value:200
        }
      ]
    }
  },
  watch:{
    "year"(newVal){
      console.log(`当前:${newVal}`);
    },
    "value"(nowVal){
      console.log(`当前:${nowVal}`);
    }
  },
  methods: {
    async getDate(){
       
    },
    async initChart(){
     await this.$axios.get('/map/China.json').then((res)=>{
        this.mapData=res.data;
        console.log(this.mapData)
    })
      var myChart = echarts.init(document.getElementById("map-chart"));
    echarts.registerMap('china', this.mapData);
    const initOption={
      title:{
        text:this.mapName,
        x:'center',
        textStyle:{
          fontSize:24
        }
      },
      tooltip:{
        trigger:'item',
        formatter:function(params){
          var toolTipHtml='123'
          return toolTipHtml;
        }
      },
      
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap:{
        min:0,
        max:300,
        show:true,
        left:'20',
        bottom:'20',
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        },
        text:['High', 'Low'],
      },
      series:[{
        name:this.mapName,
        type:'map',
        map:'china',
        label:{
          show:false,
        },
        center:[103.823557, 36.058039],
        roam:true, //允许缩放和拖动
        zoom:1.7,
        data:this.provinceData,
      }]
    }
    myChart.setOption(initOption);
    window.addEventListener("resize", function() {
            myChart.resize();//图表比例自适应
        });
    },
}
}
</script>
<style lang="less" scoped>
  #map-chart{
    width: 100%;
    height: 100%;
  }
  #switch{
    float: right;
    position: relative;;
    bottom:50%;
    right: 5%;
  }
  #slider-box{
    float: left;
    position: relative;
    bottom: 50px;
    left: 20%;
    width: 60%;
    display: flex;
    flex-direction: row;

   
  }
   #slider-title{
    position: relative;
    bottom: 5px;
    width: 120px;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    font-weight: 800;
    margin-right:5px ;
  }
  
</style>