// Author Daniel Ricardo Sequeira Campos
// ----------------------- Libraries -----------------------------
import React, { Component } from 'react'
import axios from 'axios';
// ----------------------- React Object ---------------------------------
export default class ContactForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleId: '',
        message: '',
        sent: true
    }

    // -------------------- Handle Inputs ----------------------------------------------------
    handleFirstName = e => {
        this.setState({ firstName: e.target.value })
    }

    handleLastName = e => {
        this.setState({ lastName: e.target.value })
    }

    handleEmail = e => {
        this.setState({ email: e.target.value })
    }

    handlePhone = e => {
        this.setState({ phone: e.target.value })
    }

    handlevehicleId = e => {
        this.setState({ vehicleId: e.target.value })
    }


    handleMessage = e => {
        this.setState({ message: e.target.value })
    }

    // Form function Submit

    formSubmit = e => {
        e.preventDefault()
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            vehicleId: this.state.vehicleId,
            message: this.state.message

        }

        axios.post('/api/form', data)
            .then(res => { this.setState({ sent: true }, this.resetForm()) })
            .catch(() => { console.log("Message not sent") })
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

                        <input type="text" id="firstName" className="form-control bg-cristal text-white" onChange={this.handleFirstName} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control bg-cristal text-white" id="lastName" onChange={this.handleLastName} required />


                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control bg-cristal text-white" id="email" onChange={this.handleEmail} required />


                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label ">Teléfono</label>
                        <input type="tel" className="form-control bg-cristal text-white" id="phone" onChange={this.handlePhone} required />

                    </div>

                    <div className="col-md-12">
                        <label htmlFor="vehicleId" className="form-label">Placa del vehiculo</label>
                        <input type="text" id="vehicleId" className="form-control bg-cristal text-white" onChange={this.handlevehicleId} required />


                    </div>

                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control bg-cristal text-white" id="message" onChange={this.handleMessage} required />
                    </div>

                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success" value="Enviar Mensaje" required />
                    </div>
                </div>
            </form>
        )
    }
}

