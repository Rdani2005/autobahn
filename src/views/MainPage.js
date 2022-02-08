// Author Daniel Ricardo Sequeira Campos
// ------------------ Libraries --------------------------------
import React from 'react';
// ---------------------- Components --------------------------------
import WelcomeSection from '../components/main-page/WelcomeSection';
import Vehicles from '../components/main-page/Vehicles';
import Imports from '../components/main-page/Imports';
import '../css/button.css'
// ------------------ Main View ---------------------------------------
const MainPage = () => {

  return (
    <div>
      <WelcomeSection />
      <Vehicles />
      {/* importaciones */}
      <Imports />
    </div>
  );
};

export default MainPage;
