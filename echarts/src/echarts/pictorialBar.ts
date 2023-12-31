import * as echarts from 'echarts'
var xAxisData = ['09-08', '09-09', '09-10'];
var seriesData = [850, 600, 800];
const option = {
    // backgroundColor: "rgba(2, 12, 44, 1)", //背景色
    tooltip: {
        trigger: "axis",
        backgroundColor:'rgba(0,0,0,0.5)',
        borderColor:'rgba(0,0,0,0.3)',
        textStyle:{ color:'#fff'},
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params:any) {
           return (
              params[0].name +
              "<br>" +
              "订单数 ：" +
              params[0].value
            );
        }
    },
    grid: {
        left: "0%",
        right: "4%",
        bottom: "3%",
        top: "10%",
        containLabel: true
    },
    xAxis: {
        data: xAxisData,
        triggerEvent: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            textStyle: {
                fontSize: 12,
                color: "rgba(102, 105, 126, 1)",
            }
        }
    },
    yAxis: {
        triggerEvent: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "rgba(102, 105, 126, 1)",
                fontSize: 12
            }
        }
    },
    series: [{
            name: "订单数",
            barMinHeight: 10,
            type: "pictorialBar",
            barCategoryGap: "60%",
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(83, 139, 241, 1)"
                        },
                        {
                            offset: 0.5,
                            color: "rgba(83, 139, 241, 0.8)"
                        },
                        {
                            offset: 1,
                            color: "rgba(83, 139, 241, 0.3)"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "rgba(83, 139, 241, 1)",
                        fontSize:14
                    }
                }
            },
            data: seriesData,
            z: 10
        },
    ]
}

export default option