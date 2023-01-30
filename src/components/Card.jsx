import React from "react";
import About from "./About";
import CardImage from "./CardImage";
import Footer from "./Footer";
import Info from "./Info";
import Interest from "./Interest";

function Card() {
	return (
		<div className="card">
			<CardImage />
			<div className="card-info">
				<Info />
				<About />
				<Interest />
			</div>
			<Footer />
		</div>
	);
}

export default Card;
