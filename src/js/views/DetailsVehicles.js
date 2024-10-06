import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

import "../../styles/details.css";

const DetailsVehicles = props => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(res => res.json())
            .then(data => {
                setVehicle(data.result.properties);
                setDescription(data.result.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const index = `${id}`;

    return (
        <div className="body">
            <div className="body-info">
                <div className="header justify-content-around">
                    <div className="img-details ">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top img-fluid rounded-start" alt="`${vehicle.name}`" />
                    </div>
                    <div className="text-details">
                        {vehicle ? (
                            <>
                                <h1>{vehicle.name}</h1>
                                <h3>{description}</h3>
                            </>
                        ) : (
                            <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        )}
                    </div>
                </div>

                <div >
                    {vehicle ? (
                        <div className="footer-details">
                            <p>Cargo Capacity:<br /> {vehicle.cargo_capacity}</p>
                            <p>Consumables:<br />  {vehicle.consumables}</p>
                            <p>Passengers:<br />  {vehicle.passengers}</p>
                            <p>Created:<br />  {vehicle.created}</p>
                            <p>Crew:<br />  {vehicle.crew}</p>
                            <p>Model:<br />  {vehicle.model}</p>
                            <p>Manufacturer:<br />  {vehicle.manufacturer}</p>
                        </div>
                    ) : (
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}
                </div>
                <div className=" ">
                    <Link to="/">
                        <button className="button btn btn-warning">Go back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default DetailsVehicles;
