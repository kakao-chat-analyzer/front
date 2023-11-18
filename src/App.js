import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./index.css"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { getResizeEventListener } from "./services/responsiveFrame";


const App = () => {
  useEffect(() => {
    const FixRatio = getResizeEventListener(1920, 1080);
    // const FixRatio = getResizeEventListener(2560, 1440);
    window.addEventListener('resize', FixRatio);
    FixRatio();

    return () => {
      window.removeEventListener('resize', FixRatio);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );

}
  
  export default App;