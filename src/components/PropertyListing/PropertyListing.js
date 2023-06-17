import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import NavbarOther from "../NavbarOther/NavbarOther";

function PropertyListing() {
	return (
		<div>
			{/* NAVBAR */}
			<NavbarOther />

			{/* PROPERTY HOUSE SALE & IMAGE DIV */}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-sm-12" style={{ maxHeight: "200px" }}>
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
                            <h3>Properties in Mumbai</h3>
						<div className="d-flex">
							<PropertyCard />
							<PropertyCard />
							<PropertyCard />
                            <PropertyCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PropertyListing;