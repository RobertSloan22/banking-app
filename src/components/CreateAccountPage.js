import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from './firebase'; // Import the auth object from firebase.js
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('customer'); // Add role state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Store the role in the Firestore database
        const db = getFirestore();
        setDoc(doc(db, 'users', userCredential.user.uid), { role });
        setSuccess('Account created successfully!');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={handleCreateAccount} className="form-group">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="form-control" />
        <select value={role} onChange={e => setRole(e.target.value)} className="form-control">
          <option value="customer">Customer</option>
          <option value="bank_employee">Bank Employee</option>
        </select>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <div>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default CreateAccountPage;
