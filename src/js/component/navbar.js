import React from "react";
import { Link, Navigate } from "react-router-dom";



export const Navbar = () => {

	return (
		<div className="container-fluid">
			<nav className="d-flex justify-content-between rounded-bottom shadow-lg" style={{backgroundColor:"black", }}>
				<div className="ms-4">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Logo" style={{ width: "90px" }} className="d-inline-block align-text-top" />
				</div>
				<div className=" me-4 dropstart dropdown-center">
					<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					</button>
					<ul className="dropdown-menu">
						<Link to="/people">
						<li><a className="dropdown-item" href="#">People</a></li></Link>
						<Link to="/vehicles">
						<li><a className="dropdown-item" href="#">Vehicles</a></li></Link>
						<Link to="/planets">
						<li><a className="dropdown-item" href="#">Planets</a></li></Link>
						<li><hr className="dropdown-divider"/></li>
						<Link to="/all-favorites">
						<li><a className="dropdown-item" href="#">All Favorites</a></li></Link>
					</ul>
				</div>
			</nav>
		</div>
	);
};
