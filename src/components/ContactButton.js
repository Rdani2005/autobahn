import React from 'react';
import '../css/button.css'

const ContactButton = (props) => {


    if (props.mail === 'true') {
        return (<a href={"mailto:" + props.contact + "?Subject=" + props.message} className="btn draw-border">Enviar Correo!</a>)
    } else {
        return (<a href={"https://api.whatsapp.com/send?phone=" + props.contact + "&text=" + props.message} className="btn draw-border">Enviar Mensaje!</a>)
    }


};

export default ContactButton;
