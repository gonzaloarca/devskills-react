import React from "react";
import "./Home.css";
import Dashboard from "../components/Dashboard";

class Home extends React.Component {
	render() {
		return (
			<div className="home-container">
				<Dashboard />
			</div>
		);
	}
}

export default Home;
