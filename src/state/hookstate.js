import { createStateLink } from "@hookstate/core";

// import database from "../data/database";

const initdataState = {
	title: "Title",
	body: "Body data",
	modified: 0,
	created: new Date().getTime(),
	tags: "tags list goes here",
};

export const dataState = createStateLink(initdataState)

const initpageState = {
	page: "main"
}

export const pageState = createStateLink(initpageState);