import TotalExpense from "./TotalExpense/TotalExpense";
import "./MainExpense.css";
import data from '../../../data.json';

export default function MainExpense() {
  return (
    <main>
      <section className="spending">
        <h2>Spending - Last 7 days</h2>
        <div className="chart">
          <div className="bars">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
            <div className="bar bar-5"></div>
            <div className="bar bar-6"></div>
            <div className="bar bar-7"></div>
          </div>
          <div className="days">
            {data.map((chart)=>{
              return <p key={chart.day}>{chart.day}</p>
            })}
          </div>
        </div>
        {/* mon tue wed thu fri sat sun */}
        <TotalExpense />
      </section>
    </main>
  );
}
