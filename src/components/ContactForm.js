import React from 'react';

const ContactForm = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="card mx-4 my-4 bg-dark text-white col-6 col-md-6 p-4 w-75">
                    <h1>Información de Contacto</h1>
                    <p>Teléfono <a className="link-secondary" href="tel:+50660408440">6040-8440</a></p>
                    <p>WhatsApp <a className="link-secondary" href="https://wa.me/50660408440?text=Hola!,%20Estoy%20interesado%20en%20hacer%20Negocios%20Contigo!!!">6040-8440</a></p>
                    <p>Correo <a className="link-secondary" href="mailto:ricardo@grupoautobahn.com">ricardo@grupoautobahn.com</a></p>
                    <p>Dirección de la empresa</p>
                    <section className="mb-4">
                        <a className="btn btn-primary btn-floating m-1 btn-media " href="https://www.facebook.com/danny.sequeira.961/" role="button"><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-primary btn-floating m-1 btn-media " href="https://twitter.com/rdani2005" role="button"><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-primary btn-floating m-1 btn-media " href="https://www.instagram.com/rdani2005/" role="button"><i className="bi bi-instagram"></i></a>
                    </section>
                </div>


                <form action="" className="card mx-4 my-4 col-6 col-md-6 bg-secondary p-4 rounded text-white w-75">
                    <div className="col-md-12">
                        <h1>Escríbenos!</h1>
                        <hr />
                    </div>

                    <div className="row g-3">

                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" id="phone" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="message" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="message" />
                        </div>
                        <div className="col-md-12">
                            <input type="submit" className="btn btn-success" value="Enviar Mensaje" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;
