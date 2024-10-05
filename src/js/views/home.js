import React, {useState} from "react";
import "../../styles/home.css";
import People from "../component/People";
import { Vehicles } from "../component/Vehicles";
import Planets from "../component/Planets";


export const Home = () => {
	const [isPaused, setIsPaused] = useState(false);

	const handleMouseOver = () => {
		setIsPaused(true);
	};

	const handleMouseOut = () => {
		setIsPaused(false);
	};


	return (
		<div className="body" >
			<div className=" text-center mb-5">
				<h2 className="text-h2" >Characters</h2>
				<div className="scroll-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
					<People />
				</div>
				<h2>Vehicles</h2>
				<div className=" scroll-container">
					<Vehicles />
				</div>
				<h2>Planets</h2>
				<div className="scroll-container">
					<Planets />
				</div>
			</div>
		</div>
	);
}