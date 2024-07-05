import React, { useMemo } from "react";

function BarData({ data, len }) {
  return (
    <div
      className="bar"
      style={{
        height: `${data.ticketCount}%`,
        background: data.colour,
        width: `${100 / len}%`,
      }}
      key={data.name}
    >
      {data.name}
    </div>
  );
}

function BarChart({ data }) {
  const lengthList = useMemo(() => data.length, [data]);
  return (
    <div className="barChart-container">
      <div className="axis"></div>
      <h3 className="tickets">Numbers of tickets</h3>
      <h3 className="department">Departments</h3>
      <div className="chart">
        {data.map((item, idx) => (
          <BarData key={idx} data={item} len={lengthList} />
        ))}
      </div>
    </div>
  );
}

export default BarChart;
