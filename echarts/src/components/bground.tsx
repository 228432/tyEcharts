import React, { useEffect, useRef } from 'react'
import './style.less'
import * as echarts from 'echarts'



export default function Bground(props:any) {
    const {option,title}=props
    const refS:any=useRef(null)
    useEffect(()=>{
        let myChart = echarts.init(refS.current);
          option && myChart.setOption(option);
          window.addEventListener('resize',()=>{
                myChart.resize()
          },)
    },[refS,option])
  return (
    <div className='bg' >
       {title ? <h3 style={{margin:8,textAlign:'center',color:'#fff8'}}>{title}</h3>:''}
        <div style={{width:'100%',height:'80%'}} ref={refS}>
        </div>
        <div className='bottom'/>
    </div>
  )
}
