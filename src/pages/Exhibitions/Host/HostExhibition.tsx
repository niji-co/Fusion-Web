// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './style.css';

function HostExhbition() {
  return (
    <div className="host-exhibition">
      <h1>Host exhibition</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default HostExhbition;
