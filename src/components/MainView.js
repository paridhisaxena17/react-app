import React, { useState } from 'react';
import List from './List';

function MainView() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="main-view">
      <nav>
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('users')}>Users</button>
      </nav>
      <div className="tab-content">
        {activeTab === 'home' && <h1>Welcome to the Home Page</h1>}
        {activeTab === 'users' && <List />}
      </div>
    </div>
  );
}

export default MainView;