import React, { useState } from 'react';
import { useStateLink } from "@hookstate/core";
import { Container, Menu } from 'semantic-ui-react'

import { dataState, pageState } from "../../state/hookstate"

const Main = () => {
	return (
		<Container fluid className="leftside">
			<h1>Main Content</h1>
			<h2>Main Content</h2>
			<h3>Main Content</h3>
			<h4>Main Content</h4>
			<h5>Main Content</h5>
			<p>Main Content</p>
		</Container>
	)
}

export default Main