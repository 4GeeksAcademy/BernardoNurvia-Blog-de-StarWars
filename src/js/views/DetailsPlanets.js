import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import "../../styles/details.css";

const DetailsPlanets = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlanet(data.result.properties);
                setDescription(data.result.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="body">
            <div className="body-info">
                <div className="header justify-content-around">
                    <div className="img-details">
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                            onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}  
                            className="card-img-top img-fluid rounded-start" 
                            alt={planet ? planet.name : 'Planet Image'} 
                        />
                    </div>
                    <div className="text-details">
                        {planet ? (
                            <>
                                <h1>{planet.name}</h1>
                                <h3>{description}</h3>
                            </>
                        ) : (
                            <div className="spinner-border text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    {planet ? (
                        <div className="footer-details">
                            <p>Climate:<br /> {planet.climate}</p>
                            <p>Diameter:<br /> {planet.diameter}</p>
                            <p>Gravity:<br /> {planet.gravity}</p>
                            <p>Orbital Period:<br /> {planet.orbital_period}</p>
                            <p>Population:<br /> {planet.population}</p>
                            <p>Rotation Period:<br /> {planet.rotation_period}</p>
                            <p>Surface Water:<br /> {planet.surface_water}</p>
                            <p>Terrain:<br /> {planet.terrain}</p>
                        </div>
                    ) : (
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                </div>
                <div>
                    <Link to="/">
                        <button className="button btn btn-warning">Go back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DetailsPlanets;
