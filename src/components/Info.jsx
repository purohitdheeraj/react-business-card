import React from "react";
// import profileImg from "../assets/dheeraj-profile.jpg";

function Info() {
	return (
		<div className="info">
			<div className="profile-image"></div>
			<h1 className="name">Dheeraj Purohit</h1>
			<p className="role">Frontend Developer</p>
			<small className="website">
				purohitdheeraj.com
			</small>
			<div className="btn-wrapper">
				<button className="btn">Email</button>
				<button className="btn">LinkedIn</button>
			</div>
		</div>
	);
}

export default Info;
