import React from "react";
import './Navbar.css';
import { Navbar } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import HomeCards from "./HomeCards";


function HomePage() {
	return (
		<div>
			<Navbar />
			<HomeCarousel />
			<HomeCards />
		</div>
	);
}

export default HomePage;
