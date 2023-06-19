let seriesData=[10, 52, 200, 334, 390, 330, 220]
let xAxisData=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const option={
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(0,0,0,0.5)',
        borderColor:'rgba(0,0,0,0.3)',
        textStyle:{ color:'#fff'},
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '4%',
        top:'10px',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          axisTick: {
            alignWithLabel: true,
            show:false,
          },
          //X轴刻度
          axisLabel:{
            color:'rgba(255,255,255,.6)',
            fontSize:'12'
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          //Y轴刻度
          axisLabel:{
            color:'rgba(255,255,255,.6)',
            fontSize:'12',
          },
          axisLine:{
            lineStyle:{
                color:'rgba(255,255,255,.1)'
            }
          },
          //Y轴分割线
          splitLine:{
            lineStyle:{
                color:'rgba(255,255,255,.1)'
            }
          }
        }
      ],
      series: [
        {
          name: '数据',
          type: 'bar',
          //bar 柱形宽度
          barWidth: '35%',
          itemStyle:{
            barBorderRadius:5
          },
          data: seriesData
        }
      ]
}

export default option