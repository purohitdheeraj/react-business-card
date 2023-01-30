import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";
import Interest from "./Interest";

function Card() {
	return (
		<div className="card">
			<Info />
			<About />
			<Interest />
			<Footer />
		</div>
	);
}

export default Card;
