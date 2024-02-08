import data from "../../../../data.json";
import './Chart.css';

export default function Chart() {
  return (
    <div className="chart">
      <div className="bars">
        <div className="bar bar-1" data-tooltip={data[0].amount}></div>
        <div className="bar bar-2" data-tooltip={data[1].amount}></div>
        <div className="bar bar-3"></div>
        <div className="bar bar-4"></div>
        <div className="bar bar-5"></div>
        <div className="bar bar-6"></div>
        <div className="bar bar-7"></div>
      </div>
      <div className="days">
        {data.map((chart) => {
          return <p key={chart.day}>{chart.day}</p>;
        })}
      </div>
    </div>
  );
}
