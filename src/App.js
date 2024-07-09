import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import { home } from "./routes/routes";

import AnimatedSwitch from "./AnimatedSwitch";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/text.css";

function Display() {
	const location = useLocation();
	const isHomeActive = location.pathname === home.path;

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
