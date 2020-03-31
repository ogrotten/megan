import React from 'react';
import { createStateLink, useStateLink } from "@hookstate/core";

import {stateLink} from "../state/hookstate"

const Main = () => {
	const state = useStateLink(stateLink);
	console.log(state.value.title, state.value.body);
	return <></>
}

export default Main