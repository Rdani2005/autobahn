import React from 'react';
import Cards from '../components/Cards'
import ContactButton from '../components/ContactButton'

const VehiclesParts = () => {

    let oil = require('../images/Pentosin.jpg');
    let recognize = require('../images/belt-drive.jpg')
    let vehicle = require('../images/hengsl.jpg')

    return (
        <main>
            <section className="vh-100 bg-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 my-4">

                        </div>
                        <div className="col-sm-6  text-white my-4" >
                            <h1 className="mt-4 display-1 text-uppercase text-center">
                                Ventas de Repuestos
                            </h1>
                            <hr />
                            <h4 className="mt-4 text-justify">
                                Como empresa, nosotros nos comprometemos con la calidad y la excelencia de nuestros servicios, y es por eso que tomamos la decisión de importar repuestos, y distribuirlos a lo largo del pais
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-vh-100 bg-5" >
                <div className="container">
                    <div className="row">
                        <Cards imagen={oil} title="Mejores aceites del mercado costarricense" description="Nos compremetemos a brindar los mejores productos del mercado, por tal motivo usamos marcas reconocidas a nivel mundial" />

                        <Cards imagen={recognize} title="Mejores marcas a nivel Mundial" description="La mejor forma de garantizar el mejor servicio, está en ofrecer lo mejor que se pueda conseguir, por tal motivo trabajamos con marcas tales como Belt Drive Components, Hengsl, MAHLE, Pentosin." />

                        <Cards imagen={vehicle} title="Interes en nuestros Clientes" description="Si algo nos caracteriza como empresa, es la entrega a los clientes, la dedicación que les damos, por tal motivo siempre buscamos ofrecer un servicio de alta calidad en todo lo que realizamos." />

                    </div>
                </div>
            </section>
            <section className="vh-50 bg-dark text-white">
                <h1 className="display-1 text-center text-uppercase">
                    Contacto
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 ms-auto">
                            <h3>Contactanos por Email</h3>
                            <ContactButton mail='true' contact='ricardo@grupoautobahn.com' message='Estoy%20interesado%20en%20comprarte%20unos%20repuestos%20de%20automovil' />

                        </div>
                        <div className="col mt-5">
                            <h3>Contactanos por WhatsApp</h3>
                            <ContactButton mail='false' contact='50660408440' message='Estoy%20interesado%20en%20comprarte%20unos%20repuestos%20de520automovilz' />
                            
                        </div>
                    </div>

                </div>
            </section>
        </main>

    );
};

export default VehiclesParts;
