import React, { useState, useEffect } from 'react';
import './App.css';
import AlpaNavTermlist from './components/AlpaNavTermlist.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {

  return (
    <div className="app">
      <Header />
      <AlpaNavTermlist />
      <Footer />
    </div>
  );
};

export default App;
