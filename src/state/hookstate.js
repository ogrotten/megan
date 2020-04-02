import { createStateLink } from "@hookstate/core";
// import database from "../data/database";


const dataState = randdata();
	// const initdataState = {
	// 	title: "Title",
	// 	body: "Body data",
	// 	modified: 0,
	// 	created: new Date().getTime(),
	// 	tags: "tags list goes here",
	// };

export const dataLink = createStateLink(dataState)



const pageState = {
	page: "page"
}

export const pageLink = createStateLink(pageState);



const allState = []

export const allLink = createStateLink(allState);




function randdata () {

	return {
		title: randmegan().title,
		body: randmegan().body,
		tags: randmegan().tags,
		modified: 0,
		created: new Date().getTime()
	}

	function rand(max) {
		// generate a random number from 0 to "max" argument
		return Math.floor(Math.random() * Math.floor(max));
	}

	function randmegan() {
		const megandata = require(`../data/megan.json`)	
		return megandata[rand(megandata.length)]
	}
}