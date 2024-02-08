import TotalExpense from "./TotalExpense/TotalExpense";
import Chart from "./Chart/chart";
import "./MainExpense.css";


export default function MainExpense() {
  return (
    <main>
      <section className="spending">
        <h2>Spending - Last 7 days</h2>
        <Chart/>
        <TotalExpense />
      </section>
    </main>
  );
}
