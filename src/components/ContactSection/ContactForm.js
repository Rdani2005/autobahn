// Author Daniel Ricardo Sequeira Campos
// ----------------------- Libraries -----------------------------
import React from 'react'
// ----------------------- React Object ---------------------------------
const ContactForm = () => {
    // -------------------- Rendering ---------------------------------------
    return (
        <form action="" className="card mx-4 my-4 col-6 col-md-6 bg-cristal-dark p-4 rounded text-white w-75">
            <div className="col-md-12">
                <h1>Escríbenos!</h1>
                <hr />
            </div>

            <div className="row g-3">

                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control bg-cristal text-white" id="name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control bg-cristal text-white" id="lastName" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control bg-cristal text-white" id="email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label ">Teléfono</label>
                    <input type="tel" className="form-control bg-cristal text-white" id="phone" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea className="form-control bg-cristal text-white" id="message" />
                </div>
                <div className="col-md-12">
                    <input type="submit" className="btn btn-success" value="Enviar Mensaje" />
                </div>
            </div>
        </form>
    )
}

export default ContactForm