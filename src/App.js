import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Landing from './components/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
