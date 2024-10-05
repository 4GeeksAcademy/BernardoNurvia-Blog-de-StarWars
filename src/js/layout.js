import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import People from "./component/People";
import { Details } from "./component/Details";
import { Vehicles } from "./component/Vehicles";
import { Planets } from "./component/Planets";
import { AllFavorites } from "./component/AllFavorites";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<div className="">
						<Navbar />
					</div>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people" element={<People />} />
						<Route path="/details" element={<Details />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/all-favorites" element={<AllFavorites />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
