// ------------------ Libraries --------------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// ------------------ Files ------------------------------------
// Views
import MainPage from "./views/MainPage";
import Error404 from "./views/Error404";
// Components
import Header from "./components/Header"
// ------------------ React Component --------------------------
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/distribuidor" element={<MainPage />} />
        <Route path="/taller" element={<MainPage />} />
        <Route path="/contacto" element={<MainPage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
