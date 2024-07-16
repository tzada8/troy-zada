import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import ReactGA from "react-ga";

import { home } from "./routes/routes";

import AnimatedSwitch from "./AnimatedSwitch";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/text.css";

ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

function Display() {
	const location = useLocation();
	const isHomeActive = location.pathname === home.path;

	useEffect(() => {
		ReactGA.pageview(window.location.pathname);
	}, []);

	return (
		<div>
			<Navbar isMid={isHomeActive} />
			<Home isOnlyComp={isHomeActive} />
			<AnimatedSwitch location={location} />
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<Display />
		</BrowserRouter>
	);
}
