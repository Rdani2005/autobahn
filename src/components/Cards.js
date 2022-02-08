import React from 'react';

const Cards = (props) => {
    return (
        <div className=" mh-75 card bg-dark text-white col align-self-center mx-4 my-4 ">
            <img src={props.imagen} alt="" className="card-img-top my-4 mx-auto w-75" />
            <div className="card-body">
                <h5 className="card-title text-center">
                    {props.title}
                </h5>
                <p className="card-text">
                    {props.description}
                </p>

            </div>
        </div>

    );
};

export default Cards;