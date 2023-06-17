import React from "react";

import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
	return (
		<Carousel className="h-50">
			<Carousel.Item interval={1000}>
				<img
					height={370}
					className="d-block w-100"
					src="https://picsum.photos/1080"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					height={370}
					className="d-block w-100"
					src="https://picsum.photos/1070"
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height={370}
					className="d-block w-100"
					src="https://picsum.photos/1060"
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default HomeCarousel;
