import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header telNumber="+420 720 123 456"></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
