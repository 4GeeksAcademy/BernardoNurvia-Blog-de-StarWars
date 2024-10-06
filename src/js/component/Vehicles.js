import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';
import "../../styles/card.css"

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data => setVehicles(data.results))
      .catch(err => console.error(err));
  }, []);

  const handleDetailsClick = (uid) => {
    navigate(`/details_vehicle/${uid}`);
  };

  const handleFavoriteClick = (vehicle) => {
    if (store.vehicles.includes(vehicle.name)) {
      actions.removeFavoriteVehicles(vehicle.name);
      actions.removeAllFavorites(vehicle.name);
    } else {
      actions.addFavoriteVehicles(vehicle.name);
      actions.addAllFavorites(vehicle.name);
    }
  };

  return (
    <div className="d-flex">
      {vehicles.map((vehicle, index) => (
        <div key={index} className="card scroll-item golden-shadow" style={{ width: '18rem' }}>
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt={vehicle.name} />
          <div className="card-body">
            <h5 className="card-title">{vehicle.name}</h5>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary" onClick={() => handleDetailsClick(vehicle.uid)}>Details</a>
              <button className="btn btn-primary" onClick={() => handleFavoriteClick(vehicle)}>
                <i className={`bi ${store.vehicles.includes(vehicle.name) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
