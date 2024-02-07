import './TotalExpense.css';

export default function TotalExpense() {
  return (
    <section className="totalExpense">
      <div className='currentMonth'>
        <p>Total this month</p>
        <h3>$478.33</h3>
      </div>
      <div className='lastMonth'>
        <h4>+2.4%</h4>
        <p>from last month</p>
      </div>
    </section>
  );
}
