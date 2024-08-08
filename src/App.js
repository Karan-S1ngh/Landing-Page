import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Topsection from './components/Topsection';
import Instruction from './components/Instruction';
import Testimonial from './components/Testimonial';
import Query from './components/Query';
import Partner from './components/Partner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Topsection/>
      <Instruction/>
      <Testimonial/>
      <Query/>
      <Partner/>
      <Footer/>
    </div>
  );
}

export default App;
