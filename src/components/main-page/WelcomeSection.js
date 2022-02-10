// Author Daniel Ricardo Sequeira Campos
// ------------------ Libraries --------------------------------
import React from 'react';
import {Link} from 'react-router-dom'
// ------------------ React Component --------------------------
const WelcomeSection = () => {
      let logo = require('../../images/autobahn-logo.png');
    return (
        <section className="min-vh-100 beggining">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 my-4">
                        <img src={logo} alt="logo" className="w-100" />

                    </div>
                    <div className="col-sm-6" >
                        <h1 className="mt-4 text-uppercase text-center">
                            Taller y Distribuidores Oficiales
                        </h1>
                        <hr />
                        <p className="mt-4 h3 text-justify">
                            Como negocio nos encargamos de ofrecerles a nuestros clientes los mejores servicios, importando los repuestos necesarios, y dandole el mejor mantenimiento del pais a los vehiculos
                        </p>
                        <hr />
                        <Link to="/contacto" className="btn draw-border">
                            Contáctanos!
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WelcomeSection;
