import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: email,
        password: password
      });
      setMessage(response.data);
      if (response.data.includes('Token:')) {
        const token = response.data.split('Token: ')[1];
        localStorage.setItem('jwt', token);
      }
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="form-title">Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Sign In</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default Login;