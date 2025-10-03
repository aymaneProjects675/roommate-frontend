import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Roommate Finder</h1>

        {showRegister ? <Register /> : <Login />}

        <button
          onClick={() => setShowRegister(!showRegister)}
          style={{ marginTop: '20px', cursor: 'pointer' }}
        >
          {showRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>
      </header>
    </div>
  );
}

export default App;