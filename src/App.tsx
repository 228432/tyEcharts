import React from 'react';
import Bground from './components/bground';
import './App.css'
import baroption from './echarts/baroption';
import baroption1 from './echarts/baroption1'
import lineoption from './echarts/lineoptin'
import lineoption1 from './echarts/lineoption1'
import mymap from './echarts/myMap'
import pictorialBar from './echarts/pictorialBar'
import pieoption from './echarts/pieoption'
function App() {
  return (
    <div className="App" style={{ minWidth: 1200, minHeight: 700, width: '100%', height: "100%" }}>

      <div className='flexleft'>
        <div className='text'>
          <Bground option={baroption} title=' 柱形'/>
        </div>
        <div className='text'>
          <Bground option={pictorialBar} title='塔形'/>
        </div>

        <div className='text'>
          <Bground option={pieoption} title='饼形'/>
          </div>
      </div>

      <div className='flexcenter'>
        <div className='china'>
          <Bground option={mymap}/>
        </div>
      </div>

      <div className='flexright'>
        <div className='text'>
          <Bground option={baroption1} title='柱形'/>
        </div>
        <div className='text'>
          <Bground option={lineoption1} title='折线'/></div>
        <div className='text'>
          <Bground option={lineoption} title=' 折线'/>
        </div>
      </div>
    </div>
  );
}

export default App;
