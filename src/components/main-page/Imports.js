// Author Daniel Ricardo Sequeira Campos
// ------------------ Libraries --------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// ------------------ CSS ------------------------------------
import '../../css/button.css'
// ------------------ React Component --------------------------
const Imports = () => {
    return (
        <section className="vh-100 w-100 third">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6 my-4">
                        <h1 className="mt-4 text-uppercase text-center display-1">
                            Importaciones
                        </h1>
                        <hr />
                        <p className="mt-4 text-justify display-6">Actualmente Nos encargamos de importar nuestros repuestos de grandes marcas comerciales para el mejor mantenimiento a nuestros vehiculos, y asi darle una mejor experiencia al cliente.</p>
                        <Link to="/distribuidor" className="btn draw-border">
                            Ve nuestras importaciones!
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Imports;
