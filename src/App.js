import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
// import './App.css';

// Pages
import Demo from "./pages/Demo"
import Main from "./pages/Main"
import Page from "./pages/Page"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/demo" component={Demo} />
					<Route exact path="/page" component={Page} />
					<Redirect from="*" to="/" component={Main} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;