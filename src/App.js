import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';


import React, {useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </Router>
  );
}

export default App;
