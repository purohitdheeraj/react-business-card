import React from "react";
import twitter from "../assets/twitter-icon.png";
import facebook from "../assets/fb-icon.png";
import instagram from "../assets/insta-icon.png";
import github from "../assets/github-icon.png";

function Footer() {
	return (
		<footer className="footer">
			<ul className="social-icons-container">
				<li>
					<img src={twitter} alt="twitter" />
				</li>
				<li>
					<img src={facebook} alt="facebook" />
				</li>
				<li>
					<img src={instagram} alt="instagram" />
				</li>
				<li>
					<img src={github} alt="github" />
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
