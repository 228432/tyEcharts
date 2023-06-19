import * as echarts from 'echarts'
const xAxisData=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const seriesData=[[120, 132, 101, 134, 90, 230, 210],[220, 122, 191, 134, 290, 130, 310]]

const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor:'rgba(0,0,0,0.5)',
      borderColor:'rgba(0,0,0,0.3)',
      textStyle:{ color:'#fff'},
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
        // right:'5%',
        top:'0%',
        textStyle:{
            color:'rgba(255,255,255,.5)',
            fontSize:'12',
        }
    },
    grid: {
      top:'15%',
      left: '0%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
      show:true,
      borderColor:'#012f4a'
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisLabel:{
            color:'rgba(255,255,255,.6)'
        },
        axisLine:{
            lineStyle:{
                color:'rgba(255,255,255,.2)'
            }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel:{
            color:'rgba(255,255,255,.6)'
        },
        splitLine:{
            lineStyle:{
                color:'rgba(255,255,255,.1)'
            }
        },
        axisTick:{
            show:false
        }
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        lineStyle:{
            color:"#0184d5",
            width:2
        },
        areaStyle: {
            color: new echarts.graphic.
            LinearGradient(
                0,0,0,1,
                [{offset:1,color:'rgba(1,132,213,0.6)'}
                ,{offset:1,color:'rgba(1,132,213,0.1)'}]
                ,false
                ),
            shadowColor:'rgba(0,0,0,0.1)',
        },
        data: seriesData[0],
        symbol:'circle',
        symbolSize:8,
        showSymbol:false,
        smooth:true,
      },
      {
        name: 'Union Ads',
        type: 'line',
        lineStyle:{
            color:"#00d887",
            width:2
        },
        areaStyle: {
            color: new echarts.graphic.
            LinearGradient(
                0,0,0,1,
                [{offset:0,color:'rgba(0,216,135,0.4)'}
                ,{offset:1,color:'rgba(0,216,135,0.1)'}]
                ,false
                ),
            shadowColor:'rgba(0,0,0,0.1)',
        },
        symbol:'circle',
        symbolSize:8,
        showSymbol:false,
        data: seriesData[1],
        smooth:true
      },
    ]
  };

  export default option