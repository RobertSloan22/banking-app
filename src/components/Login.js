import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Import the auth object from firebase.js
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Redirect to dashboard
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form-group">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
      <div>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
