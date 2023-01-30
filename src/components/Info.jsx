import React from "react";
import profileImg from "../assets/dheeraj-profile.jpg";

function Info() {
	return (
		<div>
			<img src={profileImg} alt="profile-img" />
			<h1>Dheeraj Purohit</h1>
			<p>Frontend Developer</p>
			<small>purohitdheeraj.com</small>
			<button>Email</button>
			<button>LinkedIn</button>
		</div>
	);
}

export default Info;
