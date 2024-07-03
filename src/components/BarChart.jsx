import React from 'react';

function BarData({ datas }) {
  return (
    <div 
    className='bar'
      style={{
        height: `${datas.ticketCount}%`,
        background: datas.colour,
        width: '50px'
      }} 
      key={datas.name}
    >
      {datas.name}
    </div>
  );
}

function BarChart({ data }) {
  return (
    <div className='barChart-container'>
      <div className='axis'></div>
      <h3 className='tickets'>Numbers of tickets</h3>
      <h3 className='department'>Departments</h3>
      <div className='chart'>
      {
        data.map((item, idx) => (
          <BarData key={idx} datas={item}/>
        ))
      }
      </div>
    </div>
  );
}

export default BarChart;
