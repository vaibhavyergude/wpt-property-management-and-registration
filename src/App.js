// import './App.css';
// import Navbar from "./components/Navbar";
// import HomeCarousel from "./components/HomeCarousel";
// import HomeCards from "./components/HomeCards";
// import HomePropertyCards from "./components/HomePropertyCards";
// import Footer from "./components/Footer";
// import PropertyListing from "./components/Propertypage/PropertyListing";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import PropertyListing from "./components/PropertyListing/PropertyListing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			{/* <Navbar /> */}
			{/* <HomeCarousel /> */}
			{/* <HomeCards /> */}
			{/* <HomePropertyCards/> */}
			{/* <Footer /> */}

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
					<Route path="/property-listing" element={<PropertyListing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
