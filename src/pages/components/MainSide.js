import React from 'react';
import { useStateLink } from "@hookstate/core";

import { stateLink } from "../../state/hookstate"

const MainSide = () => {
	const state = useStateLink(stateLink);
	return (
		<div>
			<p>Second: {state.value.title}</p>
		</div>
	)
}

export default MainSide