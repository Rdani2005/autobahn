// Author Daniel Ricardo Sequeira Campos
// ------------------ Libraries --------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// ------------------ CSS ------------------------------------
import '../../css/button.css'
// ------------------ React Component --------------------------
const Vehicles = () => {
    return (
        <section className="vh-100 w-100 second">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 my-4">
                        <h1 className="mt-4 text-uppercase text-center display-1">
                            Nuestras Marcas
                        </h1>
                        <hr />
                        <p className="mt-4 text-justify h3">Actualmente trabajamos con vehiculos premium, ofreciendoles el mejor cuidado. Las marcas con las que trabajamos son BMW, Audi, y Mercedez Benz</p>
                        <Link to="/taller" className="btn draw-border">
                            Ve mas en el Taller!
                        </Link>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Vehicles;
