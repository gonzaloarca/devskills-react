import React from "react";
import "./Dashboard.css";
import Form from "./Form";
import Table from "./Table";

class Dashboard extends React.Component {
	render() {
		return (
			<div className="dashboard">
				<Form />
				<Table />
			</div>
		);
	}
}

export default Dashboard;
