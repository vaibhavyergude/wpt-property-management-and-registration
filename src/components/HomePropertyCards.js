import React from "react";

function HomePropertyCards() {
	return (
		<div>
			<div class="">
				<h3 class="mt-5 text-center">Top Rated Properties</h3>
				<div class="row mt-5 justify-content-center">
					<div class="col-sm-12 col-md-2">
						<div class="card">
							<img
								src="./img/26.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body mt-3">
								<h5 class="card-title">Piyush Residency</h5>
								<p class="card-text">
									Bestowing excellent hospitality to its every category of
									guests, Piyush Residency reflects the culture and ethos of its
									location. With jawdropping views
								</p>
								<a href="#" class="btn btn-primary">
									Go to Property
								</a>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-md-2">
						<div class="card">
							<img
								src="./img/11.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body mt-3">
								<h5 class="card-title">Vaibhav Apartments</h5>
								<p class="card-text">
									Vaibhav Apratments goes above and beyond to provide
									exceptional hospitality to guests from all backgrounds,
									showcasing the local culture and values of its..
								</p>
								<a href="#" class="btn btn-primary">
									Go to Property
								</a>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-md-2" style={{ "max-height": "605px" }}>
						<div class="card">
							<img
								src="./img/27.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body mt-3">
								<h5 class="card-title">Shivani Society</h5>
								<p class="card-text">
									As you step inside, you are greeted by an openness layout that
									seamlessly combines the living, dining, and kitchen areas. The
									design of space fosters a sense of openness.
								</p>
								<a href="#" class="btn btn-primary">
									Go to Property
								</a>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-md-2">
						<div class="card">
							<img
								src="./img/22.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body">
								<h5 class="card-title mt-3">Aditya Enclave</h5>
								<p class="card-text">
									The project is set in an area of 8 acres and offers various
									configurations including residential plot formats. The plot
									area is 1200.0 sq.ft. and there is one building. With all the
									accessibilty
								</p>
								<a href="#" class="btn btn-primary">
									Go to Property
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="row justify-content-center">
					<div class="col-md-6 my-4">
						<div class="d-flex mt-5">
							<img
								className="col-12"
								style={{ width: "500px" }}
								src="./img/premier.jpg"
								alt="Image not found"
							/>
							<div class="ms-5">
								<div class="w-200">
									<h1 class="fw-bold">Local expertise for luxury homes</h1>
									<p>
										Premier agents have years of experience buying and selling
										high-end homes. Get the highest level of service from our
										best agents
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-md-6">
						<div class="d-flex mt-5">
							<div class="ms-5">
								<div class="w-200" style="width: 250px">
									<h1 class="fw-bold">
										Find your perfect rental on Dream Properties
									</h1>
									<p>
										Whether you’re searching for houses, apartments, or condos,
										it's easy to find a place you'll love.
									</p>
								</div>
							</div>
							<img
								class="ms-5 col-12"
								style={{ width: "500px" }}
								src={"./img/Rental_Image.jpg"}
								alt="Image not found"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePropertyCards;
