import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
// import './App.css';

// Pages
import Demo from "./pages/Demo"
import Home from "./pages/Home"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/demo" component={Demo} />
					<Redirect  from="*" to="/" component={Demo} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;