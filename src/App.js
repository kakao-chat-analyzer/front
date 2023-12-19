import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./index.css"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Detail from './pages/Detail'
import Introduction from './pages/Introduction';
import Analysis from './pages/Analysis';
import Howto from './pages/Howto';
import { getResizeEventListener } from "./services/responsiveFrame";
import Favicon from 'react-favicon';



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
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} /> 
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/howto" element={<Howto />} />
      </Routes>
      <Favicon url="./images/image_1.png" />
    </Router>
  );

}
  
  export default App;