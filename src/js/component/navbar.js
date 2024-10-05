import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../../styles/home.css";


export const Navbar = () => {

	return (
		<div className="">
			<nav className="d-flex text-center justify-content-between shadow-lg fixed-top" style={{backgroundColor: '#000000d9'}}>
				<div className="ms-4">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Logo" style={{ width: "90px" }} className="d-inline-block align-text-top " />
				</div>
				<div className=" me-4 m-auto dropstart dropdown-center">
					<button type="button" className="btn btn-warning dropdown-toggle mt-auto" data-bs-toggle="dropdown" aria-expanded="false">
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
