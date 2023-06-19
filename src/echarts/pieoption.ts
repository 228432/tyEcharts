const seriesData=[
  { value: 1048, name: 'Search' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union' },
  { value: 300, name: 'Video' }
]
const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor:'rgba(0,0,0,0.5)',
      borderColor:'rgba(0,0,0,0.3)',
      textStyle:{ color:'#fff'},
    },
    legend: {
        top:'5%',
      itemWidth:10,
      itemHeight:10,
      textStyle:{
        color:'rgba(255,255,255,.5)',
        fontSize:12
      }

    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: seriesData
      }
    ]
  };

  export default option