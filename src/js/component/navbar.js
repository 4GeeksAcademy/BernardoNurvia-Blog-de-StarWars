import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleRemoveFavorite = (category, item) => {
		if (category === 'people') {
			actions.removeFavoritePeoples(item);
		} else if (category === 'vehicles') {
			actions.removeFavoriteVehicles(item);
		} else if (category === 'planets') {
			actions.removeFavoritePlanets(item);
		}
		actions.removeAllFavorites(item);
	};

	return (
		<div className="">
			<nav className="d-flex text-center justify-content-between shadow-lg fixed-top" style={{ backgroundColor: '#000000d9' }}>
				<div className="ms-4">
					<Link to="/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Logo" style={{ width: "90px" }} className="d-inline-block align-text-top " />
					</Link>
				</div>
				<div className="me-4 m-auto dropstart dropdown-center">
					<button type="button" className="btn btn-warning dropdown-toggle mt-auto" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						<li>
							<a className="dropdown-item" href="#">People</a>
							<ul>
								{store.peoples.map((favorite, index) => (
									<li key={index} className="d-flex justify-content-between p-2">
										<a className="dropdown-item" href="#">{favorite}</a>
										<button className="btn btn-danger btn-sm" onClick={() => handleRemoveFavorite('people', favorite)}>
											<i className="bi bi-trash"></i>
										</button>
									</li>
								))}
							</ul>
						</li>
						<li>
							<a className="dropdown-item" href="#">Vehicles</a>
							<ul>
								{store.vehicles.map((favorite, index) => (
									<li key={index} className="d-flex justify-content-between p-2">
										<a className="dropdown-item" href="#">{favorite}</a>
										<button className="btn btn-danger btn-sm" onClick={() => handleRemoveFavorite('vehicles', favorite)}>
											<i className="bi bi-trash"></i>
										</button>
									</li>
								))}
							</ul>
						</li>
						<li>
							<a className="dropdown-item" href="#">Planets</a>
							<ul>
								{store.planets.map((favorite, index) => (
									<li key={index} className="d-flex justify-content-between p-2">
										<a className="dropdown-item" href="#">{favorite}</a>
										<button className="btn btn-danger btn-sm" onClick={() => handleRemoveFavorite('planets', favorite)}>
											<i className="bi bi-trash"></i>
										</button>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
