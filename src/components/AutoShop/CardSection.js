// Author Daniel Ricardo Sequeira Campos
// ----------------------- Libraries -----------------------------
import React from 'react'
// ----------------------- React Object ---------------------------------
const CardSection = (props) => {

    if (props.type === "1") {

        return (
            <section className="min-vh-100 d-flex align-items-center justify-content-center ">
                <div className="container card text-white bg-cristal h-50 w-75">
                    <div className="row">
                        <div className="col-sm-6 my-4 ">
                            <img src={props.imagen} alt="mecanico-trabajando" className="w-100" />
                        </div>
                        <div className="col-sm-6 my-4">
                            <h1>{props.title}</h1>
                            <hr />
                            <p>
                                {props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )

    } else if (props.type === "2") {
        return (
            <section className="min-vh-100 d-flex align-items-center justify-content-center ">
                <div className="container card text-white bg-cristal h-75 w-75 p-4">
                    <div className="row">
                        <div className="col-sm-6 my-4">
                            <h1>{props.title}</h1>
                            <hr />
                            <p>
                                {props.description}
                            </p>
                        </div>
                        <div className="col-sm-6 my-4">
                            <img src={props.imagen} alt="mecanico-trabajando" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default CardSection