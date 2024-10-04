import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import People from "../component/People";

export const Home = () => (
	<div className="text-center mt-5 container">
		<div className="">
			<h2>Characters</h2>
			<People />
		</div>
	</div>
);
