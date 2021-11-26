import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
	render() {
		return (
			<div className="header-container">
				<Link to="/" className="header-link">
					Home
				</Link>
				<Link to="/otherpage" className="header-link">
					Other page
				</Link>
			</div>
		);
	}
}

export default Header;
