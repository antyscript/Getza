// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
function Footer() {
	const styles = {
		footer: {
			padding: "20px",
			textAlign: "center",
			backgroundColor: "#222",
			color: "#fff",
			marginTop: "auto"
		},
		links: {
			marginTop: "10px"
		},
		link: {
			color: "#fff",
			margin: "0 10px",
			textDecoration: "none"
		}
	};

	return (
		<footer style={styles.footer}>
			<p>© 2025 Getza. All rights reserved.</p>
			<div style={styles.links}>
				<Link to="/about" style={styles.link}>
					About
				</Link>
				<Link to="/contact" style={styles.link}>
					Contact
				</Link>
				<Link to="/privacy" style={styles.link}>
					Privacy Policy
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
