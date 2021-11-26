import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Dashboard />
				<Footer />
			</div>
		);
	}
}

export default App;
