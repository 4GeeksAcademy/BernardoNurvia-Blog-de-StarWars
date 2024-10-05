import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import "../../styles/card.css"

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {

    fetch("https://www.swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data =>setVehicle(data.results))
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="d-flex">
    {vehicle.map((vehicle, index) => (
      <div key={index} className="card scroll-item golden-shadow" style={{ width: '18rem' }}>
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt={vehicle.name} />
        <div className="card-body">
          <h5 className="card-title">{vehicle.name}</h5>
          <a href="#" className="btn btn-primary">Details</a>
        </div>
      </div>
    ))}
  </div>
  )
}
