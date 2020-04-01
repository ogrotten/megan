import React from 'react';
import { useStateLink } from "@hookstate/core";
import { Container, Grid, Image } from 'semantic-ui-react'

import { stateLink } from "../state/hookstate"
import MainSide from "./components/MainSide"
import PageSide from "./components/PageSide"

const Main = () => {
	const state = useStateLink(stateLink);
	// console.log("main > ",state.value.title, state.value.body);
	return (
		// <div>
		// 	<p>First title: {state.value.body}</p>
		// 	<MainSide />
		// 	<PageSide />
		// </div>
		<Container style={{maxWidth: "1100px"}}>
			<Grid celled>
				<Grid.Row>
					<Grid.Column width={4}>
						<h2>Collection Title</h2>
					</Grid.Column>
					<Grid.Column width={12} style={{margin: "auto 0"}}>
						<p>Status Bar</p>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column width={4}>
						<h3>Nav Sidebar</h3>
					</Grid.Column>
					<Grid.Column width={9}>
						<h1>Main Content</h1>
						<h2>Main Content</h2>
						<h3>Main Content</h3>
						<h4>Main Content</h4>
						<h5>Main Content</h5>
						<p>Main Content</p>
					</Grid.Column>
					<Grid.Column width={3}>
						<h4>Secondary Content</h4>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>

	)
}

export default Main