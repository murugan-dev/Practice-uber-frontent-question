import { useState } from "react";
import BarChart from "./BarChart";
import Bar from "../constant/Bar";
import "../css/Barchart.css"

function BarChartToggle() {
    const [show, setShow] = useState(true)

  return (
    <div className="container">
      <button onClick={() => setShow((prev) => !prev)} className="btn">Toggle Chart</button>
      {show ? <BarChart data={Bar} /> : null}
    </div>
  );
}

export default BarChartToggle;
