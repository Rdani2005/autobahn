// Author Daniel Ricardo Sequeira Campos
// --------------------------- Libraries ------------------------------------------
import React from 'react';
// --------------------------- React Objects -------------------------------------
import MainContactSection from '../components/ContactSection/MainContactSection';

// ------------------------- React Component ---------------------------------------
const ContactPage = () => {
    // ------------------------------- Rendering -----------------------------------
    return (
        <main className="min-vh-100 bg-6">
            <div className="container">
                <div className="row justify-content-start">
                    <MainContactSection />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
