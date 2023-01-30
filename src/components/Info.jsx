import React from "react";

function Info() {
	return (
		<section className="info">
			<h1 className="info-name">Dheeraj Purohit</h1>
			<p className="info-role">Frontend Developer</p>
			<small className="info-website">
				purohitdheeraj.com
			</small>
			<div className="btn-wrapper">
				<button className="btn btn-email">Email</button>
				<button className="btn btn-linkedIn">LinkedIn</button>
			</div>
		</section>
	);
}

export default Info;
