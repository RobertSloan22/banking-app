import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  // Dummy data for account balance; replace with API call to get actual balance
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    // TODO: Call the deposit API
    // Update balance accordingly
    setBalance(balance + parseFloat(amount));
    setMessage(`Deposited $${amount}`);
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    // TODO: Call the withdrawal API
    // Update balance accordingly
    if (amount > balance) {
      setMessage('Insufficient funds');
      return;
    }
    setBalance(balance - parseFloat(amount));
    setMessage(`Withdrew $${amount}`);
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="alert alert-info">Balance: ${balance.toFixed(2)}</div>
      <form className="form-group">
        <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} className="form-control" />
        <button type="button" onClick={handleDeposit} className="btn btn-success">Deposit</button>
        <button type="button" onClick={handleWithdraw} className="btn btn-warning">Withdraw</button>
      </form>
      {message && <div className="alert alert-primary">{message}</div>}
    </div>
  );
}

export default Dashboard;
