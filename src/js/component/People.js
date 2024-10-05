import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../store/appContext";
import "../../styles/card.css"


const People = () => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);
  const [favoritesButton, setFavoritesButton] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => setPeople(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="d-flex">
      {people.map((person, index) => (
        <div key={index} className="card scroll-item golden-shadow" style={{ width: '18rem' }}>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt={person.name} />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
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

export default People;
