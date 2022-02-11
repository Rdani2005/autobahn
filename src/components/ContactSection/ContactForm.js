// Author Daniel Ricardo Sequeira Campos
// ----------------------- Libraries -----------------------------
import React, { Component } from 'react'
import emailjs from "emailjs-com"
// ----------------------- React Object ---------------------------------
export default class ContactForm extends Component {

    // Form function Submit
    formSubmit = e => {
        e.preventDefault()
        emailjs.sendForm(
            'Autobahn-prueba',
            'template_izfkr1h',
            e.target,
            "user_D92phdjjBDo78vfRkuCEJ"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));

    }

    // -------------------- Rendering ---------------------------------------
    render() {

        return (
            <form action="" onSubmit={this.formSubmit} className="card mx-4 my-4 col-6 col-md-6 bg-cristal-dark p-4 rounded text-white w-75">
                <div className="col-md-12">
                    <h1>Escríbenos!</h1>
                    <hr />
                </div>

                <div className="row g-3">

                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">Nombre</label>

                        <input type="text" name="firstName" id="firstName" className="form-control bg-cristal text-white" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control bg-cristal text-white" name="lastName" id="lastName" required />


                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control bg-cristal text-white" name="email" id="email" required />


                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label ">Teléfono</label>
                        <input type="tel" className="form-control bg-cristal text-white" name="phone" id="phone" required />

                    </div>

                    <div className="col-md-12">
                        <label htmlFor="vehicleId" className="form-label">Placa del vehiculo</label>
                        <input type="text" name="vehicleId" id="vehicleId" className="form-control bg-cristal text-white" required />


                    </div>

                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control bg-cristal text-white" name="message" id="message" required />
                    </div>

                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success" value="Enviar Mensaje" required />
                    </div>
                </div>
            </form>
        )
    }
}