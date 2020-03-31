import React from 'react';
import { createStateLink, useStateLink } from "@hookstate/core";

import { stateLink } from "../state/hookstate"
import MainSide from "./components/MainSide"
import PageSide from "./components/PageSide"

const Main = () => {
	const state = useStateLink(stateLink);
	// console.log("main > ",state.value.title, state.value.body);
	return (
		<div>
			<p>First title: {state.value.body}</p>
			<MainSide />
			<PageSide />
		</div>
	)
}

export default Main