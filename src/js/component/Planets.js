import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css"

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => setPlanet(data.results))
      .catch(err => console.error(err));
  }, []);

  const handleDetailsClick = (uid) => {
    navigate(`/details_planet/${uid}`);
  };

  const handleFavoriteClick = (planet) => {
    if (store.planets.includes(planet.name)) {
      actions.removeFavoritePlanets(planet.name);
      actions.removeAllFavorites(planet.name);
    } else {
      actions.addFavoritePlanets(planet.name);
      actions.addAllFavorites(planet.name);
    }
  };

  return (
    <div className="d-flex mb-5">
      {planets.map((planet, index) => (
        <div key={index} className="card scroll-item golden-shadow" style={{ width: '18rem' }}>
          <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'} className="card-img-top" style={{ width: '286px', height: '286px', objectFit: 'fill' }} alt={planet.name} />
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary" onClick={() => handleDetailsClick(planet.uid)}>Details</a>
              <button className="btn btn-primary" onClick={() => handleFavoriteClick(planet)}>
                <i className={`bi ${store.planets.includes(planet.name) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planets;
