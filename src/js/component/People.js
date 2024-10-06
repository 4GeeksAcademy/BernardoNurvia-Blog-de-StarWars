import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css"

const People = () => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => setPeople(data.results))
      .catch(err => console.error(err));
  }, []);

  const handleDetailsClick = (uid) => {
    navigate(`/details_character/${uid}`);
  };

  const handleFavoriteClick = (person) => {
    if (store.peoples.includes(person.name)) {
      actions.removeFavoritePeoples(person.name);
      actions.removeAllFavorites(person.name);
    } else {
      actions.addFavoritePeoples(person.name);
      actions.addAllFavorites(person.name);
    }
  };

  return (
    <div className="d-flex">
      {people.map((person, index) => (
        <div key={index} className="card scroll-item golden-shadow" style={{ width: '18rem' }}>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt={person.name} />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary" onClick={() => handleDetailsClick(person.uid)}>Details</a>
              <button className="btn btn-primary" onClick={() => handleFavoriteClick(person)}>
                <i className={`bi ${store.peoples.includes(person.name) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
