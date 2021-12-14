
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Container/Home/Home';
import Nav from  "./Container/Nav/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      
    </div>
  );
}

export default App;
