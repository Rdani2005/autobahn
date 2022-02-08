// Author Daniel Ricardo Sequeira Campos
// ------------------ Libraries --------------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// ------------------ Files ------------------------------------
// Views
import MainPage from "./views/MainPage";
import Error404 from "./views/Error404";
import VehiclesParts from "./views/VehiclesParts"
import DeployingPage from "./views/DeployingPage"
// Components
import Header from "./components/Header"
import Footer from "./components/Footer"
// ------------------ React Component --------------------------
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/distribuidor" element={<VehiclesParts />} />
        <Route path="/taller" element={<DeployingPage />} />
        <Route path="/contacto" element={<DeployingPage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

