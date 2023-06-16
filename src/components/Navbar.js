import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';

function Navbar() {
	return (
		<div>
			<div class="row">
				<div class="col-sm-12">
					<div class="bkg_img image-container mb-5">
						<div class="gradient-overlay"></div>
						<div class="overlay-content">
							<div class="row">
								<div class="col-12">
									<nav
										class="navbar navbar-expand-lg"
										style={{ width: "100%" }}
									>
										<a
											class="navbar-brand nav ms-4 navbar-dark"
											href="./home.html"
										>
											{/* <svg
												xmlns="http://www.w3.org/2000/svg"
												width="30"
												height="30"
												fill="currentColor"
												class="bi bi-house"
												viewBox="0 0 16 16"
											>
												<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
											</svg> */}
                                            <OtherHousesOutlinedIcon fontSize="large"/>
                                            <span>&nbsp;</span>
                                            <span>&nbsp;</span>
											<h3>ElitePro</h3>
										</a>
										<button
											class="navbar-toggler"
											type="button"
											data-toggle="collapse"
											data-target="#navbarNav"
											aria-controls="navbarNav"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<span class="navbar-toggler-icon"></span>
										</button>

										<div
											class="collapse navbar-collapse justify-content-end mx-3 navbar-dark"
											id="navbarNav"
										>
											{/* <!-- SEARCH --> */}

											<form class="search-form me-4">
												<input type="text" placeholder="Search" />
												<button type="submit">
													{/* <img src="" alt="" id="search_icon" /> */}
                                                    <SearchIcon />
												</button>
											</form>

											<ul class="navbar-nav">
												<li class="nav-item active px-2">
													<a class="nav-link nav-font-color nav-color" href="#">
														Home
													</a>
												</li>
												<li class="nav-item px-2">
													<a class="nav-link nav-font-color nav-color" href="#">
														Lease
													</a>
												</li>
												<li class="nav-item px-2">
													<a class="nav-link nav-font-color nav-color" href="">
														Rent
													</a>
												</li>
												<li class="nav-item px-2">
													<a
														class="nav-link nav-font-color nav-color"
														href="./aboutus.html"
													>
														About Us
													</a>
												</li>
												<li class="nav-item px-2">
													<a
														class="nav-link nav-font-color"
														href="./contactus.html"
													>
														Contact Us
													</a>
												</li>
											</ul>
										</div>

										<div class="nav-button mx-2">
											<input
												type="button"
												class="custom-button"
												value="Log In"
												onclick="window.location.href='./login.html'"
											/>
											<input
												type="button"
												class="custom-button"
												value="Sign Up"
												onclick="window.location.href='./registration.html'"
											/>
										</div>
									</nav>
								</div>
								<div class="body_content">
									<div class="body_info">
										<h1>The best property related website in india</h1>
										<h3>Find the best property deal, rentals in India</h3>
									</div>
									{/* <!-- <div class="col-sm-3 col-md-6 col-lg-8 mt-5">
                            <h1 class="display-4 text-white">Welcome to Dream Properties</h1>
							<p class="lead text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								pulvinar ligula eu fringilla eleifend. Nunc sed volutpat libero.
							</p>
							<a class="btn btn-primary btn-lg" href="./services.html"
                            >Explore Services</a
							>
						</div> --> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
