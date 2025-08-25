// Header.js
import React from "react";
import { Link } from "react-router-dom";
function Header() {
	const styles = {
		header: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			padding: "10px 20px",
			backgroundColor: "rgb(79,131,247)",
			color: "white"
		},
		title: {
			margin: 0
		},
		navList: {
			listStyle: "none",
			display: "flex",
			gap: "15px",
			margin: 0,
			padding: 0
		},
		navItem: {
			textDecoration: "underline white",
			color: "#fff"
		}
	};

	return (
		<header style={styles.header}>
			<h1 style={styles.title}>Getza</h1>
			<nav>
				<ul style={styles.navList}>
					<li>
						<Link style={styles.navItem} to="/">
							Home
						</Link>
					</li>
					<li>
						<Link style={styles.navItem} to="/products">
							Products
						</Link>
					</li>
					<li>
						<Link style={styles.navItem} to="/market">
							Market
						</Link>
					</li>
					<li>
						<Link style={styles.navItem} to="/profile">
							Profile
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
