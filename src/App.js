import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import './themes/original/style.scss';

// Pages
import Demo from "./pages/Demo"
import Frame from "./pages/Frame"
import Page from "./pages/Page"

function App() {
	return (
		
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Frame} />
					<Route exact path="/demo" component={Demo} />
					<Route exact path="/page" component={Page} />
					<Redirect from="*" to="/" component={Frame} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;