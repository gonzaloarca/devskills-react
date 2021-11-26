import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import Home from "../pages/Home";
import OtherPage from "../pages/OtherPage";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/otherpage" exact component={OtherPage} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
