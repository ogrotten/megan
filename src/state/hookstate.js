import { createStateLink } from "@hookstate/core";
// import "../data/megan0.json"
// import "../data/megan1.json"
// import "../data/megan2.json"

// import database from "../data/database";


const initdataState = randdata();
// const initdataState = {
// 	title: "Title",
// 	body: "Body data",
// 	modified: 0,
// 	created: new Date().getTime(),
// 	tags: "tags list goes here",
// };

export const dataState = createStateLink(initdataState)



const initpageState = {
	page: "page"
}

export const pageState = createStateLink(initpageState);



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