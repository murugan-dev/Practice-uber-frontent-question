import React, { useMemo } from "react";
import {motion} from "framer-motion"

function BarData({ data, highestCount }) {
  return (
    <motion.div
      className="bar"
      initial = {{ height: 0}}
      animate = {{ height: `${highestCount}%` }}
      exit = {{ height:  0}}
      style={{
        
        background: data.colour,

      }}
      key={data.name}
    >
      <pre className="category">
      

      {data.name} :  {data.ticketCount}
      </pre>
    </motion.div>
  );
}

function BarChart({ data }) {
  const lengthList = useMemo(() => data.length, [data]);
  const maxTicketCount = useMemo(()=>{
    return Math.max(...data.map((item)=>item.ticketCount))
  },[data])
  console.log(maxTicketCount)
  return (
    <motion.div className="barChart-container"
      initial = {{opacity : 0}}
      animate = {{ opacity: 1}}
      exit={{opacity:0}}
      transition={{duration: 0.5}}
    >
      <div className="axis"></div>
      <h3 className="tickets">Numbers of tickets</h3>
      <h3 className="department">Departments</h3>
      <div className="chart">
        {data.map((item, idx) => (
          <BarData key={idx} data={item} len={lengthList} highestCount={(item.ticketCount / maxTicketCount)*100} />
        ))}
      </div>
    </motion.div>
  );
}

export default BarChart;
