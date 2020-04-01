import React from 'react';
import { useStateLink } from "@hookstate/core";
// import { dataState, pageState } from "../state/hookstate"
import { pageState } from "../state/hookstate"
import { Container, Grid } from 'semantic-ui-react'

import LeftSide from "./components/LeftSide"
import Main from "./components/Main"
import Page from "./components/Page"

const Index = () => {
	// const dataS = useStateLink(dataState);
	const pageS = useStateLink(pageState);


	// figure out and grab whichever component to show
	const mainsection = {
		"main": <Main />,
		"page": <Page />
	}

	return (
		<Container style={{ maxWidth: "1100px" }}>
			<Grid celled>
				<Grid.Row>
					<Grid.Column width={4}>
						<h2>Collection Title</h2>
					</Grid.Column>
					<Grid.Column width={12} style={{ margin: "auto 0" }}>
						<p>Status Bar</p>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column width={4}>
						<LeftSide />
					</Grid.Column>
					<Grid.Column width={9}>
						{mainsection[pageS.value.page]}
					</Grid.Column>
					<Grid.Column width={3}>
						<h4>Secondary Content</h4>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	)
}

export default Index