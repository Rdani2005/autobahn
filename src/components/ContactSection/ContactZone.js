// Author Daniel Ricardo Sequeira Campos
// --------------------- Libraries ----------------------------------------
import React from 'react'
// --------------------- CSS --------------------------------
import 'bootstrap-icons/font/bootstrap-icons.css'
// -------------------- React Object ------------------------------------------------
const ContactZone = () => {
    return (
        <div className="card mx-4 my-4 bg-cristal-dark text-white col-6 col-md-6 p-4 w-75 curved">
            <h1>Información de Contacto</h1>
            <hr />
            <p><i className="bi bi-phone"></i> <a className="link-primary" href="tel:+50622153559">+(506) 2215-3559</a></p>
            <p><i className="bi bi-whatsapp"></i> <a className="link-primary" href="https://wa.me/50660408440?text=Hola!,%20Estoy%20interesado%20en%20hacer%20Negocios%20Contigo!!!">6040-8440</a></p>
            <p><i class="bi bi-envelope-check"></i> <a className="link-primary" href="mailto:ricardo@grupoautobahn.com">ricardo@grupoautobahn.com</a></p>
            <p>Dirección de la empresa</p>
            <section className="mb-4">
                <a className="btn btn-primary btn-floating m-1 btn-media " href="https://www.facebook.com/danny.sequeira.961/" role="button"><i className="bi bi-facebook"></i></a>
                <a className="btn btn-primary btn-floating m-1 btn-media " href="https://twitter.com/rdani2005" role="button"><i className="bi bi-twitter"></i></a>
                <a className="btn btn-primary btn-floating m-1 btn-media " href="https://www.instagram.com/rdani2005/" role="button"><i className="bi bi-instagram"></i></a>
            </section>
        </div>
    )
}

export default ContactZone