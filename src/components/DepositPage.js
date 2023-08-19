import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DepositPage() {
  const [amount, setAmount] = useState(0);
  const [checkImage, setCheckImage] = useState(null);
  const [message, setMessage] = useState('');
  const [balance, setBalance] = useState(1000); // Placeholder balance
  const [recentDeposits, setRecentDeposits] = useState([]); // Placeholder for recent deposits

  const handleDeposit = (e) => {
    e.preventDefault();
    // TODO: Call the deposit API with the amount and check image
    // Update balance or show confirmation message
    const newBalance = balance + parseFloat(amount);
    setBalance(newBalance);
    setRecentDeposits([...recentDeposits, { amount, date: new Date() }]);
    setMessage(`Deposited $${amount}`);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setCheckImage(file);
  };

  return (
    <div className="container">
      <h1>Deposit</h1>
      <div className="alert alert-info">Balance: ${balance.toFixed(2)}</div>
      <form onSubmit={handleDeposit} className="form-group">
        <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} className="form-control" />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="form-control" />
        <button type="submit" className="btn btn-success">Deposit</button>
      </form>
      {message && <div className="alert alert-primary">{message}</div>}
      <h3>Recent Deposits</h3>
      <ul>
        {recentDeposits.map((deposit, index) => (
          <li key={index}>Amount: ${deposit.amount} - Date: {deposit.date.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepositPage;
