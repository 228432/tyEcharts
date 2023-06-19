const xAxisData=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const seriesData=[[120, 132, 101, 134, 90, 230, 210],[220, 182, 191, 234, 290, 330, 310]]
const option={
      tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(0,0,0,0.5)',
        borderColor:'rgba(0,0,0,0.3)',
        textStyle:{ color:'#fff'},
      },
      legend: {
        //图例组件文字颜色
        textStyle:{color:'#4c9bfd'},
        //图例组件位置 
        right:'10%'
      },
      grid: {
        left: '0%',
        right: '2%',
        top:'20%',
        bottom: '3%',
        containLabel: true,
        show:true,
        borderColor:'#012f4a'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisLabel:{
            color:'#4c9bfd'
        },
        axisTick:{
          show:false,
          
        },
        axisLine:{
          lineStyle:{
            color:'rgba(255,255,255,.1)'
        }
        }
      },
      yAxis: {
        type: 'value',
        splitLine:{
            lineStyle:{
                color:'#012f4a'
            }
        },
        axisTick:{
            show:false,
            lineStyle:{
                color:'#012f4a'
            }
        },
        axisLabel:{
            color:'#4c9bfd'
        }
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          // stack: 'Total',
          data: seriesData[0],
          smooth:true
        },
        {
          name: 'Union Ads',
          type: 'line',
          // stack: 'Total',
          data:  seriesData[1],
          smooth:true
        },
       
      ]
}

export default option