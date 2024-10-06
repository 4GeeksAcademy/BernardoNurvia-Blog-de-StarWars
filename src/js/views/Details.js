import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import "../../styles/details.css";

const Details = props => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(res => res.json())
            .then(data => {
                setPerson(data.result.properties);
                setDescription(data.result.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const index = `${id}`;

    return (
        <div className="body-info">
            <div className="header">
                <div className="img-details ">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top img-fluid rounded-start" alt="`${person.name}`" />
                </div>
                <div className="text-details">
                    {person ? (
                        <>
                            <h1>{person.name}</h1>
                            <h2>{description}</h2>
                        </>
                    ) : (
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}
                </div>
            </div>

            <div >
                {person ? (
                    <div className="footer-details">
                        <p>Height:<br/> {person.height}</p>
                        <p>Mass:<br/>  {person.mass}</p>
                        <p>Hair Color:<br/>  {person.hair_color}</p>
                        <p>Skin Color:<br/>  {person.skin_color}</p>
                        <p>Eye Color:<br/>  {person.eye_color}</p>
                        <p>Birth Year:<br/>  {person.birth_year}</p>
                        <p>Gender:<br/>  {person.gender}</p>
                    </div>
                ) : (
                    <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
            <div className="">
                <Link to="/">
                    <button className="btn btn-warning button">Go back</button>
                </Link>
            </div>
        </div>
    );
}

Details.propTypes = {}

export default Details;
