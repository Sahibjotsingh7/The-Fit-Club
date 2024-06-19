import React from 'react';
import Home from './Home1.js'
import Program from './Program.js'
import './App.css';
import Reasons from './Reasons.js'
import Plans from './Plans.js';
import Footer from './Footer.js';
import Testimonials from './Testimonials.js';
import Join from './Join.js';

function App() {
  return (
    <div className='App'>
       <Home/>
       <Program/>
       <Reasons/>
       <Plans/>
       <Testimonials/>
       <Join/>
       <Footer/>
     </div>
  );
}

export default App;
