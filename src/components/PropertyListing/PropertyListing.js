import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import NavbarOther from "../NavbarOther/NavbarOther";
import PropertyIndividualPage from "../PropertyIndividualPage/PropertyIndividualPage";
// import Footer from "../Footer.js";

function PropertyListing() {

    const [list, setList] = useState([]);

    useEffect(() => {
      getAllPropertyListing();
    }, [])
    
    const getAllPropertyListing = async () => {
		let url = `http://localhost:4000/property-listing`;

		let res = await fetch(url);

		let list = await res.json();

		setList(list);
	};

	return (
		<div>
			{/* NAVBAR */}
			<NavbarOther />

			<div className="container">
				<div className="row justify-content-center">
					<div className="col-sm-12" style={{ maxHeight: "200px" }}>
						{/* PROPERTY HOUSE SALE & IMAGE DIV */}
						<div className="row mt-5">
							<div
								className="col-md-6 col-sm-12"
								style={{ maxHeight: "200px" }}
							>
								<h3>Houses for sale near me</h3>
								<p style={{ maxWidth: "70%" }}>
									Find houses for sale near you. View photos, open house
									information, and property details for nearby real estate.
								</p>
							</div>
							<div
								className="div-img col-md-6 col-sm-12"
								style={{ maxHeight: "200px" }}
							>
								<img
									src="https://ssl.cdn-redfin.com/vLATEST/corvstatic/customer-pages/1bce9a4e012a6bc1306fd9cf4c7b8c25.png"
									alt=""
									style={{ maxHeight: "75%", background: "cover" }}
								/>
							</div>
						</div>

						{/* PROPERTY CARDS */}
						<div>
							<h3>Properties in Mumbai</h3>
							<div className="d-flex">
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
							</div>
						</div>

						<div className="mt-5">
							<h3>Properties in Delhi</h3>
							<div className="d-flex">
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
							</div>
						</div>

						<div className="mt-5">
							<h3>Properties in Banglore</h3>
							<div className="d-flex">
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
							</div>
						</div>

						<div className="mt-5 ">
							<h3>Properties in Hyderabad</h3>
							<div className="d-flex">
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
								<PropertyCard />
							</div>
						</div>
					</div>

					{/* FOOTER */}
					{/* <Footer /> */}
				</div>
			</div>
		</div>
	);
}

export default PropertyListing;
