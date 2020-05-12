import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Sidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
