// Author Daniel Ricardo Sequeira Campos
// --------------------- Libraries ----------------------------------------
import React from 'react'
// --------------------- React Objects -----------------------------------
import ContactForm from './ContactForm'
import ContactZone from './ContactZone'
const MainContactSection = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <ContactZone></ContactZone>
                <ContactForm></ContactForm>
            </div>
        </div>
    )
}

export default MainContactSection