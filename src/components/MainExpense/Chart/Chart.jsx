import data from "../../../../data.json";
import "./Chart.css";

export default function Chart() {
  return (
    <div className="chart">
      <div className="bars">
        {data.map((chart, index) => {
          return (
            <div
              key={chart.day}
              className={`bar bar-${index + 1}`}
              data-tooltip={chart.amount}
            ></div>
          );
        })}
      </div>
      <div className="days">
        {data.map((chart) => {
          return <p key={chart.day}>{chart.day}</p>;
        })}
      </div>
    </div>
  );
}
