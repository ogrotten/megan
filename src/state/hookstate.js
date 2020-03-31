import { createStateLink, useStateLink } from "@hookstate/core";

// import database from "../data/database";

const initState = {
	title: "Title",
	body: "Body data",
	modified: 0,
	created: new Date().getTime(),
	tags: "tags list goes here",
};

export const stateLink = createStateLink(initState)
