import TotalExpense from "./TotalExpense/TotalExpense";
import './MainExpense.css'
export default function MainExpense() {
  return (
    <main>
    <section>
      <h2>Spending - Last 7 days</h2>
      mon tue wed thu fri sat sun
      <TotalExpense />
      </section>
    </main>
  );
}
