import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../store/appContext";
import  "../../styles/card.css"

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [Planets, setPlanet] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/Planets")
      .then(res => res.json())
      .then(data => setPlanet(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="d-flex mb-5">
      {Planets.map((planet, index) => (
        <div key={index} className="card scroll-item golden-shadow" style={{ width: '18rem' }}>
          <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={(e) => e.target.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'} className="card-img-top" alt={planet.name} />
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary">Details</a>

              <button className="btn btn-primary"><i className="bi bi-heart"></i></button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planets;
