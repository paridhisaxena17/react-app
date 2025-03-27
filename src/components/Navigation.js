import React from 'react';

function Navigation({ setActiveTab }) {
  return (
    <nav>
      <button onClick={() => setActiveTab('home')}>Home</button>
      <button onClick={() => setActiveTab('users')}>Users</button>
    </nav>
  );
}

export default Navigation;