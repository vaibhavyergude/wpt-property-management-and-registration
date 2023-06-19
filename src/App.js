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
import PropertyIndividualPage from "./components/PropertyIndividualPage/PropertyIndividualPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import BookVisit from "./components/BookVisit/BookVisit";
import Aboutus from "./components/Aboutus/Aboutus";

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
                    <Route path="/property-individual-page" element={<PropertyIndividualPage />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Signup />}/>
                    <Route path="/book-visit" element={<BookVisit />}/>
                    <Route path="/aboutus" element={<Aboutus />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
