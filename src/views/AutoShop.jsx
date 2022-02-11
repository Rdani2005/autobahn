// Author Daniel Ricardo Sequeira Campos
// --------------------------- Libraries ------------------------------------------
import React from 'react'
// --------------------------- React Objects -------------------------------------
import CardSection from '../components/AutoShop/CardSection'
// ------------------------- React Component ---------------------------------------
const AutoShop = () => {
    // ------------------ Variables and Objects ---------------------------------------
    let mec1 = require('../images/Mecanico1.jpg')
    let mec2 = require('../images/plataforma.jpg')
    let mec3 = require('../images/mecanico3.jpg')
    // ------------------ Rendering --------------------------------
    return (
        <main className="beggining">
            <CardSection
                type="1"
                imagen={mec1}
                title="Alta Entrega hacia nuestros clientes"
                description="Como negocio, confiamos en que nuestros clientes merecen tener lo mejor de nosotros, por tal motivo, siempre buscamos ofrecer servicios de alta calidad hacia nuestros clientes"
            />

            <CardSection
                type="2"
                imagen={mec2}
                title="Tecnología de alta gama"
                description="Parte de un buen servicio, está el hecho de utilizar las mejores herramientas en nuestro dia a dia, y de esta forma llegar a brindar el excelente servicio que siempre hemos brindado"
            />

            <CardSection
                type="1"
                imagen={mec3}
                title="Alta Recomendación por parte de nuestros Clientes"
                description="Si algo nos caracteriza como empresa, es la alta fiabilidad de nuestros servicios, y no solamente dicho por nosotros, sino por todos nuestros clientes satisfechos de nuestro trabajo"
            />

        </main>
    )
}

export default AutoShop