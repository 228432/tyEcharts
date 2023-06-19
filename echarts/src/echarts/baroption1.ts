const barColor=['#1089E7','#F57474','#56D013','#F8B448','#8B78F6','#8B42F6']
const yAxisData=[189, 733, 294, 102, 834, 631]
const seriesData=[[18, 73, 29, 10, 83, 63],[100,100,100,100,100,100 ]]
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
        top: '6%',
        left: '0%',
        right:'0%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: {
        //隐藏X轴
        show:false
      },
      yAxis: [{
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
        inverse:true,
        axisLine:{
            show:false
        },
        //刻度线
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'#fff',
            fontSize:12
        }
      },{
        data:yAxisData,
          //刻度线
          axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            color:'#fff'
        }

      }
    ],
      series: [
        {
          name: 't',
          type: 'bar',
          data: seriesData[0],
          yAxisIndex:0,
          //柱宽
          barWidth:10,
          //柱子间距
          barCategoryGap:50,
          itemStyle:{
            barBorderRadius:20,
            color:function(data:any){
                return barColor[data.dataIndex]
                
            }
          },
          //显示柱子内文字
          label:{
            show:true,
            position:'inside',
            formatter:'{c}%',
            fontSize:10,
            color:'#ffff99'
          }
        },
        {
          name: 'k',
          type: 'bar',
          data: seriesData[1],
          yAxisIndex:1,
             //柱宽
          barWidth:12,
             //柱子间距
          barCategoryGap:50,
          itemStyle:{
            color:'none',
            borderColor:'#00C1DE',
            borderWidth:2,
            barBorderRadius:15
          }
        }
      ]
}

export default option