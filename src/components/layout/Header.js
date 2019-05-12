import React from "react";
import { Link } from "react-router-dom";

function setActive(element, navItems) {
	if (!element.classList.contains("logo")) {
		navItems.forEach(value => value.classList.remove("selectedNavigation"));
		element.classList.add("selectedNavigation");
	} else {
		navItems.forEach(value => value.classList.remove("selectedNavigation"));
		navItems[0].classList.add("selectedNavigation");
	}
}

function Header() {
	const navItems = document.querySelectorAll(".navItem");
	navItems.forEach(element => {
		console.log(element);
		element.addEventListener("click", () => setActive(element, navItems));
	});

	return (
		<header style={headerStyle}>
			<h1 className="logo">TodoList</h1>
			<Link className="selectedNavigation navItem" to="/">
				Home
			</Link>{" "}
			|{" "}
			<Link className="navItem" to="/about">
				About
			</Link>{" "}
			|{" "}
			<Link className="navItem" to="/contact">
				Contact
			</Link>
		</header>
	);
}

const headerStyle = {
	background: "#333",
	color: "#fff",
	textAlign: "center",
	padding: "10px"
};

export default Header;
